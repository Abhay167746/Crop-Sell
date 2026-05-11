



import axios from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

import authRoutes from "./routes/authRoutes.js";// added

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

app.use("/api/auth", authRoutes); //added new

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
// 🧮 IS THIS A GREETING?
// ======================
function isGreeting(text) {
  const greetings = [
    "hi", "hello", "hey", "namaste", "namaskar", "hola", "sup", "yo",
    "क्या हाल है", "कैसे हो", "सुप", "हाय", "हेलो", "ही", "नमस्ते",
    "how are you", "whats up", "how ya doin", "morning", "evening",
    "good morning", "good evening", "good afternoon", "gud mrng"
  ];

  return greetings.some(g => text.toLowerCase().includes(g)) && text.length < 30;
}

// ======================
// 🌾 DOES THIS MENTION CROPS?
// ======================
function hasCropQuery(text) {
  const cropKeywords = [
    'tomato', 'tamatar', 'टमाटर', 'onion', 'pyaz', 'प्याज',
    'potato', 'aloo', 'आलू', 'cabbage', 'band gobi', 'बंद गोभी',
    'cauliflower', 'gobi', 'गोभी', 'फूलगोभी', 'sell', 'selling',
    'bechna', 'बेचना', 'price', 'bhav', 'भाव', 'rate', 'दर',
    'mandi', 'market', 'बाजार', 'buyer', 'खरीदार', 'cost',
    'quantity', 'मात्रा', 'kg', 'किलो', 'profit', 'मुनाफा'
  ];

  const lowerText = text.toLowerCase();
  return cropKeywords.some(kw => lowerText.includes(kw));
}

