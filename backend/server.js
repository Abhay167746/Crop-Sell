



import axios from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ======================
// 🔹 MIDDLEWARE
// ======================
app.use(cors());
app.use(express.json());

// ======================
// 🔹 ROUTES
// ======================
app.use("/api/chats", chatRoutes);

// ======================
// 🔹 DB CONNECT
// ======================
connectDB();

// ======================
// 🔹 CONFIG
// ======================
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];
const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

const mandiData = {
  tomato: { min: 18, max: 26 },
  onion: { min: 20, max: 32 },
  potato: { min: 12, max: 20 },
  cabbage: { min: 10, max: 18 },
  cauliflower: { min: 12, max: 22 },
};

// ======================
// 🌐 ADVANCED LANGUAGE DETECTION
// ======================
function detectLanguage(text) {
  const hindiScript = /[\u0900-\u097F]/;

  const romanHindiWords = [
    "bhai","kaise","kya","kyu","kaun","kahan","kab",
    "kitna","bechna","mandi","sabzi","tamatar","aloo",
    "pyaz","mujhe","mera","hai","haan","nahi","karna",
    "lene","dena","bhav","rate"
  ];

  const lower = text.toLowerCase();

  if (hindiScript.test(text)) return "Hindi";

  if (romanHindiWords.some(word => lower.includes(word))) {
    return "Hindi";
  }

  return "English";
}

// ======================
// 🔹 CACHE
// ======================
const cache = {};
const CACHE_TTL = 10 * 60 * 1000;

// ======================
// 🔹 FETCH PRICE
// ======================
async function getMandiPrice(crop, location) {
  const cacheKey = `${crop}_${location}`;

  if (cache[cacheKey] && Date.now() - cache[cacheKey].time < CACHE_TTL) {
    return cache[cacheKey].data;
  }

  try {
    let allRecords = [];

    for (let i = 0; i < 3; i++) {
      const response = await axios.get(
        "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
        {
          params: {
            "api-key": process.env.DATA_GOV_API_KEY,
            format: "json",
            limit: 100,
            offset: i * 100,
          },
        }
      );

      allRecords = [...allRecords, ...response.data.records];
    }

    const filtered = allRecords.filter((item) => {
      const commodity = item.commodity?.toLowerCase() || "";
      const market = item.market?.toLowerCase() || "";

      const min = parseInt(item.min_price);
      const max = parseInt(item.max_price);

      return (
        commodity.includes(crop) &&
        market.includes(location) &&
        !isNaN(min) &&
        !isNaN(max) &&
        min > 0 &&
        max > 0
      );
    });

    const finalData =
      filtered.length > 0
        ? filtered
        : allRecords.filter((item) => {
            const commodity = item.commodity?.toLowerCase() || "";
            const min = parseInt(item.min_price);
            const max = parseInt(item.max_price);

            return (
              commodity.includes(crop) &&
              !isNaN(min) &&
              !isNaN(max) &&
              min > 0 &&
              max > 0
            );
          });

    if (finalData.length === 0) return null;

    const avgMin = Math.round(
      finalData.reduce((sum, i) => sum + parseInt(i.min_price), 0) /
        finalData.length
    );

    const avgMax = Math.round(
      finalData.reduce((sum, i) => sum + parseInt(i.max_price), 0) /
        finalData.length
    );

    const result = { min: avgMin, max: avgMax };

    cache[cacheKey] = { data: result, time: Date.now() };

    return result;
  } catch (error) {
    console.log("❌ API Error:", error.message);
    return null;
  }
}