// ======================
// � CONVERSATIONAL GREETING RESPONSE
// ======================
async function generateGreetingResponse(message, language) {
  const systemPrompt = language === "Hindi" 
    ? `आप एक मित्रवत कृषि सलाहकार हैं जो किसानों से बात करते हैं। बस हल्के-फुल्के अंदाज में स्वागत करें और पूछें कि वह क्या बेचना चाहते हैं। लंबा जवाब न दें, सिर्फ 2-3 लाइन में जवाब दें।`
    : `You are a friendly agricultural advisor chatting with farmers. Give a warm, casual greeting in 2-3 lines. Ask what crop they want to sell. Don't give detailed information yet - just be conversational.`;

  const prompt = language === "Hindi"
    ? `किसान कह रहा है: "${message}"\n\nबस हल्के-फुल्के अंदाज से स्वागत करें और पूछें कि वह कौन सी फसल बेचना चाहते हैं। जवाब हिंदी में 2-3 लाइन में दें।`
    : `Farmer says: "${message}"\n\nGive a casual, friendly greeting and ask what crop they want to sell. Keep it to 2-3 lines. Be like a real friend!`;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.9,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.log("❌ GREETING ERROR:", err.message);
    
    // Simple fallback greeting
    return language === "Hindi"
      ? "नमस्ते भाई! 🙏 कौन सी फसल बेचनी है? (टमाटर, प्याज, आलू, गोभी?)"
      : "Hey there! 👋 What crop do you want to sell? (tomato, onion, potato, cabbage?)";
  }
}
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
async function generateAIResponse({ message, crop, quantity, price, location }) {

  // Safety check: if price or crop is undefined, return null
  if (!crop || !price || !price.min || !price.max) {
    console.log("❌ Missing required data for AI response");
    return null;
  }

  const language = detectLanguage(message);

  // Determine selling strategy based on quantity
  let sellingStrategy = "";
  let buyerCategory = "";
  
  if (quantity >= 500) {
    sellingStrategy = "wholesale trading platforms like AgriMarket or direct to processing units";
    buyerCategory = "Large bulk buyers and processing companies";
  } else if (quantity >= 100) {
    sellingStrategy = "government mandis and wholesale markets";
    buyerCategory = "Wholesale mandi traders";
  } else if (quantity >= 30) {
    sellingStrategy = "semi-wholesale dealers and retail shop owners";
    buyerCategory = "Retail vendors and small businesses";
  } else {
    sellingStrategy = "local vegetable shops, restaurants, and retail markets";
    buyerCategory = "Local retailers and small shops";
  }

  const systemPrompt = language === "Hindi" ? 
  `आप एक अनुभवी कृषि विशेषज्ञ हैं जो उत्तराखंड (विशेषकर हल्द्वानी) के किसानों को फसल बेचने में मदद करते हैं। 
आपका लक्ष्य:
- किसानों को सर्वोच्च लाभ कमाने में मदद करना
- व्यावहारिक, स्थानीय बाजार-आधारित सलाह देना
- सत्य और विश्वसनीय जानकारी प्रदान करना
- हर किसान की अलग परिस्थिति को समझना और उसके अनुसार सलाह देना

आप मानो मंडी का एक अनुभवी बुजुर्ग हो जो किसानों के साथ दोस्ताना अंदाज में बात करता है।`
  : 
  `You are an experienced agricultural expert helping farmers in Uttarakhand (especially Haldwani region) maximize their crop sales profit.

Your mission:
- Provide genuine, location-specific market advice
- Give practical, actionable recommendations
- Understand each farmer's unique situation
- Speak like a trusted, experienced mandi veteran`;

  const prompt = language === "Hindi" ?
  `किसान की जानकारी:
- फसल: ${crop}
- मात्रा: ${quantity > 0 ? quantity + " किलोग्राम" : "निर्दिष्ट नहीं"}
- स्थान: ${location}
- वर्तमान भाव: ₹${price.min} – ₹${price.max} प्रति किलोग्राम
- सर्वश्रेष्ठ खरीदार श्रेणी: ${buyerCategory}

किसान का प्रश्न: "${message}"

⚠️ महत्वपूर्ण फॉर्मेटिंग नियम:
- हर सेक्शन के लिए emoji और बड़ा हेडिंग दें (# का इस्तेमाल करें)
- हर पॉइंट को नई लाइन में लिखें
- सरल, छोटे वाक्यों का इस्तेमाल करें
- बिना किसी अतिरिक्त ** के लिखें

कृपया इस फॉर्मेट में दें:

🏪 सर्वश्रेष्ठ खरीदार
[विशिष्ट मंडी का नाम और स्थान]
[व्यावहारिक सलाह]

💰 अपेक्षित कीमत
₹XX - ₹YY प्रति किलोग्राम
[कीमत क्यों यह है - बस 1 वाक्य]

⏰ बेचने का सही समय
[सुबह/दोपहर का समय]
[क्यों यह समय अच्छा है - बस 1 वाक्य]

🛠️ गुणवत्ता सुधारने के तरीके
• [पहला तरीका]
• [दूसरा तरीका]
• [तीसरा तरीका]

💵 अतिरिक्त ₹2-5 कमाने के तरीके
• [व्यावहारिक कदम 1]
• [व्यावहारिक कदम 2]
• [व्यावहारिक कदम 3]

उत्तर हिंदी में दें, सरल और समझने में आसान हो।`
  : 
  `Farmer's Context:
- Crop: ${crop}
- Quantity: ${quantity > 0 ? quantity + " kg" : "not specified"}
- Location: ${location}
- Current Market Rate: ₹${price.min} – ₹${price.max} per kg
- Recommended Channel: ${sellingStrategy}

Farmer's Query: "${message}"

⚠️ CRITICAL FORMATTING RULES:
- Use emoji + heading for each section
- One point per line, use bullet points
- Use short, simple sentences
- NO excessive asterisks or bold text
- Easy to read for farmers with basic literacy

RESPONSE FORMAT (STRICT):

🏪 Best Buyers
[Specific mandi name and location]
[Practical advice in 1-2 sentences]

💰 Expected Price
₹XX - ₹YY per kg
[Why this price - 1 sentence only]

⏰ Best Time to Sell
[Morning/Afternoon time]
[Why this time works - 1 sentence only]

🛠️ Quality Improvement Tips
• [Tip 1]
• [Tip 2]
• [Tip 3]

💵 How to Earn ₹2-5 More Per kg
• [Practical step 1]
• [Practical step 2]
• [Practical step 3]

Keep it simple, practical, and easy to understand.`;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.85,
        max_tokens: 1200,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let output = response.data.choices[0].message.content;
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
      return res.json({ reply: "⚠️ कृपया कुछ लिखें या सवाल पूछें।\nPlease type something." });
    }

    const language = detectLanguage(message);

    // ========================================
    // 1️⃣ IF IT'S JUST A GREETING
    // ========================================
    if (isGreeting(message) && !hasCropQuery(message)) {
      const greetingReply = await generateGreetingResponse(message, language);
      return res.json({ reply: greetingReply });
    }

    // ========================================
    // 2️⃣ IF IT MENTIONS CROPS - GIVE DETAILS
    // ========================================
    const lowerMsg = message.toLowerCase();

    // Better crop detection
    const cropMatches = {
      'tomato': ['tomato', 'tamatar', 'टमाटर', 'टमाटर', 'तमाचा'],
      'onion': ['onion', 'pyaz', 'प्याज'],
      'potato': ['potato', 'aloo', 'आलू'],
      'cabbage': ['cabbage', 'band gobi', 'बंद गोभी', 'पत्तागोभी'],
      'cauliflower': ['cauliflower', 'gobi', 'गोभी', 'फूलगोभी']
    };

    let detectedCrop = null;
    for (const [crop, keywords] of Object.entries(cropMatches)) {
      if (keywords.some(kw => lowerMsg.includes(kw))) {
        detectedCrop = crop;
        break;
      }
    }

    // If no crop is clearly mentioned, ask for clarification
    if (!detectedCrop && hasCropQuery(message)) {
      const clarifyReply = language === "Hindi"
        ? "भाई, आप किस फसल के बारे में पूछ रहे हैं? टमाटर, प्याज, आलू, या गोभी? कृपया साफ बताएं। 🌾"
        : "Hey, which crop are you asking about? Tomato, Onion, Potato, or Cabbage? Please specify! 🌾";
      return res.json({ reply: clarifyReply });
    }

    // If no crop detected AND not asking about crops, treat as general conversation
    if (!detectedCrop && !hasCropQuery(message)) {
      const generalReply = await generateGreetingResponse(message, language);
      return res.json({ reply: generalReply });
    }

    // If still somehow no crop, default to tomato (true fallback)
    if (!detectedCrop) {
      detectedCrop = "tomato";
    }

    // Better location detection
    const locationMatches = {
      'haldwani': ['haldwani', 'हल्द्वानी', 'haldi'],
      'kathgodam': ['kathgodam', 'kathgoddam', 'कथगोदाम'],
      'tikonia': ['tikonia', 'टीकोनिया'],
      'bareilly': ['bareilly', 'bareilly road', 'बरेली']
    };

    let detectedLocation = "haldwani";
    for (const [loc, keywords] of Object.entries(locationMatches)) {
      if (keywords.some(kw => lowerMsg.includes(kw))) {
        detectedLocation = loc;
        break;
      }
    }

    const quantityMatch = message.match(/\d+/);
    const quantity = quantityMatch ? parseInt(quantityMatch[0]) : 0;

    // Get real market price
    let price = await getMandiPrice(detectedCrop, detectedLocation);

    // Ensure price is always valid
    if (!price || !price.min || !price.max || price.min === 0 || price.max === 0) {
      price = mandiData[detectedCrop] || { min: 15, max: 25 };
    }

    // Generate detailed AI response with all context
    const aiReply = await generateAIResponse({
      message,
      crop: detectedCrop,
      quantity,
      price,
      location: detectedLocation,
    });

    if (aiReply) {
      return res.json({ reply: aiReply });
    }

    // Better fallback (still practical, not hardcoded)
    const fallbackReply = language === "Hindi" 
      ? `आपकी जानकारी के आधार पर:
📍 **${detectedCrop}** बेचने के लिए **${detectedLocation}** में
💰 वर्तमान भाव: ₹${price.min} – ₹${price.max} प्रति किलो
⏰ सुबह 5-9 बजे सर्वश्रेष्ठ दर मिलता है
🚜 फसल को अच्छी तरह धोकर बेचने से ₹2-3 अधिक कीमत मिल सकती है

विस्तृत जानकारी के लिए दोबारा पूछें।`
      : `Based on your query:
📍 Selling **${detectedCrop}** in **${detectedLocation}** region
💰 Current Market Rate: ₹${price.min} – ₹${price.max} per kg
⏰ Best time: Morning 5-9 AM
🚜 Tip: Clean and grade crops well for ₹2-3 premium

Ask for more specific details for personalized advice.`;

    res.json({ reply: fallbackReply });

  } catch (error) {
    console.error("❌ Server Error:", error);

    res.status(500).json({
      reply: "⚠️ सर्वर में समस्या है। कृपया फिर से कोशिश करें।\nServer error. Please try again.",
    });
  }
});

// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});








// import axios from "axios";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import chatRoutes from "./routes/chatRoutes.js";
// import connectDB from "./config/db.js";

// dotenv.config();

// const app = express();

// // ======================
// // 🔹 MIDDLEWARE
// // ======================
// app.use(cors());
// app.use(express.json());

// // ======================
// // 🔹 ROUTES
// // ======================
// app.use("/api/chats", chatRoutes);

// // ======================
// // 🔹 DB CONNECT
// // ======================
// connectDB();

// // ======================
// // 🔹 CONFIG
// // ======================
// const GROQ_API_KEY = process.env.GROQ_API_KEY;

// const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];
// const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// const mandiData = {
//   tomato: { min: 18, max: 26 },
//   onion: { min: 20, max: 32 },
//   potato: { min: 12, max: 20 },
//   cabbage: { min: 10, max: 18 },
//   cauliflower: { min: 12, max: 22 },
// };

// // ======================
// // 🌐 ADVANCED LANGUAGE DETECTION
// // ======================
// function detectLanguage(text) {
//   const hindiScript = /[\u0900-\u097F]/;

//   const romanHindiWords = [
//     "bhai","kaise","kya","kyu","kaun","kahan","kab",
//     "kitna","bechna","mandi","sabzi","tamatar","aloo",
//     "pyaz","mujhe","mera","hai","haan","nahi","karna",
//     "lene","dena","bhav","rate"
//   ];

//   const lower = text.toLowerCase();

//   if (hindiScript.test(text)) return "Hindi";

//   if (romanHindiWords.some(word => lower.includes(word))) {
//     return "Hindi";
//   }

//   return "English";
// }

// // ======================
// // 🧮 IS THIS A GREETING?
// // ======================
// function isGreeting(text) {
//   const greetings = [
//     "hi", "hello", "hey", "namaste", "namaskar", "hola", "sup", "yo",
//     "क्या हाल है", "कैसे हो", "सुप", "हाय", "हेलो", "ही", "नमस्ते",
//     "how are you", "whats up", "how ya doin", "morning", "evening",
//     "good morning", "good evening", "good afternoon", "gud mrng"
//   ];

//   return greetings.some(g => text.toLowerCase().includes(g)) && text.length < 30;
// }

// // ======================
// // 🌾 DOES THIS MENTION CROPS?
// // ======================
// function hasCropQuery(text) {
//   const cropKeywords = [
//     'tomato', 'tamatar', 'टमाटर', 'onion', 'pyaz', 'प्याज',
//     'potato', 'aloo', 'आलू', 'cabbage', 'band gobi', 'बंद गोभी',
//     'cauliflower', 'gobi', 'गोभी', 'फूलगोभी', 'sell', 'selling',
//     'bechna', 'बेचना', 'price', 'bhav', 'भाव', 'rate', 'दर',
//     'mandi', 'market', 'बाजार', 'buyer', 'खरीदार', 'cost',
//     'quantity', 'मात्रा', 'kg', 'किलो', 'profit', 'मुनाफा'
//   ];

//   const lowerText = text.toLowerCase();
//   return cropKeywords.some(kw => lowerText.includes(kw));
// }

// // ======================
// // � CONVERSATIONAL GREETING RESPONSE
// // ======================
// async function generateGreetingResponse(message, language) {
//   const systemPrompt = language === "Hindi" 
//     ? `आप एक मित्रवत कृषि सलाहकार हैं जो किसानों से बात करते हैं। बस हल्के-फुल्के अंदाज में स्वागत करें और पूछें कि वह क्या बेचना चाहते हैं। लंबा जवाब न दें, सिर्फ 2-3 लाइन में जवाब दें।`
//     : `You are a friendly agricultural advisor chatting with farmers. Give a warm, casual greeting in 2-3 lines. Ask what crop they want to sell. Don't give detailed information yet - just be conversational.`;