// ======================
// 🧠 AI RESPONSE ENGINE
// ======================
async function generateAIResponse({ message, crop, quantity, price }) {

  const language = detectLanguage(message);

  let sellingType = "local shops";
  if (quantity > 100) sellingType = "wholesale mandi";
  else if (quantity > 30) sellingType = "semi-wholesale buyers";

  const prompt = `
You are an expert Crop Selling Advisor helping farmers in Haldwani, India.

🎯 GOAL:
Help farmers earn maximum profit with practical advice.

━━━━━━━━━━━━━━━━━━━━━━━
🌐 LANGUAGE RULE (STRICTEST):

User language: ${language}

IF Hindi:
→ Convert Roman Hindi into proper Hindi
→ Reply ONLY in PURE Hindi (देवनागरी)
→ Do NOT use English words
→ Do NOT use Hinglish

IF English:
→ Reply ONLY in English

━━━━━━━━━━━━━━━━━━━━━━━
🧠 CONTEXT:

Crop: ${crop}
Quantity: ${quantity || "not specified"}
Selling Type: ${sellingType}
Price Range: ₹${price.min} – ₹${price.max}

━━━━━━━━━━━━━━━━━━━━━━━
🗣️ STYLE:

- Speak like real mandi expert
- Keep it short, clear, practical
- Avoid robotic sentences

━━━━━━━━━━━━━━━━━━━━━━━
⚠️ FORMAT (STRICT):

📍 BEST BUYERS
• Based on quantity (${sellingType})

💰 EXPECTED PRICE
• ₹${price.min} – ₹${price.max} per kg (price changes daily)

⏰ BEST TIME TO SELL
• Time + reason

🚜 IMPORTANT TIP
• Practical farmer tip

━━━━━━━━━━━━━━━━━━━━━━━

User Query:
${message}
`;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a smart Indian agriculture expert.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.9,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let output = response.data.choices[0].message.content;

    // 🔥 FINAL CLEANUP (REMOVE ENGLISH IF HINDI)
    if (language === "Hindi") {
      output = output.replace(/[A-Za-z]/g, "");
    }

    return output;

  } catch (err) {
    console.log("❌ AI ERROR:", err.response?.data || err.message);
    return null;
  }
}

// ======================
// 🚀 MAIN API
// ======================
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message?.trim()) {
      return res.json({ reply: "⚠️ Please enter a valid question." });
    }

    const lowerMsg = message.toLowerCase();

    const detectedCrop =
      crops.find((crop) => lowerMsg.includes(crop)) || "tomato";

    const detectedLocation =
      locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

    const quantityMatch = message.match(/\d+/);
    const quantity = quantityMatch ? parseInt(quantityMatch[0]) : 0;

    let price = await getMandiPrice(detectedCrop, detectedLocation);

    if (!price || price.min === 0 || price.max === 0) {
      price = mandiData[detectedCrop];
    }

    const aiReply = await generateAIResponse({
      message,
      crop: detectedCrop,
      quantity,
      price,
    });

    if (aiReply) {
      return res.json({ reply: aiReply });
    }

    // fallback
    res.json({
      reply: `
📍 BEST BUYERS
• ${quantity > 100 ? "Naveen Mandi (bulk selling)" : "Local market (Tikonia)"}

💰 EXPECTED PRICE
• ₹${price.min} – ₹${price.max}

⏰ BEST TIME
• Morning (5–9 AM)

🚜 TIP
• Sort crops before selling
`,
    });

  } catch (error) {
    console.error("❌ Server Error:", error);

    res.status(500).json({
      reply: "⚠️ Server error. Please try again.",
    });
  }
});

// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});




//2nd 


// import axios from "axios";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import chatRoutes from "./routes/chatRoutes.js";
// import connectDB from "./config/db.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/api/chats", chatRoutes);
// connectDB();

// const GROQ_API_KEY = process.env.GROQ_API_KEY;