//   const prompt = language === "Hindi"
//     ? `किसान कह रहा है: "${message}"\n\nबस हल्के-फुल्के अंदाज से स्वागत करें और पूछें कि वह कौन सी फसल बेचना चाहते हैं। जवाब हिंदी में 2-3 लाइन में दें।`
//     : `Farmer says: "${message}"\n\nGive a casual, friendly greeting and ask what crop they want to sell. Keep it to 2-3 lines. Be like a real friend!`;

//   try {
//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.1-8b-instant",
//         messages: [
//           {
//             role: "system",
//             content: systemPrompt,
//           },
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//         temperature: 0.9,
//         max_tokens: 150,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data.choices[0].message.content;
//   } catch (err) {
//     console.log("❌ GREETING ERROR:", err.message);
    
//     // Simple fallback greeting
//     return language === "Hindi"
//       ? "नमस्ते भाई! 🙏 कौन सी फसल बेचनी है? (टमाटर, प्याज, आलू, गोभी?)"
//       : "Hey there! 👋 What crop do you want to sell? (tomato, onion, potato, cabbage?)";
//   }
// }
// const cache = {};
// const CACHE_TTL = 10 * 60 * 1000;

// // ======================
// // 🔹 FETCH PRICE
// // ======================
// async function getMandiPrice(crop, location) {
//   const cacheKey = `${crop}_${location}`;

//   if (cache[cacheKey] && Date.now() - cache[cacheKey].time < CACHE_TTL) {
//     return cache[cacheKey].data;
//   }

//   try {
//     let allRecords = [];

//     for (let i = 0; i < 3; i++) {
//       const response = await axios.get(
//         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
//         {
//           params: {
//             "api-key": process.env.DATA_GOV_API_KEY,
//             format: "json",
//             limit: 100,
//             offset: i * 100,
//           },
//         }
//       );

//       allRecords = [...allRecords, ...response.data.records];
//     }

//     const filtered = allRecords.filter((item) => {
//       const commodity = item.commodity?.toLowerCase() || "";
//       const market = item.market?.toLowerCase() || "";

//       const min = parseInt(item.min_price);
//       const max = parseInt(item.max_price);

//       return (
//         commodity.includes(crop) &&
//         market.includes(location) &&
//         !isNaN(min) &&
//         !isNaN(max) &&
//         min > 0 &&
//         max > 0
//       );
//     });

//     const finalData =
//       filtered.length > 0
//         ? filtered
//         : allRecords.filter((item) => {
//             const commodity = item.commodity?.toLowerCase() || "";
//             const min = parseInt(item.min_price);
//             const max = parseInt(item.max_price);

//             return (
//               commodity.includes(crop) &&
//               !isNaN(min) &&
//               !isNaN(max) &&
//               min > 0 &&
//               max > 0
//             );
//           });

//     if (finalData.length === 0) return null;

//     const avgMin = Math.round(
//       finalData.reduce((sum, i) => sum + parseInt(i.min_price), 0) /
//         finalData.length
//     );

//     const avgMax = Math.round(
//       finalData.reduce((sum, i) => sum + parseInt(i.max_price), 0) /
//         finalData.length
//     );

//     const result = { min: avgMin, max: avgMax };

//     cache[cacheKey] = { data: result, time: Date.now() };

//     return result;
//   } catch (error) {
//     console.log("❌ API Error:", error.message);
//     return null;
//   }
// }

// // ======================
// // 🧠 AI RESPONSE ENGINE
// // ======================
// async function generateAIResponse({ message, crop, quantity, price, location }) {

//   // Safety check: if price or crop is undefined, return null
//   if (!crop || !price || !price.min || !price.max) {
//     console.log("❌ Missing required data for AI response");
//     return null;
//   }

//   const language = detectLanguage(message);

//   // Determine selling strategy based on quantity
//   let sellingStrategy = "";
//   let buyerCategory = "";
  
//   if (quantity >= 500) {
//     sellingStrategy = "wholesale trading platforms like AgriMarket or direct to processing units";
//     buyerCategory = "Large bulk buyers and processing companies";
//   } else if (quantity >= 100) {
//     sellingStrategy = "government mandis and wholesale markets";
//     buyerCategory = "Wholesale mandi traders";
//   } else if (quantity >= 30) {
//     sellingStrategy = "semi-wholesale dealers and retail shop owners";
//     buyerCategory = "Retail vendors and small businesses";
//   } else {
//     sellingStrategy = "local vegetable shops, restaurants, and retail markets";
//     buyerCategory = "Local retailers and small shops";
//   }

//   const systemPrompt = language === "Hindi" ? 
//   `आप एक अनुभवी कृषि विशेषज्ञ हैं जो उत्तराखंड (विशेषकर हल्द्वानी) के किसानों को फसल बेचने में मदद करते हैं। 
// आपका लक्ष्य:
// - किसानों को सर्वोच्च लाभ कमाने में मदद करना
// - व्यावहारिक, स्थानीय बाजार-आधारित सलाह देना
// - सत्य और विश्वसनीय जानकारी प्रदान करना
// - हर किसान की अलग परिस्थिति को समझना और उसके अनुसार सलाह देना

// आप मानो मंडी का एक अनुभवी बुजुर्ग हो जो किसानों के साथ दोस्ताना अंदाज में बात करता है।`
//   : 
//   `You are an experienced agricultural expert helping farmers in Uttarakhand (especially Haldwani region) maximize their crop sales profit.

// Your mission:
// - Provide genuine, location-specific market advice
// - Give practical, actionable recommendations
// - Understand each farmer's unique situation
// - Speak like a trusted, experienced mandi veteran`;

//   const prompt = language === "Hindi" ?
//   `किसान की जानकारी:
// - फसल: ${crop}
// - मात्रा: ${quantity > 0 ? quantity + " किलोग्राम" : "निर्दिष्ट नहीं"}
// - स्थान: ${location}
// - वर्तमान भाव: ₹${price.min} – ₹${price.max} प्रति किलोग्राम
// - सर्वश्रेष्ठ खरीदार श्रेणी: ${buyerCategory}

// किसान का प्रश्न: "${message}"

// कृपया दें:
// 1. **सर्वश्रेष्ठ खरीदार** - उनका नाम और स्थान (स्थानीय मंडी के विशिष्ट नाम दें)
// 2. **अपेक्षित कीमत** - आज के बाजार दर के अनुसार वास्तविक अनुमान
// 3. **बेचने का सर्वश्रेष्ठ समय** - दिन का सही समय और कारण
// 4. **गुणवत्ता सुझाव** - कीमत बढ़ाने के लिए व्यावहारिक सुझाव
// 5. **अतिरिक्त मूल्य जोड़ें** - अगर किसान ₹2-5 अधिक कमा सकता है तो बताएं

// उत्तर हिंदी में दें, सरल और समझने में आसान हो।`
//   : 
//   `Farmer's Context:
// - Crop: ${crop}
// - Quantity: ${quantity > 0 ? quantity + " kg" : "not specified"}
// - Location: ${location}
// - Current Market Rate: ₹${price.min} – ₹${price.max} per kg
// - Recommended Channel: ${sellingStrategy}

// Farmer's Query: "${message}"

// Provide:
// 1. **Best Buyers** - Specific mandi names or buyer types (be exact and local)
// 2. **Expected Price** - Realistic rate based on today's market for this quantity
// 3. **Best Time to Sell** - Exact time window and reason why
// 4. **Quality Tips** - Practical ways to increase crop value
// 5. **Extra Profit Strategy** - How they can earn ₹2-5 more per kg with specific steps

// Make it personalized, practical, and like advice from an experienced mandi trader.`;

//   try {
//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.1-8b-instant",
//         messages: [
//           {
//             role: "system",
//             content: systemPrompt,
//           },
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//         temperature: 0.85,
//         max_tokens: 1000,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     let output = response.data.choices[0].message.content;
//     return output;

//   } catch (err) {
//     console.log("❌ AI ERROR:", err.response?.data || err.message);
//     return null;
//   }
// }

// // ======================
// // 🚀 MAIN API
// // ======================
// app.post("/api/chat", async (req, res) => {
//   try {
//     const { message } = req.body;

//     if (!message?.trim()) {
//       return res.json({ reply: "⚠️ कृपया कुछ लिखें या सवाल पूछें।\nPlease type something." });
//     }

//     const language = detectLanguage(message);

//     // ========================================
//     // 1️⃣ IF IT'S JUST A GREETING
//     // ========================================
//     if (isGreeting(message) && !hasCropQuery(message)) {
//       const greetingReply = await generateGreetingResponse(message, language);
//       return res.json({ reply: greetingReply });
//     }