// // ======================
// // 🌾 CROP MAPPING
// // Both English + Hindi detection
// // ======================
// const CROP_MAP = [
//   { key: "tomato",      en: ["tomato", "tamatar", "tomatoes"],           hi: ["टमाटर"] },
//   { key: "onion",       en: ["onion", "pyaz", "pyaaz", "onions"],        hi: ["प्याज"] },
//   { key: "potato",      en: ["potato", "aloo", "potatoes"],              hi: ["आलू"] },
//   { key: "cauliflower", en: ["cauliflower", "gobhi", "phool gobhi"],      hi: ["गोभी","फूलगोभी"] },
//   { key: "cabbage",     en: ["cabbage", "patta gobhi", "band gobhi"],     hi: ["पत्तागोभी","बंदगोभी"] },
//   { key: "carrot",      en: ["carrot", "gajar"],                          hi: ["गाजर"] },
//   { key: "pea",         en: ["pea", "matar"],                             hi: ["मटर"] },
//   { key: "wheat",       en: ["wheat", "gehu", "gehun"],                   hi: ["गेहूँ","गेहू"] },
//   { key: "maize",       en: ["maize", "corn", "makka", "makkai"],         hi: ["मक्का","मक्की"] },
//   { key: "mustard",     en: ["mustard", "sarson"],                        hi: ["सरसों"] },
//   { key: "coriander",   en: ["coriander", "dhaniya", "dhania"],           hi: ["धनिया"] },
//   { key: "apple",       en: ["apple", "seb"],                             hi: ["सेब"] },
//   { key: "pear",        en: ["pear", "nashpati"],                         hi: ["नाशपाती"] },
// ];

// const LOCATION_MAP = [
//   { key: "haldwani",      terms: ["haldwani", "haldwāni", "हल्द्वानी"] },
//   { key: "kathgodam",     terms: ["kathgodam", "काठगोदाम"] },
//   { key: "tikonia",       terms: ["tikonia", "टिकोनिया"] },
//   { key: "rudrapur",      terms: ["rudrapur", "रुद्रपुर"] },
//   { key: "bareilly",      terms: ["bareilly", "bareli", "बरेली"] },
//   { key: "ramnagar",      terms: ["ramnagar", "रामनगर"] },
// ];

// // Fallback prices (₹/kg) — used when API returns nothing
// const FALLBACK_PRICES = {
//   tomato:      { min: 18, max: 28 },
//   onion:       { min: 20, max: 32 },
//   potato:      { min: 12, max: 20 },
//   cauliflower: { min: 12, max: 22 },
//   cabbage:     { min: 10, max: 18 },
//   carrot:      { min: 14, max: 24 },
//   pea:         { min: 25, max: 40 },
//   wheat:       { min: 20, max: 26 },
//   maize:       { min: 15, max: 22 },
//   mustard:     { min: 45, max: 60 },
//   coriander:   { min: 30, max: 55 },
//   apple:       { min: 60, max: 120 },
//   pear:        { min: 30, max: 60 },
// };

// // Best buyers by quantity range
// const BUYER_ADVICE = {
//   bulk:   "नवीन मंडी हल्द्वानी (wholesale) या कोल्ड स्टोरेज व्यापारी",
//   medium: "टिकोनिया बाज़ार या काठगोदाम मंडी के अड़तिए (commission agents)",
//   small:  "स्थानीय सब्ज़ी मंडी या गाँव के retail vendor",
// };

// // ======================
// // 🌐 LANGUAGE DETECTION
// // ======================
// function detectLanguage(text) {
//   const devanagari = /[\u0900-\u097F]/;
//   if (devanagari.test(text)) return "hindi";

//   const romanHindi = [
//     "bhai","kaise","kya","kyu","kaun","kahan","kab","kitna",
//     "bechna","mandi","sabzi","tamatar","aloo","pyaz","mujhe",
//     "mera","hai","haan","nahi","karna","bhav","rate","kilo",
//     "fasal","bechun","chahiye","batao","bata","dena","lena",
//     "sasta","mehnga","accha","sunlo","yahan","wahan","kitne",
//   ];

//   const lower = text.toLowerCase();
//   const matches = romanHindi.filter(w => lower.includes(w)).length;
//   return matches >= 1 ? "roman_hindi" : "english";
// }

// // ======================
// // 🌾 SMART ENTITY EXTRACTION
// // ======================
// function extractEntities(message) {
//   const lower = message.toLowerCase();

//   // Detect crop
//   let detectedCrop = "tomato";
//   for (const crop of CROP_MAP) {
//     const allTerms = [...crop.en, ...crop.hi];
//     if (allTerms.some(t => lower.includes(t.toLowerCase()))) {
//       detectedCrop = crop.key;
//       break;
//     }
//   }

//   // Detect location
//   let detectedLocation = "haldwani";
//   for (const loc of LOCATION_MAP) {
//     if (loc.terms.some(t => lower.includes(t.toLowerCase()))) {
//       detectedLocation = loc.key;
//       break;
//     }
//   }

//   // Detect quantity — handles "50 kg", "50kg", "पचास किलो" etc.
//   const numMatch = message.match(/(\d+(?:\.\d+)?)\s*(?:kg|kilo|किलो|kilogram)?/i);
//   const quantity = numMatch ? parseFloat(numMatch[1]) : 0;

//   // Selling context
//   let sellingType = "small";
//   if (quantity > 200) sellingType = "bulk";
//   else if (quantity > 50) sellingType = "medium";

//   return { detectedCrop, detectedLocation, quantity, sellingType };
// }

// // ======================
// // 🔹 PRICE CACHE
// // ======================
// const priceCache = {};
// const CACHE_TTL = 15 * 60 * 1000; // 15 min

// // ======================
// // 📊 FETCH LIVE MANDI PRICE
// // ======================
// async function getMandiPrice(crop, location) {
//   const key = `${crop}_${location}`;
//   if (priceCache[key] && Date.now() - priceCache[key].time < CACHE_TTL) {
//     return priceCache[key].data;
//   }

//   try {
//     let allRecords = [];
//     for (let i = 0; i < 3; i++) {
//       const res = await axios.get(
//         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
//         {
//           params: {
//             "api-key": process.env.DATA_GOV_API_KEY,
//             format: "json",
//             limit: 100,
//             offset: i * 100,
//           },
//           timeout: 5000,
//         }
//       );
//       allRecords = [...allRecords, ...(res.data.records || [])];
//     }

//     // Try location-specific first
//     let filtered = allRecords.filter(item => {
//       const c = (item.commodity || "").toLowerCase();
//       const m = (item.market || "").toLowerCase();
//       const min = parseInt(item.min_price);
//       const max = parseInt(item.max_price);
//       return c.includes(crop) && m.includes(location) && min > 0 && max > 0;
//     });

//     // Fallback: crop only
//     if (filtered.length === 0) {
//       filtered = allRecords.filter(item => {
//         const c = (item.commodity || "").toLowerCase();
//         const min = parseInt(item.min_price);
//         const max = parseInt(item.max_price);
//         return c.includes(crop) && min > 0 && max > 0;
//       });
//     }

//     if (filtered.length === 0) return null;

//     const avgMin = Math.round(filtered.reduce((s, i) => s + parseInt(i.min_price), 0) / filtered.length);
//     const avgMax = Math.round(filtered.reduce((s, i) => s + parseInt(i.max_price), 0) / filtered.length);
//     const result = { min: avgMin, max: avgMax, source: "live" };
//     priceCache[key] = { data: result, time: Date.now() };
//     return result;

//   } catch (err) {
//     console.log("⚠️ Price API error:", err.message);
//     return null;
//   }
// }

// // ======================
// // 🧠 MASTER PROMPT BUILDER
// // ======================
// function buildPrompt({ message, lang, crop, quantity, sellingType, price, location, farmerName }) {

//   const priceSource = price.source === "live" ? "live mandi data" : "estimated market data";
//   const buyerTip = BUYER_ADVICE[sellingType];
//   const quantityStr = quantity > 0 ? `${quantity} kg` : "quantity not specified";
//   const nameGreet = farmerName ? `Farmer's name: ${farmerName}` : "";

//   if (lang === "hindi" || lang === "roman_hindi") {
//     return `
// आप एक अनुभवी कृषि बाज़ार विशेषज्ञ हैं जो उत्तराखंड के हल्द्वानी क्षेत्र के किसानों की मदद करते हैं।

// ${nameGreet}
// फसल: ${crop}
// मात्रा: ${quantityStr}
// स्थान: ${location}
// मूल्य सीमा (${priceSource}): ₹${price.min} – ₹${price.max} प्रति किलो
// बेचने का तरीका: ${sellingType === "bulk" ? "थोक" : sellingType === "medium" ? "अर्ध-थोक" : "खुदरा"}
// सुझाए गए खरीदार: ${buyerTip}

// किसान का सवाल: "${message}"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 उत्तर देने के नियम:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 1. भाषा: पूरा जवाब शुद्ध हिंदी में दें (देवनागरी लिपि)
//    - अंकों के लिए ₹, kg, AM/PM लिख सकते हैं
//    - फसल के नाम हिंदी में लिखें
   
// 2. टोन: एक जानकार पड़ोसी की तरह बात करें — सरल, व्यावहारिक, भरोसेमंद

// 3. फॉर्मेट — EXACTLY इस तरह दें:

// 📍 सबसे अच्छे खरीदार
// • [${quantity > 0 ? quantity + " kg के लिए सबसे सही जगह" : "आपकी मात्रा के अनुसार"}]
// • [खरीदार का नाम / जगह / क्यों जाएं]

// 💰 आज का भाव
// • ₹${price.min} – ₹${price.max} प्रति किलो (${priceSource === "live mandi data" ? "आज का लाइव रेट" : "अनुमानित बाज़ार रेट"})
// • [किस समय / किस जगह ज़्यादा रेट मिलता है]

// ⏰ बेचने का सही समय
// • [सुबह/शाम + कारण — demand का समय]

// 🚜 ज़रूरी सलाह
// • [एक practical tip जो सीधे पैसे बढ़ाए]

// 📈 मुनाफ़ा बढ़ाने का तरीका
// • [एक specific advice — grading/sorting/timing/buyer negotiation]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⚠️ महत्वपूर्ण:
// - Robotic मत बोलो। हर जवाब किसान के सवाल के हिसाब से customize करो।
// - कोई भी generic filler sentence मत लिखो
// - हर bullet point में actionable information हो
// `;
//   }

//   // English prompt
//   return `
// You are an expert Crop Market Advisor for farmers in Haldwani, Uttarakhand, India.

// ${nameGreet}
// Crop: ${crop}
// Quantity: ${quantityStr}
// Location: ${location}
// Price range (${priceSource}): ₹${price.min} – ₹${price.max} per kg
// Selling type: ${sellingType}
// Suggested buyers: ${buyerTip}

// Farmer's question: "${message}"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// RULES:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 1. Language: Clear, simple English. Speak like a knowledgeable friend.
// 2. Tone: Practical, warm, expert. Not robotic. Not formal.
// 3. Every point must be ACTIONABLE — no filler.

// FORMAT — reply EXACTLY like this:

// 📍 Best Buyers
// • [Most suitable buyer for ${quantityStr}]
// • [Name / location / why go there]

// 💰 Today's Price
// • ₹${price.min} – ₹${price.max} per kg (${price.source === "live" ? "live mandi rate" : "estimated market rate"})
// • [Where/when you get the highest rate]

// ⏰ Best Time to Sell
// • [Morning/evening + reason — demand timing]

// 🚜 Important Tip
// • [One practical tip that directly increases profit]

// 📈 How to Earn More
// • [Specific advice — grading/sorting/direct buyers/cold storage]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// IMPORTANT:
// - Customize every answer to the farmer's specific question
// - No generic sentences
// - Every bullet = real actionable advice
// `;
// }

// // ======================
// // 🤖 AI CALL
// // ======================
// async function callGroqAI(prompt) {
//   const res = await axios.post(
//     "https://api.groq.com/openai/v1/chat/completions",
//     {
//       model: "llama-3.1-8b-instant",
//       messages: [
//         {
//           role: "system",
//           content: `You are AgroAI — India's most trusted crop market advisor for farmers in Haldwani, Uttarakhand. 
// You give hyper-local, practical, revenue-maximizing advice. 
// You speak in pure Hindi (Devanagari) when asked in Hindi or Roman Hindi.
// You NEVER give generic answers. Every response is specific to the crop, quantity, and location.`,
//         },
//         { role: "user", content: prompt },
//       ],
//       temperature: 0.75,
//       max_tokens: 600,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${GROQ_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       timeout: 15000,
//     }
//   );

//   return res.data.choices[0].message.content.trim();
// }

// // ======================
// // 🚀 MAIN CHAT API
// // ======================
// app.post("/api/chat", async (req, res) => {
//   try {
//     const { message, farmerName } = req.body;

//     if (!message?.trim()) {
//       return res.json({ reply: "⚠️ कृपया अपना सवाल लिखें। Please enter your question." });
//     }

//     const lang = detectLanguage(message);
//     const { detectedCrop, detectedLocation, quantity, sellingType } = extractEntities(message);

//     // Fetch live price
//     let price = await getMandiPrice(detectedCrop, detectedLocation);
//     const priceSource = price ? "live" : "estimated";

//     // Fallback to hardcoded prices
//     if (!price || price.min === 0 || price.max === 0) {
//       price = { ...FALLBACK_PRICES[detectedCrop] || { min: 15, max: 25 }, source: "estimated" };
//     } else {
//       price.source = "live";
//     }

//     const prompt = buildPrompt({
//       message,
//       lang,
//       crop: detectedCrop,
//       quantity,
//       sellingType,
//       price,
//       location: detectedLocation,
//       farmerName: farmerName || null,
//     });

//     const aiReply = await callGroqAI(prompt);

//     return res.json({
//       reply: aiReply,
//       meta: {
//         crop: detectedCrop,
//         location: detectedLocation,
//         quantity,
//         priceSource,
//         price,
//       },
//     });

//   } catch (error) {
//     console.error("❌ Server Error:", error.message);

//     // Smart fallback based on language
//     const lang = detectLanguage(req.body?.message || "");
//     const { detectedCrop, price: fp } = {
//       detectedCrop: "tomato",
//       price: FALLBACK_PRICES.tomato,
//     };

//     const fallback = lang !== "english"
//       ? `📍 सबसे अच्छे खरीदार\n• नवीन मंडी हल्द्वानी या टिकोनिया बाज़ार जाएं\n\n💰 आज का भाव\n• ₹${FALLBACK_PRICES.tomato.min} – ₹${FALLBACK_PRICES.tomato.max} प्रति किलो\n\n⏰ बेचने का सही समय\n• सुबह 5–9 बजे — इस समय सबसे ज़्यादा माँग होती है\n\n🚜 ज़रूरी सलाह\n• पके और कच्चे अलग करके ले जाएं, ज़्यादा दाम मिलेगा`
//       : `📍 Best Buyers\n• Go to Naveen Mandi Haldwani or Tikonia Bazaar\n\n💰 Today's Price\n• ₹${FALLBACK_PRICES.tomato.min} – ₹${FALLBACK_PRICES.tomato.max} per kg\n\n⏰ Best Time\n• Morning 5–9 AM — highest demand\n\n🚜 Tip\n• Sort ripe and raw separately for better price`;

//     return res.json({ reply: fallback });
//   }
// });

// // ======================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ AgroAI Server running on http://localhost:${PORT}`));