//     // ========================================
//     // 2️⃣ IF IT MENTIONS CROPS - GIVE DETAILS
//     // ========================================
//     const lowerMsg = message.toLowerCase();

//     // Better crop detection
//     const cropMatches = {
//       'tomato': ['tomato', 'tamatar', 'टमाटर', 'टमाटर', 'तमाचा'],
//       'onion': ['onion', 'pyaz', 'प्याज'],
//       'potato': ['potato', 'aloo', 'आलू'],
//       'cabbage': ['cabbage', 'band gobi', 'बंद गोभी', 'पत्तागोभी'],
//       'cauliflower': ['cauliflower', 'gobi', 'गोभी', 'फूलगोभी']
//     };

//     let detectedCrop = null;
//     for (const [crop, keywords] of Object.entries(cropMatches)) {
//       if (keywords.some(kw => lowerMsg.includes(kw))) {
//         detectedCrop = crop;
//         break;
//       }
//     }

//     // If no crop is clearly mentioned, ask for clarification
//     if (!detectedCrop && hasCropQuery(message)) {
//       const clarifyReply = language === "Hindi"
//         ? "भाई, आप किस फसल के बारे में पूछ रहे हैं? टमाटर, प्याज, आलू, या गोभी? कृपया साफ बताएं। 🌾"
//         : "Hey, which crop are you asking about? Tomato, Onion, Potato, or Cabbage? Please specify! 🌾";
//       return res.json({ reply: clarifyReply });
//     }

//     // If still no crop detected, default to tomato (shouldn't happen)
//     if (!detectedCrop) {
//       detectedCrop = "tomato";
//     }

//     // Better location detection
//     const locationMatches = {
//       'haldwani': ['haldwani', 'हल्द्वानी', 'haldi'],
//       'kathgodam': ['kathgodam', 'kathgoddam', 'कथगोदाम'],
//       'tikonia': ['tikonia', 'टीकोनिया'],
//       'bareilly': ['bareilly', 'bareilly road', 'बरेली']
//     };

//     let detectedLocation = "haldwani";
//     for (const [loc, keywords] of Object.entries(locationMatches)) {
//       if (keywords.some(kw => lowerMsg.includes(kw))) {
//         detectedLocation = loc;
//         break;
//       }
//     }

//     const quantityMatch = message.match(/\d+/);
//     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : 0;

//     // Get real market price
//     let price = await getMandiPrice(detectedCrop, detectedLocation);

//     // Ensure price is always valid
//     if (!price || !price.min || !price.max || price.min === 0 || price.max === 0) {
//       price = mandiData[detectedCrop] || { min: 15, max: 25 };
//     }

//     // Generate detailed AI response with all context
//     const aiReply = await generateAIResponse({
//       message,
//       crop: detectedCrop,
//       quantity,
//       price,
//       location: detectedLocation,
//     });

//     if (aiReply) {
//       return res.json({ reply: aiReply });
//     }

//     // Better fallback (still practical, not hardcoded)
//     const fallbackReply = language === "Hindi" 
//       ? `आपकी जानकारी के आधार पर:
// 📍 **${detectedCrop}** बेचने के लिए **${detectedLocation}** में
// 💰 वर्तमान भाव: ₹${price.min} – ₹${price.max} प्रति किलो
// ⏰ सुबह 5-9 बजे सर्वश्रेष्ठ दर मिलता है
// 🚜 फसल को अच्छी तरह धोकर बेचने से ₹2-3 अधिक कीमत मिल सकती है

// विस्तृत जानकारी के लिए दोबारा पूछें।`
//       : `Based on your query:
// 📍 Selling **${detectedCrop}** in **${detectedLocation}** region
// 💰 Current Market Rate: ₹${price.min} – ₹${price.max} per kg
// ⏰ Best time: Morning 5-9 AM
// 🚜 Tip: Clean and grade crops well for ₹2-3 premium

// Ask for more specific details for personalized advice.`;

//     res.json({ reply: fallbackReply });

//   } catch (error) {
//     console.error("❌ Server Error:", error);

//     res.status(500).json({
//       reply: "⚠️ सर्वर में समस्या है। कृपया फिर से कोशिश करें।\nServer error. Please try again.",
//     });
//   }
// });

// // ======================
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });




