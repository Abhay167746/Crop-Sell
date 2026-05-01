// // // // import axios from "axios";
// // // // import express from "express";
// // // // import cors from "cors";
// // // // import dotenv from "dotenv";
// // // // import Groq from "groq-sdk";
// // // // import chatRoutes from "./routes/chatRoutes.js";
// // // // import connectDB from "./config/db.js";

// // // // dotenv.config();

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());


// // // // app.post("/api/chat", async (req, res) => {
// // // //   try {
// // // //     const { message } = req.body;

// // // //     if (!message || message.trim() === "") {
// // // //       return res.json({ reply: "⚠️ Please ask a valid question." });
// // // //     }

// // // //     const lowerMsg = message.toLowerCase();

// // // //     // ======================
// // // //     // 🔹 Crop Detection
// // // //     // ======================
// // // //     const detectedCrop = crops.find((crop) =>
// // // //       lowerMsg.includes(crop)
// // // //     );

// // // //     if (!detectedCrop) {
// // // //       return res.json({
// // // //         reply:
// // // //           "⚠️ Please ask about: Tomato, Onion, Potato, Cabbage, Cauliflower.",
// // // //       });
// // // //     }

// // // //     // ======================
// // // //     // 🔹 Quantity Detection
// // // //     // ======================
// // // //     const quantityMatch = message.match(/\d+/);
// // // //     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : null;

// // // //     // ======================
// // // //     // 🔹 Logistics Optimization
// // // //     // ======================
// // // //     let logisticsTip = "";
// // // //     if (quantity && quantity > 100) {
// // // //       logisticsTip = "Best for bulk: Naveen Mandi (wholesalers)";
// // // //     } else {
// // // //       logisticsTip = "Best for small quantity: Tikonia Market (retail)";
// // // //     }

// // // //     // ======================
// // // //     // 🔹 Demand Forecast
// // // //     // ======================
// // // //     const demandMap = {
// // // //       tomato: "High demand (seasonal consumption)",
// // // //       onion: "Stable demand (daily use)",
// // // //       potato: "Moderate demand",
// // // //       cabbage: "Low demand (off-season)",
// // // //       cauliflower: "High demand",
// // // //     };

// // // //     const demand = demandMap[detectedCrop];

// // // //     // ======================
// // // //     // 🔹 Price Trend
// // // //     // ======================
// // // //     const trendMap = {
// // // //       tomato: "Prices increasing slightly",
// // // //       onion: "Prices stable",
// // // //       potato: "Prices stable",
// // // //       cabbage: "Prices decreasing",
// // // //       cauliflower: "Prices increasing",
// // // //     };

// // // //     const trend = trendMap[detectedCrop];

// // // //     // ======================
// // // //     // 🔹 Location
// // // //     // ======================
// // // //     const detectedLocation =
// // // //       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

// // // //     // ======================
// // // //     // 🔹 Language
// // // //     // ======================
// // // //     const languageInstruction = isHindiText(message)
// // // //       ? "Respond in Hindi."
// // // //       : "Respond in English.";

// // // //     // ======================
// // // //     // 🔹 Price Fetch
// // // //     // ======================
// // // //     let price = await getMandiPrice(detectedCrop);

// // // //     if (!price) {
// // // //       console.log("⚠️ Using fallback price");
// // // //       price = mandiData[detectedCrop];
// // // //     }

// // // //     const priceContext = `₹${price.min}–₹${price.max} per kg`;

// // // //     // ======================
// // // //     // 🔹 UPDATED PROMPT
// // // //     // ======================
// // // //     const prompt = `
// // // // ${languageInstruction}

// // // // You are an AI Crop Selling Assistant for farmers in Haldwani (India).

// // // // ━━━━━━━━━━━━━━━━━━━━━━━
// // // // STRICT RULES:
// // // // - NO paragraphs
// // // // - ONLY headings + bullet points
// // // // - Max 2 bullets per section
// // // // - Very short lines
// // // // - Simple language
// // // // ━━━━━━━━━━━━━━━━━━━━━━━

// // // // 📍 BEST NEARBY BUYERS / SHOPS
// // // // • Naveen Mandi – wholesalers
// // // // • Tikonia Market – retailers

// // // // 💰 EXPECTED PRICE
// // // // • ${priceContext}

// // // // 📈 PRICE TREND
// // // // • ${trend}

// // // // 📊 DEMAND FORECAST
// // // // • ${demand}

// // // // 🚚 LOGISTICS SUGGESTION
// // // // • ${logisticsTip}

// // // // ⏰ BEST TIME TO SELL
// // // // • Early morning
// // // // • Seasonal demand period

// // // // 🚜 IMPORTANT TIP
// // // // • Sort crops before selling

// // // // ━━━━━━━━━━━━━━━━━━━━━━━

// // // // User Question:
// // // // ${message}
// // // // `;

// // // //     // ======================
// // // //     // 🔹 Groq API
// // // //     // ======================
// // // //     const completion = await groq.chat.completions.create({
// // // //       model: "llama-3.1-8b-instant",
// // // //       temperature: 0.2,
// // // //       messages: [
// // // //         {
// // // //           role: "system",
// // // //           content:
// // // //             "You are an expert agricultural assistant. Follow all formatting rules strictly.",
// // // //         },
// // // //         {
// // // //           role: "user",
// // // //           content: prompt,
// // // //         },
// // // //       ],
// // // //     });

// // // //     const rawReply = completion.choices[0].message.content;

// // // //     if (!rawReply || rawReply.length < 20) {
// // // //       return res.json({
// // // //         reply: `📍 BEST NEARBY BUYERS / SHOPS
// // // // • Naveen Mandi – wholesalers
// // // // • Tikonia Market – retailers

// // // // 💰 EXPECTED PRICE
// // // // • ${priceContext}

// // // // 📈 PRICE TREND
// // // // • ${trend}

// // // // 📊 DEMAND FORECAST
// // // // • ${demand}

// // // // 🚚 LOGISTICS SUGGESTION
// // // // • ${logisticsTip}

// // // // 🚜 IMPORTANT TIP
// // // // • Sort crops before selling`,
// // // //       });
// // // //     }

// // // //     const cleanReply = formatResponse(rawReply);

// // // //     res.json({ reply: cleanReply });

// // // //   } catch (error) {
// // // //     console.error("❌ Groq Error:", error);

// // // //     res.json({
// // // //       reply: "⚠️ AI service error. Please try again.",
// // // //     });
// // // //   }
// // // // });

// // // // // app.use("/api/chats", chatRoutes);
// // // // // connectDB();
// // // // // // Groq Setup

// // // // // const groq = new Groq({
// // // // //   apiKey: process.env.GROQ_API_KEY,
// // // // // });


// // // // // // Data Config

// // // // // const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];

// // // // // const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// // // // // const mandiData = {
// // // // //   tomato: { min: 18, max: 26 },
// // // // //   onion: { min: 20, max: 32 },
// // // // //   potato: { min: 12, max: 20 },
// // // // //   cabbage: { min: 10, max: 18 },
// // // // //   cauliflower: { min: 12, max: 22 },
// // // // // };


// // // // // // FIXED Mandi API Function

// // // // // async function getMandiPrice(crop) {
// // // // //   try {
// // // // //     let allRecords = [];

// // // // //     //  multiple pages fetch
// // // // //     for (let i = 0; i < 3; i++) {
// // // // //       const response = await axios.get(
// // // // //         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
// // // // //         {
// // // // //           params: {
// // // // //             "api-key": process.env.DATA_GOV_API_KEY,
// // // // //             format: "json",
// // // // //             limit: 100,
// // // // //             offset: i * 100,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       allRecords = [...allRecords, ...response.data.records];
// // // // //     }

// // // // //     console.log("Total Records:", allRecords.length);

// // // // //     //  better matching
// // // // //     const filtered = allRecords.filter((item) => {
// // // // //       const commodity = item.commodity?.toLowerCase() || "";
// // // // //       return commodity.includes(crop);
// // // // //     });

// // // // //     console.log("Filtered Records:", filtered.length);

// // // // //     if (filtered.length > 0) {
// // // // //       const data = filtered[0];

// // // // //       return {
// // // // //         min: parseInt(data.min_price) || 0,
// // // // //         max: parseInt(data.max_price) || 0,
// // // // //       };
// // // // //     }

// // // // //     // fallback
// // // // //     console.log("⚠️ No match found, using fallback");

// // // // //     const data = allRecords[0];

// // // // //     return {
// // // // //       min: parseInt(data.min_price) || 0,
// // // // //       max: parseInt(data.max_price) || 0,
// // // // //     };

// // // // //   } catch (error) {
// // // // //     console.log("❌ API Error:", error.message);
// // // // //     return null;
// // // // //   }
// // // // // }


// // // // // // Helper Functions

// // // // // function formatResponse(text) {
// // // // //   return text
// // // // //     .replace(/\n{2,}/g, "\n")
// // // // //     .replace(/•\s*/g, "• ")
// // // // //     .replace(/^\s+|\s+$/g, "")
// // // // //     .trim();
// // // // // }

// // // // // function isHindiText(text) {
// // // // //   return /[\u0900-\u097F]/.test(text);
// // // // // }


// // // // // // API ROUTE

// // // // // app.post("/api/chat", async (req, res) => {
// // // // //   try {
// // // // //     const { message } = req.body;

// // // // //     if (!message || message.trim() === "") {
// // // // //       return res.json({ reply: "⚠️ Please ask a valid question." });
// // // // //     }

// // // // //     const lowerMsg = message.toLowerCase();

// // // // //     // Crop detection
// // // // //     const detectedCrop = crops.find((crop) =>
// // // // //       lowerMsg.includes(crop)
// // // // //     );

// // // // //     if (!detectedCrop) {
// // // // //       return res.json({
// // // // //         reply:
// // // // //           "⚠️ Please ask about: Tomato, Onion, Potato, Cabbage, Cauliflower.",
// // // // //       });
// // // // //     }

// // // // //     // Location detection
// // // // //     const detectedLocation =
// // // // //       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

// // // // //     // Language detection
// // // // //     const languageInstruction = isHindiText(message)
// // // // //       ? "Respond in Hindi."
// // // // //       : "Respond in English.";

// // // // //     //  Real price fetch
// // // // //     let price = await getMandiPrice(detectedCrop);

// // // // //     if (!price) {
// // // // //       console.log("⚠️ Using fallback price");
// // // // //       price = mandiData[detectedCrop];
// // // // //     }

// // // // //     const priceContext = `Latest price for ${detectedCrop} in ${detectedLocation}: ₹${price.min}–₹${price.max} per kg.`;

// // // // //     // Prompt
// // // // //     const prompt = `
// // // // // ${languageInstruction}

// // // // // You are a Professional Crop Selling Assistant for farmers in Haldwani (India).

// // // // // ${priceContext}

// // // // // Use these known buyers:
// // // // // - Naveen Mandi Haldwani
// // // // // - Tikonia Market
// // // // // - Kathgodam traders

// // // // // ━━━━━━━━━━━━━━━━━━━━━━━
// // // // // STRICT RULES:
// // // // // - NO paragraphs
// // // // // - ONLY headings + bullet points
// // // // // - Max 2 bullets per section
// // // // // - Very short lines
// // // // // - Use simple language
// // // // // ━━━━━━━━━━━━━━━━━━━━━━━

// // // // // FORMAT:

// // // // // 📍 BEST NEARBY BUYERS / SHOPS
// // // // // • Place + buyer type
// // // // // • Place + buyer type

// // // // // 💰 EXPECTED PRICE
// // // // // • ₹XX – ₹XX per kg (approx)

// // // // // ⏰ BEST TIME TO SELL
// // // // // • Time of day
// // // // // • Best season/month

// // // // // 🚜 IMPORTANT TIP
// // // // // • One useful tip

// // // // // ━━━━━━━━━━━━━━━━━━━━━━━

// // // // // User Question:
// // // // // ${message}
// // // // // `;

// // // // //     // Groq API
// // // // //     const completion = await groq.chat.completions.create({
// // // // //       model: "llama-3.1-8b-instant",
// // // // //       temperature: 0.2,
// // // // //       messages: [
// // // // //         {
// // // // //           role: "system",
// // // // //           content:
// // // // //             "You are an expert agricultural assistant. Follow all formatting rules strictly.",
// // // // //         },
// // // // //         {
// // // // //           role: "user",
// // // // //           content: prompt,
// // // // //         },
// // // // //       ],
// // // // //     });

// // // // //     const rawReply = completion.choices[0].message.content;

// // // // //     // Fallback response
// // // // //     if (!rawReply || rawReply.length < 20) {
// // // // //       return res.json({
// // // // //         reply: `📍 BEST NEARBY BUYERS / SHOPS
// // // // // • Naveen Mandi Haldwani – wholesalers
// // // // // • Tikonia Market – local retailers

// // // // // 💰 EXPECTED PRICE
// // // // // • ₹${price.min} – ₹${price.max} per kg

// // // // // ⏰ BEST TIME TO SELL
// // // // // • Early morning
// // // // // • Seasonal demand period

// // // // // 🚜 IMPORTANT TIP
// // // // // • Sort crops before selling`,
// // // // //       });
// // // // //     }

// // // // //     const cleanReply = formatResponse(rawReply);

// // // // //     res.json({ reply: cleanReply });

// // // // //   } catch (error) {
// // // // //     console.error("❌ Groq Error:", error);

// // // // //     res.json({
// // // // //       reply: "⚠️ AI service error. Please try again.",
// // // // //     });
// // // // //   }
// // // // // });

// // // // // ======================
// // // // const PORT = process.env.PORT || 5000;

// // // // app.listen(PORT, () => {
// // // //   console.log(`✅ Server running on http://localhost:${PORT}`);
// // // // });

// // // // import axios from "axios";
// // // // import express from "express";
// // // // import cors from "cors";
// // // // import dotenv from "dotenv";
// // // // import Groq from "groq-sdk";
// // // // import chatRoutes from "./routes/chatRoutes.js";
// // // // import connectDB from "./config/db.js";

// // // // dotenv.config();

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // app.use("/api/chats", chatRoutes);
// // // // connectDB();

// // // // // ======================
// // // // // 🔹 Groq Setup
// // // // // ======================
// // // // const groq = new Groq({
// // // //   apiKey: process.env.GROQ_API_KEY,
// // // // });

// // // // // ======================
// // // // // 🔹 Data Config
// // // // // ======================
// // // // const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];

// // // // const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// // // // const mandiData = {
// // // //   tomato: { min: 18, max: 26 },
// // // //   onion: { min: 20, max: 32 },
// // // //   potato: { min: 12, max: 20 },
// // // //   cabbage: { min: 10, max: 18 },
// // // //   cauliflower: { min: 12, max: 22 },
// // // // };

// // // // // ======================
// // // // // 🔹 Mandi API Function
// // // // // ======================
// // // // async function getMandiPrice(crop) {
// // // //   try {
// // // //     let allRecords = [];

// // // //     for (let i = 0; i < 3; i++) {
// // // //       const response = await axios.get(
// // // //         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
// // // //         {
// // // //           params: {
// // // //             "api-key": process.env.DATA_GOV_API_KEY,
// // // //             format: "json",
// // // //             limit: 100,
// // // //             offset: i * 100,
// // // //           },
// // // //         }
// // // //       );

// // // //       allRecords = [...allRecords, ...response.data.records];
// // // //     }

// // // //     const filtered = allRecords.filter((item) => {
// // // //       const commodity = item.commodity?.toLowerCase() || "";
// // // //       return commodity.includes(crop);
// // // //     });

// // // //     if (filtered.length > 0) {
// // // //       const data = filtered[0];
// // // //       return {
// // // //         min: parseInt(data.min_price) || 0,
// // // //         max: parseInt(data.max_price) || 0,
// // // //       };
// // // //     }

// // // //     // fallback
// // // //     const data = allRecords[0];
// // // //     return {
// // // //       min: parseInt(data.min_price) || 0,
// // // //       max: parseInt(data.max_price) || 0,
// // // //     };

// // // //   } catch (error) {
// // // //     console.log("❌ API Error:", error.message);
// // // //     return null;
// // // //   }
// // // // }

// // // // // ======================
// // // // // 🔹 Helpers
// // // // // ======================
// // // // function formatResponse(text) {
// // // //   return text
// // // //     .replace(/\n{2,}/g, "\n")
// // // //     .replace(/•\s*/g, "• ")
// // // //     .trim();
// // // // }

// // // // function isHindiText(text) {
// // // //   return /[\u0900-\u097F]/.test(text);
// // // // }

// // // // // ======================
// // // // // 🚀 API ROUTE
// // // // // ======================
// // // // app.post("/api/chat", async (req, res) => {
// // // //   try {
// // // //     const { message } = req.body;

// // // //     if (!message || message.trim() === "") {
// // // //       return res.json({ reply: "⚠️ Please ask a valid question." });
// // // //     }

// // // //     const lowerMsg = message.toLowerCase();

// // // //     // Crop detection
// // // //     const detectedCrop = crops.find((crop) =>
// // // //       lowerMsg.includes(crop)
// // // //     );

// // // //     if (!detectedCrop) {
// // // //       return res.json({
// // // //         reply:
// // // //           "⚠️ Please ask about: Tomato, Onion, Potato, Cabbage, Cauliflower.",
// // // //       });
// // // //     }

// // // //     // Quantity detection
// // // //     const quantityMatch = message.match(/\d+/);
// // // //     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : null;

// // // //     // Logistics
// // // //     let logisticsTip = "";
// // // //     if (quantity && quantity > 100) {
// // // //       logisticsTip = "Best for bulk: Naveen Mandi (wholesalers)";
// // // //     } else {
// // // //       logisticsTip = "Best for small: Tikonia Market (retail)";
// // // //     }

// // // //     // Demand Forecast
// // // //     const demandMap = {
// // // //       tomato: "High demand (seasonal)",
// // // //       onion: "Stable demand",
// // // //       potato: "Moderate demand",
// // // //       cabbage: "Low demand",
// // // //       cauliflower: "High demand",
// // // //     };

// // // //     const demand = demandMap[detectedCrop];

// // // //     // Price Trend
// // // //     const trendMap = {
// // // //       tomato: "Prices increasing",
// // // //       onion: "Prices stable",
// // // //       potato: "Prices stable",
// // // //       cabbage: "Prices decreasing",
// // // //       cauliflower: "Prices increasing",
// // // //     };

// // // //     const trend = trendMap[detectedCrop];

// // // //     // Location
// // // //     const detectedLocation =
// // // //       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

// // // //     // Language
// // // //     const languageInstruction = isHindiText(message)
// // // //       ? "Respond in Hindi."
// // // //       : "Respond in English.";

// // // //     // Price fetch
// // // //     let price = await getMandiPrice(detectedCrop);

// // // //     if (!price) {
// // // //       price = mandiData[detectedCrop];
// // // //     }

// // // //     const priceContext = `₹${price.min}–₹${price.max} per kg`;

// // // //     // ======================
// // // //     // 🔥 FINAL PROMPT
// // // //     // ======================
// // // //     const prompt = `
// // // // ${languageInstruction}

// // // // You are a STRICT agricultural AI assistant.

// // // // ⚠️ MUST FOLLOW:
// // // // - NO paragraphs
// // // // - ONLY headings + bullet points
// // // // - DO NOT skip any section

// // // // ━━━━━━━━━━━━━━━━━━━━━━━

// // // // 📍 BEST NEARBY BUYERS / SHOPS
// // // // • Naveen Mandi – wholesalers
// // // // • Tikonia Market – retailers

// // // // 💰 EXPECTED PRICE
// // // // • ${priceContext}

// // // // 📈 PRICE TREND
// // // // • ${trend}

// // // // 📊 DEMAND FORECAST
// // // // • ${demand}

// // // // 🚚 LOGISTICS SUGGESTION
// // // // • ${logisticsTip}

// // // // ⏰ BEST TIME TO SELL
// // // // • Early morning
// // // // • Seasonal demand period

// // // // 🚜 IMPORTANT TIP
// // // // • Sort crops before selling

// // // // ━━━━━━━━━━━━━━━━━━━━━━━

// // // // User Question:
// // // // ${message}
// // // // `;

// // // //     // Groq API
// // // //     const completion = await groq.chat.completions.create({
// // // //       model: "llama-3.1-8b-instant",
// // // //       temperature: 0.2,
// // // //       messages: [
// // // //         {
// // // //           role: "system",
// // // //           content:
// // // //             "You are an expert agricultural assistant. Follow format strictly.",
// // // //         },
// // // //         {
// // // //           role: "user",
// // // //           content: prompt,
// // // //         },
// // // //       ],
// // // //     });

// // // //     const reply = formatResponse(
// // // //       completion.choices[0].message.content
// // // //     );

// // // //     res.json({ reply });

// // // //   } catch (error) {
// // // //     console.error("❌ Error:", error);

// // // //     res.json({
// // // //       reply: "⚠️ Server error. Please try again.",
// // // //     });
// // // //   }
// // // // });

// // // // // ======================
// // // // const PORT = process.env.PORT || 5000;

// // // // app.listen(PORT, () => {
// // // //   console.log(`✅ Server running on http://localhost:${PORT}`);
// // // // });

// // // // import axios from "axios";
// // // // import express from "express";
// // // // import cors from "cors";
// // // // import dotenv from "dotenv";
// // // // import chatRoutes from "./routes/chatRoutes.js";
// // // // import connectDB from "./config/db.js";

// // // // dotenv.config();

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // app.use("/api/chats", chatRoutes);
// // // // connectDB();

// // // // // ======================
// // // // // 🔹 Data Config
// // // // // ======================
// // // // const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];

// // // // const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// // // // const mandiData = {
// // // //   tomato: { min: 18, max: 26 },
// // // //   onion: { min: 20, max: 32 },
// // // //   potato: { min: 12, max: 20 },
// // // //   cabbage: { min: 10, max: 18 },
// // // //   cauliflower: { min: 12, max: 22 },
// // // // };

// // // // // ======================
// // // // // 🔹 Mandi API Function
// // // // // ======================
// // // // async function getMandiPrice(crop) {
// // // //   try {
// // // //     let allRecords = [];

// // // //     for (let i = 0; i < 3; i++) {
// // // //       const response = await axios.get(
// // // //         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
// // // //         {
// // // //           params: {
// // // //             "api-key": process.env.DATA_GOV_API_KEY,
// // // //             format: "json",
// // // //             limit: 100,
// // // //             offset: i * 100,
// // // //           },
// // // //         }
// // // //       );

// // // //       allRecords = [...allRecords, ...response.data.records];
// // // //     }

// // // //     const filtered = allRecords.filter((item) => {
// // // //       const commodity = item.commodity?.toLowerCase() || "";
// // // //       return commodity.includes(crop);
// // // //     });

// // // //     if (filtered.length > 0) {
// // // //       const data = filtered[0];
// // // //       return {
// // // //         min: parseInt(data.min_price) || 0,
// // // //         max: parseInt(data.max_price) || 0,
// // // //       };
// // // //     }

// // // //     // fallback
// // // //     const data = allRecords[0];
// // // //     return {
// // // //       min: parseInt(data.min_price) || 0,
// // // //       max: parseInt(data.max_price) || 0,
// // // //     };

// // // //   } catch (error) {
// // // //     console.log("❌ API Error:", error.message);
// // // //     return null;
// // // //   }
// // // // }

// // // // // ======================
// // // // // 🔹 Smart Response Builder
// // // // // ======================
// // // // function buildFinalResponse({
// // // //   crop,
// // // //   location,
// // // //   price,
// // // //   trend,
// // // //   demand,
// // // //   logisticsTip,
// // // //   advice,
// // // // }) {
// // // //   return `
// // // // 🌾 CROP: ${crop.toUpperCase()} | 📍 Location: ${location}

// // // // ━━━━━━━━━━━━━━━━━━━

// // // // 💰 PRICE RANGE
// // // // → ₹${price.min} – ₹${price.max} per kg

// // // // 📈 MARKET TREND
// // // // → ${trend}

// // // // 📊 DEMAND
// // // // → ${demand}

// // // // ━━━━━━━━━━━━━━━━━━━

// // // // 🚚 WHERE TO SELL?
// // // // → ${logisticsTip}

// // // // ⏰ BEST TIME
// // // // → Early morning (5–9 AM)

// // // // ━━━━━━━━━━━━━━━━━━━

// // // // 🧠 SELLING STRATEGY
// // // // → ${advice}

// // // // 🚜 PRO TIP
// // // // → Sort & grade crops for better price
// // // // `.trim();
// // // // }

// // // // // ======================
// // // // // 🚀 API ROUTE
// // // // // ======================
// // // // app.post("/api/chat", async (req, res) => {
// // // //   try {
// // // //     const { message } = req.body;

// // // //     if (!message || message.trim() === "") {
// // // //       return res.json({ reply: "⚠️ Please ask a valid question." });
// // // //     }

// // // //     const lowerMsg = message.toLowerCase();

// // // //     // Crop detection
// // // //     const detectedCrop = crops.find((crop) =>
// // // //       lowerMsg.includes(crop)
// // // //     );

// // // //     if (!detectedCrop) {
// // // //       return res.json({
// // // //         reply:
// // // //           "⚠️ Ask about: Tomato, Onion, Potato, Cabbage, Cauliflower.",
// // // //       });
// // // //     }

// // // //     // Quantity detection
// // // //     const quantityMatch = message.match(/\d+/);
// // // //     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : null;

// // // //     // Logistics decision
// // // //     let logisticsTip = "";
// // // //     if (quantity && quantity > 100) {
// // // //       logisticsTip = "Sell at Naveen Mandi (Best for bulk)";
// // // //     } else {
// // // //       logisticsTip = "Sell at Tikonia Market (Best for small quantity)";
// // // //     }

// // // //     // Demand Forecast
// // // //     const demandMap = {
// // // //       tomato: "High demand 🔥",
// // // //       onion: "Stable demand",
// // // //       potato: "Moderate demand",
// // // //       cabbage: "Low demand",
// // // //       cauliflower: "High demand 🔥",
// // // //     };

// // // //     const demand = demandMap[detectedCrop];

// // // //     // Price Trend
// // // //     const trendMap = {
// // // //       tomato: "Prices increasing 📈",
// // // //       onion: "Prices stable",
// // // //       potato: "Prices stable",
// // // //       cabbage: "Prices decreasing 📉",
// // // //       cauliflower: "Prices increasing 📈",
// // // //     };

// // // //     const trend = trendMap[detectedCrop];

// // // //     // Smart advice
// // // //     let advice = "";
// // // //     if (trend.includes("increasing")) {
// // // //       advice = "Hold for 1–2 days for better price 📈";
// // // //     } else if (trend.includes("decreasing")) {
// // // //       advice = "Sell quickly before price drops ⚠️";
// // // //     } else {
// // // //       advice = "Stable market — sell anytime";
// // // //     }

// // // //     // Location detection
// // // //     const detectedLocation =
// // // //       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

// // // //     // Price fetch
// // // //     let price = await getMandiPrice(detectedCrop);

// // // //     if (!price) {
// // // //       price = mandiData[detectedCrop];
// // // //     }

// // // //     // Final structured response
// // // //     const finalReply = buildFinalResponse({
// // // //       crop: detectedCrop,
// // // //       location: detectedLocation,
// // // //       price,
// // // //       trend,
// // // //       demand,
// // // //       logisticsTip,
// // // //       advice,
// // // //     });

// // // //     res.json({ reply: finalReply });

// // // //   } catch (error) {
// // // //     console.error("❌ Error:", error);

// // // //     res.json({
// // // //       reply: "⚠️ Server error. Please try again.",
// // // //     });
// // // //   }
// // // // });

// // // // // ======================
// // // // const PORT = process.env.PORT || 5000;

// // // // app.listen(PORT, () => {
// // // //   console.log(`✅ Server running on http://localhost:${PORT}`);
// // // // });



// // // import axios from "axios";
// // // import express from "express";
// // // import cors from "cors";
// // // import dotenv from "dotenv";
// // // import chatRoutes from "./routes/chatRoutes.js";
// // // import connectDB from "./config/db.js";

// // // dotenv.config();

// // // const app = express();

// // // // ======================
// // // // 🔹 MIDDLEWARE
// // // // ======================
// // // app.use(cors());
// // // app.use(express.json());

// // // // ======================
// // // // 🔹 ROUTES
// // // // ======================
// // // app.use("/api/chats", chatRoutes);

// // // // ======================
// // // // 🔹 DB CONNECT
// // // // ======================
// // // connectDB();

// // // // ======================
// // // // 🔹 DATA CONFIG
// // // // ======================
// // // const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];

// // // const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// // // const mandiData = {
// // //   tomato: { min: 18, max: 26 },
// // //   onion: { min: 20, max: 32 },
// // //   potato: { min: 12, max: 20 },
// // //   cabbage: { min: 10, max: 18 },
// // //   cauliflower: { min: 12, max: 22 },
// // // };

// // // // ======================
// // // // 🔹 CACHE (BOOST SPEED)
// // // // ======================
// // // const cache = {};
// // // const CACHE_TTL = 10 * 60 * 1000; // 10 min

// // // // ======================
// // // // 🔹 FETCH MANDI PRICE
// // // // ======================
// // // async function getMandiPrice(crop, location) {
// // //   const cacheKey = `${crop}_${location}`;

// // //   // ✅ Use cache
// // //   if (cache[cacheKey] && Date.now() - cache[cacheKey].time < CACHE_TTL) {
// // //     return cache[cacheKey].data;
// // //   }

// // //   try {
// // //     let allRecords = [];

// // //     for (let i = 0; i < 3; i++) {
// // //       const response = await axios.get(
// // //         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
// // //         {
// // //           params: {
// // //             "api-key": process.env.DATA_GOV_API_KEY,
// // //             format: "json",
// // //             limit: 100,
// // //             offset: i * 100,
// // //           },
// // //         }
// // //       );

// // //       allRecords = [...allRecords, ...response.data.records];
// // //     }

// // //     // ✅ Filter crop + location + valid price
// // //     const filtered = allRecords.filter((item) => {
// // //       const commodity = item.commodity?.toLowerCase() || "";
// // //       const market = item.market?.toLowerCase() || "";

// // //       const min = parseInt(item.min_price);
// // //       const max = parseInt(item.max_price);

// // //       return (
// // //         commodity.includes(crop) &&
// // //         market.includes(location) &&
// // //         !isNaN(min) &&
// // //         !isNaN(max) &&
// // //         min > 0 &&
// // //         max > 0
// // //       );
// // //     });

// // //     // ✅ If no location match → fallback to crop only
// // //     const finalData =
// // //       filtered.length > 0
// // //         ? filtered
// // //         : allRecords.filter((item) => {
// // //             const commodity = item.commodity?.toLowerCase() || "";
// // //             const min = parseInt(item.min_price);
// // //             const max = parseInt(item.max_price);

// // //             return (
// // //               commodity.includes(crop) &&
// // //               !isNaN(min) &&
// // //               !isNaN(max) &&
// // //               min > 0 &&
// // //               max > 0
// // //             );
// // //           });

// // //     if (finalData.length === 0) return null;

// // //     // ✅ Average calculation
// // //     const avgMin = Math.round(
// // //       finalData.reduce((sum, i) => sum + parseInt(i.min_price), 0) /
// // //         finalData.length
// // //     );

// // //     const avgMax = Math.round(
// // //       finalData.reduce((sum, i) => sum + parseInt(i.max_price), 0) /
// // //         finalData.length
// // //     );

// // //     const result = { min: avgMin, max: avgMax };

// // //     // ✅ Save to cache
// // //     cache[cacheKey] = { data: result, time: Date.now() };

// // //     return result;
// // //   } catch (error) {
// // //     console.log("❌ API Error:", error.message);
// // //     return null;
// // //   }
// // // }

// // // // ======================
// // // // 🔹 RESPONSE BUILDER
// // // // ======================
// // // function buildFinalResponse({
// // //   crop,
// // //   location,
// // //   price,
// // //   trend,
// // //   demand,
// // //   logisticsTip,
// // //   advice,
// // // }) {
// // //   return `
// // // 🌾 CROP: ${crop.toUpperCase()} | 📍 Location: ${location}

// // // ━━━━━━━━━━━━━━━━━━━

// // // 💰 EXPECTED PRICE RANGE
// // // → ₹${price.min} – ₹${price.max} per kg

// // // 📈 MARKET TREND
// // // → ${trend}

// // // 📊 DEMAND
// // // → ${demand}

// // // ━━━━━━━━━━━━━━━━━━━

// // // 🚚 BEST NEARBY BUYERS/SHOPS
// // // → ${logisticsTip}

// // // ⏰ BEST TIME TO SELL
// // // → Early morning (5–9 AM)

// // // ━━━━━━━━━━━━━━━━━━━

// // // 🚜 IMPORTANT TIP
// // // → Sort & grade crops for better price
// // // `.trim();
// // // }

// // // // ======================
// // // // 🚀 MAIN API
// // // // ======================
// // // app.post("/api/chat", async (req, res) => {
// // //   try {
// // //     const { message } = req.body;

// // //     if (!message?.trim()) {
// // //       return res.json({ reply: "⚠️ Please ask a valid question." });
// // //     }

// // //     const lowerMsg = message.toLowerCase();

// // //     // 🔍 Detect crop
// // //     const detectedCrop = crops.find((crop) =>
// // //       lowerMsg.includes(crop)
// // //     );

// // //     if (!detectedCrop) {
// // //       return res.json({
// // //         reply:
// // //           "⚠️ Ask about: Tomato, Onion, Potato, Cabbage, Cauliflower.",
// // //       });
// // //     }

// // //     // 📍 Detect location
// // //     const detectedLocation =
// // //       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

// // //     // 📦 Quantity detection
// // //     const quantityMatch = message.match(/\d+/);
// // //     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : null;

// // //     // 🚚 Logistics
// // //     const logisticsTip =
// // //       quantity && quantity > 100
// // //         ? "Sell at Naveen Mandi Sthal near Manpur Uttar "
// // //         : "Sell at Tikonia Market ";

// // //     // 📊 Demand
// // //     const demandMap = {
// // //       tomato: "High demand 🔥",
// // //       onion: "Stable demand",
// // //       potato: "Moderate demand",
// // //       cabbage: "Low demand",
// // //       cauliflower: "High demand 🔥",
// // //     };

// // //     // 📈 Trend
// // //     const trendMap = {
// // //       tomato: "Prices increasing 📈",
// // //       onion: "Prices stable",
// // //       potato: "Prices stable",
// // //       cabbage: "Prices decreasing 📉",
// // //       cauliflower: "Prices increasing 📈",
// // //     };

// // //     const demand = demandMap[detectedCrop];
// // //     const trend = trendMap[detectedCrop];

// // //     // 🧠 Advice
// // //     let advice = "";
// // //     if (trend.includes("increasing")) {
// // //       advice = "Hold for 1–2 days for better price 📈";
// // //     } else if (trend.includes("decreasing")) {
// // //       advice = "Sell quickly before price drops ⚠️";
// // //     } else {
// // //       advice = "Stable market — sell anytime";
// // //     }

// // //     // 💰 Get price
// // //     let price = await getMandiPrice(detectedCrop, detectedLocation);

// // //     // fallback if API fails
// // //     if (!price || price.min === 0 || price.max === 0) {
// // //       price = mandiData[detectedCrop];
// // //     }

// // //     // 🧾 Final response
// // //     const reply = buildFinalResponse({
// // //       crop: detectedCrop,
// // //       location: detectedLocation,
// // //       price,
// // //       trend,
// // //       demand,
// // //       logisticsTip,
// // //       advice,
// // //     });

// // //     res.json({ reply });

// // //   } catch (error) {
// // //     console.error("❌ Server Error:", error);

// // //     res.status(500).json({
// // //       reply: "⚠️ Server error. Please try again later.",
// // //     });
// // //   }
// // // });

// // // // ======================
// // // const PORT = process.env.PORT || 5000;

// // // app.listen(PORT, () => {
// // //   console.log(`✅ Server running on http://localhost:${PORT}`);
// // // });


// // import axios from "axios";
// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import chatRoutes from "./routes/chatRoutes.js";
// // import connectDB from "./config/db.js";

// // dotenv.config();

// // const app = express();

// // // ======================
// // // 🔹 MIDDLEWARE
// // // ======================
// // app.use(cors());
// // app.use(express.json());

// // // ======================
// // // 🔹 ROUTES
// // // ======================
// // app.use("/api/chats", chatRoutes);

// // // ======================
// // // 🔹 DB CONNECT
// // // ======================
// // connectDB();

// // // ======================
// // // 🔹 CONFIG
// // // ======================
// // const GROQ_API_KEY = process.env.GROQ_API_KEY;

// // const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower"];

// // const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// // const mandiData = {
// //   tomato: { min: 18, max: 26 },
// //   onion: { min: 20, max: 32 },
// //   potato: { min: 12, max: 20 },
// //   cabbage: { min: 10, max: 18 },
// //   cauliflower: { min: 12, max: 22 },
// // };

// // // ======================
// // // 🔹 CACHE
// // // ======================
// // const cache = {};
// // const CACHE_TTL = 10 * 60 * 1000;

// // // ======================
// // // 🔹 FETCH MANDI PRICE
// // // ======================
// // async function getMandiPrice(crop, location) {
// //   const cacheKey = `${crop}_${location}`;

// //   if (cache[cacheKey] && Date.now() - cache[cacheKey].time < CACHE_TTL) {
// //     return cache[cacheKey].data;
// //   }

// //   try {
// //     let allRecords = [];

// //     for (let i = 0; i < 3; i++) {
// //       const response = await axios.get(
// //         "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24",
// //         {
// //           params: {
// //             "api-key": process.env.DATA_GOV_API_KEY,
// //             format: "json",
// //             limit: 100,
// //             offset: i * 100,
// //           },
// //         }
// //       );

// //       allRecords = [...allRecords, ...response.data.records];
// //     }

// //     const filtered = allRecords.filter((item) => {
// //       const commodity = item.commodity?.toLowerCase() || "";
// //       const market = item.market?.toLowerCase() || "";

// //       const min = parseInt(item.min_price);
// //       const max = parseInt(item.max_price);

// //       return (
// //         commodity.includes(crop) &&
// //         market.includes(location) &&
// //         !isNaN(min) &&
// //         !isNaN(max) &&
// //         min > 0 &&
// //         max > 0
// //       );
// //     });

// //     const finalData =
// //       filtered.length > 0
// //         ? filtered
// //         : allRecords.filter((item) => {
// //             const commodity = item.commodity?.toLowerCase() || "";
// //             const min = parseInt(item.min_price);
// //             const max = parseInt(item.max_price);

// //             return (
// //               commodity.includes(crop) &&
// //               !isNaN(min) &&
// //               !isNaN(max) &&
// //               min > 0 &&
// //               max > 0
// //             );
// //           });

// //     if (finalData.length === 0) return null;

// //     const avgMin = Math.round(
// //       finalData.reduce((sum, i) => sum + parseInt(i.min_price), 0) /
// //         finalData.length
// //     );

// //     const avgMax = Math.round(
// //       finalData.reduce((sum, i) => sum + parseInt(i.max_price), 0) /
// //         finalData.length
// //     );

// //     const result = { min: avgMin, max: avgMax };

// //     cache[cacheKey] = { data: result, time: Date.now() };

// //     return result;
// //   } catch (error) {
// //     console.log("❌ API Error:", error.message);
// //     return null;
// //   }
// // }

// // // ======================
// // // 🧠 AI RESPONSE
// // // ======================
// // async function generateAIResponse({ message, crop, quantity, price }) {
// //   const randomStyle =
// //     Math.random() > 0.5
// //       ? "Use a friendly conversational tone"
// //       : "Use a slightly professional tone";

// //   const quantityContext = quantity
// //     ? `Farmer has approx ${quantity} kg (${quantity > 50 ? "bulk" : "small quantity"})`
// //     : "Quantity not specified";

// //   const prompt = `
// // You are a smart Crop Selling Assistant for farmers in Haldwani (India).

// // ${randomStyle}

// // 🎯 GOAL:
// // Give practical, short, and personalized selling advice.

// // 🌐 LANGUAGE:
// // - If user writes Hindi → reply in Hindi
// // - Else → English

// // 📊 USER CONTEXT:
// // - Crop: ${crop}
// // - ${quantityContext}
// // - Price Range: ₹${price.min} – ₹${price.max}

// // ━━━━━━━━━━━━━━━━━━━━━━━
// // ⚠️ FORMAT:

// // 📍 BEST NEARBY BUYERS / SHOPS
// // • Suggest mandi or local buyers based on quantity

// // 💰 EXPECTED PRICE
// // • ₹${price.min} – ₹${price.max} per kg (mention daily fluctuation)

// // ⏰ BEST TIME TO SELL
// // • Time + season

// // 🚜 IMPORTANT TIP
// // • Practical tip

// // ━━━━━━━━━━━━━━━━━━━━━━━
// // ❌ RULES:
// // - No fake shop names
// // - No long paragraphs
// // - No repeated lines

// // User Query:
// // ${message}
// // `;

// //   try {
// //     const response = await axios.post(
// //       "https://api.groq.com/openai/v1/chat/completions",
// //       {
// //         model: "llama3-70b-8192",
// //         messages: [{ role: "user", content: prompt }],
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${GROQ_API_KEY}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     return response.data.choices[0].message.content;
// //   } catch (err) {
// //     console.log("❌ AI Error:", err.message);
// //     return null;
// //   }
// // }

// // // ======================
// // // 🚀 MAIN API
// // // ======================
// // app.post("/api/chat", async (req, res) => {
// //   try {
// //     const { message } = req.body;

// //     if (!message?.trim()) {
// //       return res.json({ reply: "⚠️ Please ask a valid question." });
// //     }

// //     const lowerMsg = message.toLowerCase();

// //     // 🔍 Detect crop
// //     const detectedCrop =
// //       crops.find((crop) => lowerMsg.includes(crop)) || "tomato";

// //     // 📍 Detect location
// //     const detectedLocation =
// //       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

// //     // 📦 Quantity detection
// //     const quantityMatch = message.match(/\d+/);
// //     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : null;

// //     // 💰 Get price
// //     let price = await getMandiPrice(detectedCrop, detectedLocation);

// //     if (!price || price.min === 0 || price.max === 0) {
// //       price = mandiData[detectedCrop];
// //     }

// //     // 🧠 AI RESPONSE
// //     const aiReply = await generateAIResponse({
// //       message,
// //       crop: detectedCrop,
// //       quantity,
// //       price,
// //     });

// //     if (aiReply) {
// //       return res.json({ reply: aiReply });
// //     }

// //     // 🔁 FALLBACK RESPONSE
// //     const fallbackReply = `
// // 📍 BEST NEARBY BUYERS / SHOPS
// // • ${quantity > 100 ? "Naveen Mandi (bulk selling)" : "Tikonia Market (local shops)"}

// // 💰 EXPECTED PRICE
// // • ₹${price.min} – ₹${price.max} per kg

// // ⏰ BEST TIME TO SELL
// // • Morning (5–9 AM)

// // 🚜 IMPORTANT TIP
// // • Sort crops before selling
// // `;

// //     res.json({ reply: fallbackReply });

// //   } catch (error) {
// //     console.error("❌ Server Error:", error);

// //     res.status(500).json({
// //       reply: "⚠️ Server error. Please try again later.",
// //     });
// //   }
// // });

// // // ======================
// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`✅ Server running on http://localhost:${PORT}`);
// // });

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
// // 🔹 CACHE
// // ======================
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
// // 🧠 AI RESPONSE (FIXED)
// // ======================
// async function generateAIResponse({ message, crop, quantity, price }) {
//   const randomStyle =
//     Math.random() > 0.5
//       ? "Use a friendly tone"
//       : "Use a slightly professional tone";

//   // smart quantity logic
//   let sellingType = "local shops";
//   if (quantity > 100) sellingType = "wholesale mandi";
//   else if (quantity > 30) sellingType = "semi-wholesale buyers";

//   const prompt = `
// You are a smart crop selling assistant for farmers in Haldwani (India).

// ${randomStyle}

// 🎯 GOAL:
// Give short, practical, personalized advice.

// 🌐 LANGUAGE:
// - Hindi if user uses Hindi
// - Otherwise English


// 📊 CONTEXT:
// - Crop: ${crop}
// - Quantity: ${quantity || "not specified"}
// - Selling type: ${sellingType}
// - Price: ₹${price.min} – ₹${price.max}

// ━━━━━━━━━━━━━━━━━━━━━━━
// FORMAT:

// 📍 BEST BUYERS
// • Suggest based on quantity (${sellingType})

// 💰 PRICE
// • ₹${price.min} – ₹${price.max} per kg (changes daily)

// ⏰ BEST TIME
// • Time + season

// 🚜 TIP
// • Practical tip

// ━━━━━━━━━━━━━━━━━━━━━━━

// User Query:
// ${message}
// `;

//   try {
//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.1-8b-instant", // ✅ FIXED MODEL
//         messages: [
//           {
//             role: "system",
//             content: "You are a helpful farming assistant.",
//           },
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//         temperature: 0.7,
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
//     console.log("❌ FULL AI ERROR:", err.response?.data || err.message);
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
//       return res.json({ reply: "⚠️ Please ask a valid question." });
//     }

//     const lowerMsg = message.toLowerCase();

//     // detect crop
//     const detectedCrop =
//       crops.find((crop) => lowerMsg.includes(crop)) || "tomato";

//     // detect location
//     const detectedLocation =
//       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

//     // quantity
//     const quantityMatch = message.match(/\d+/);
//     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : 0;

//     // get price
//     let price = await getMandiPrice(detectedCrop, detectedLocation);

//     if (!price || price.min === 0 || price.max === 0) {
//       price = mandiData[detectedCrop];
//     }

//     // AI response
//     const aiReply = await generateAIResponse({
//       message,
//       crop: detectedCrop,
//       quantity,
//       price,
//     });

//     if (aiReply) {
//       return res.json({ reply: aiReply });
//     }

//     // fallback
//     const fallbackReply = `
// 📍 BEST BUYERS
// • ${quantity > 100 ? "Naveen Mandi (bulk)" : "Local market (Tikonia)"}

// 💰 PRICE
// • ₹${price.min} – ₹${price.max}

// ⏰ BEST TIME
// • Morning (5–9 AM)

// 🚜 TIP
// • Sort crops before selling
// `;

//     res.json({ reply: fallbackReply });

//   } catch (error) {
//     console.error("❌ Server Error:", error);

//     res.status(500).json({
//       reply: "⚠️ Server error. Try again.",
//     });
//   }
// });

// // ======================
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

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
// // 🌐 LANGUAGE DETECTION
// // ======================
// function detectLanguage(text) {
//   const hindiRegex = /[\u0900-\u097F]/;
//   return hindiRegex.test(text) ? "Hindi" : "English";
// }

// // ======================
// // 🔹 CACHE
// // ======================
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
// // 🧠 AI RESPONSE
// // ======================
// async function generateAIResponse({ message, crop, quantity, price }) {

//   const language = detectLanguage(message);

//   // Smart selling logic
//   let sellingType = "local shops";
//   if (quantity > 100) sellingType = "wholesale mandi";
//   else if (quantity > 30) sellingType = "semi-wholesale buyers";

//   const prompt = `
// You are an expert Crop Selling Assistant helping farmers in Haldwani (India).

// 🎯 GOAL:
// Give short, practical and realistic advice to farmers.

// ━━━━━━━━━━━━━━━━━━━━━━━
// 🌐 LANGUAGE RULE (STRICT):
// - User language: ${language}
// - Reply ONLY in ${language}
// - Do NOT mix Hindi and English
// - Keep language simple and natural

// ━━━━━━━━━━━━━━━━━━━━━━━
// 🧠 CONTEXT:
// - Crop: ${crop}
// - Quantity: ${quantity || "not specified"}
// - Selling Type: ${sellingType}
// - Price Range: ₹${price.min} – ₹${price.max}

// ━━━━━━━━━━━━━━━━━━━━━━━
// ⚠️ FORMAT:

// 📍 BEST BUYERS
// • Based on quantity (${sellingType})

// 💰 EXPECTED PRICE
// • ₹${price.min} – ₹${price.max} per kg (price changes daily)

// ⏰ BEST TIME TO SELL
// • Mention time with reason

// 🚜 IMPORTANT TIP
// • Practical farmer-friendly tip

// ━━━━━━━━━━━━━━━━━━━━━━━

// User Query:
// ${message}
// `;

//   try {
//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.1-8b-instant",
//         messages: [
//           {
//             role: "system",
//             content: "You are a helpful agricultural assistant.",
//           },
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//         temperature: 0.8,
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
//       return res.json({ reply: "⚠️ Please enter a valid question." });
//     }

//     const lowerMsg = message.toLowerCase();

//     const detectedCrop =
//       crops.find((crop) => lowerMsg.includes(crop)) || "tomato";

//     const detectedLocation =
//       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

//     const quantityMatch = message.match(/\d+/);
//     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : 0;

//     let price = await getMandiPrice(detectedCrop, detectedLocation);

//     if (!price || price.min === 0 || price.max === 0) {
//       price = mandiData[detectedCrop];
//     }

//     const aiReply = await generateAIResponse({
//       message,
//       crop: detectedCrop,
//       quantity,
//       price,
//     });

//     if (aiReply) {
//       return res.json({ reply: aiReply });
//     }

//     // fallback
//     res.json({
//       reply: `
// 📍 BEST BUYERS
// • ${quantity > 100 ? "Naveen Mandi (bulk selling)" : "Local market (Tikonia)"}

// 💰 EXPECTED PRICE
// • ₹${price.min} – ₹${price.max}

// ⏰ BEST TIME
// • Morning (5–9 AM)

// 🚜 TIP
// • Sort crops before selling
// `,
//     });

//   } catch (error) {
//     console.error("❌ Server Error:", error);

//     res.status(500).json({
//       reply: "⚠️ Server error. Please try again.",
//     });
//   }
// });

// // ======================
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });



//better one 1

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

// // Expanded crop list — Hindi names + English
// const crops = [
//   "tomato", "tamatar",
//   "onion", "pyaz",
//   "potato", "aloo",
//   "cabbage", "patta gobhi",
//   "cauliflower", "phool gobhi", "gobhi",
//   "wheat", "gehun",
//   "rice", "chawal",
//   "garlic", "lahsun",
//   "ginger", "adrak",
//   "chilli", "mirch",
// ];

// // Crop name normalizer — maps Hindi to English key
// const cropNormalizer = {
//   tamatar: "tomato",
//   pyaz: "onion",
//   aloo: "potato",
//   "patta gobhi": "cabbage",
//   "phool gobhi": "cauliflower",
//   gobhi: "cauliflower",
//   gehun: "wheat",
//   chawal: "rice",
//   lahsun: "garlic",
//   adrak: "ginger",
//   mirch: "chilli",
// };

// const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road", "ramnagar", "rudrapur", "lalkuan"];

// // Fallback prices when live API fails
// const mandiData = {
//   tomato:      { min: 18, max: 26 },
//   onion:       { min: 20, max: 32 },
//   potato:      { min: 12, max: 20 },
//   cabbage:     { min: 10, max: 18 },
//   cauliflower: { min: 12, max: 22 },
//   wheat:       { min: 22, max: 28 },
//   rice:        { min: 25, max: 35 },
//   garlic:      { min: 40, max: 65 },
//   ginger:      { min: 35, max: 55 },
//   chilli:      { min: 30, max: 50 },
// };

// // ======================
// // 🌐 SMART LANGUAGE DETECTION
// // ======================
// function detectLanguage(text) {
//   const hindiScript = /[\u0900-\u097F]/;

//   // Extended Roman Hindi vocabulary
//   const romanHindiWords = [
//     "bhai", "kaise", "kya", "kyu", "kyun", "kaun", "kahan", "kab",
//     "kitna", "kitne", "bechna", "bechna", "mandi", "sabzi", "tamatar",
//     "aloo", "pyaz", "gobhi", "mujhe", "mera", "meri", "hai", "haan",
//     "nahi", "karna", "lena", "dena", "bhav", "rate", "daam", "khareed",
//     "bikri", "fasal", "khet", "kisaan", "yahan", "wahan", "abhi",
//     "kal", "aaj", "gehun", "chawal", "mirch", "lahsun", "adrak",
//     "zyada", "thoda", "bahut", "accha", "sahi", "galat", "paise",
//     "rupaye", "kilo", "quintal", "bata", "batao", "dikhao", "help",
//   ];

//   const lower = text.toLowerCase();

//   if (hindiScript.test(text)) return "Hindi";
//   if (romanHindiWords.some((word) => lower.split(/\s+/).includes(word))) return "Hindi";
//   // Partial match for compound roman hindi phrases
//   if (romanHindiWords.some((word) => lower.includes(word) && word.length > 4)) return "Hindi";

//   return "English";
// }

// // ======================
// // 🔹 IN-MEMORY CACHE
// // ======================
// const cache = {};
// const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// // ======================
// // 🔹 LIVE MANDI PRICE FETCH
// // ======================
// async function getMandiPrice(crop, location) {
//   const cacheKey = `${crop}_${location}`;

//   if (cache[cacheKey] && Date.now() - cache[cacheKey].time < CACHE_TTL) {
//     console.log(`✅ Cache hit: ${cacheKey}`);
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
//           timeout: 8000,
//         }
//       );
//       allRecords = [...allRecords, ...(response.data.records || [])];
//     }

//     // Try location-specific match first, then fallback to any location
//     let filtered = allRecords.filter((item) => {
//       const commodity = item.commodity?.toLowerCase() || "";
//       const market = item.market?.toLowerCase() || "";
//       const min = parseInt(item.min_price);
//       const max = parseInt(item.max_price);
//       return commodity.includes(crop) && market.includes(location) && !isNaN(min) && min > 0 && !isNaN(max) && max > 0;
//     });

//     if (!filtered.length) {
//       filtered = allRecords.filter((item) => {
//         const commodity = item.commodity?.toLowerCase() || "";
//         const min = parseInt(item.min_price);
//         const max = parseInt(item.max_price);
//         return commodity.includes(crop) && !isNaN(min) && min > 0 && !isNaN(max) && max > 0;
//       });
//     }

//     if (!filtered.length) return null;

//     const avgMin = Math.round(filtered.reduce((sum, i) => sum + parseInt(i.min_price), 0) / filtered.length);
//     const avgMax = Math.round(filtered.reduce((sum, i) => sum + parseInt(i.max_price), 0) / filtered.length);

//     const result = { min: avgMin, max: avgMax, live: true };
//     cache[cacheKey] = { data: result, time: Date.now() };

//     return result;
//   } catch (error) {
//     console.log("❌ Mandi API Error:", error.message);
//     return null;
//   }
// }

// // ======================
// // 🧠 CORE AI RESPONSE ENGINE — STARTUP LEVEL
// // ======================
// async function generateAIResponse({ message, crop, quantity, price, location, language }) {

//   // Determine seller type for context
//   let sellingChannel = "local market / retail";
//   let sellingAdvice = "Local vegetable shops and retail bazaar";
//   if (quantity > 200) {
//     sellingChannel = "wholesale mandi (bulk)";
//     sellingAdvice = "Direct wholesale mandi or commission agents";
//   } else if (quantity > 50) {
//     sellingChannel = "semi-wholesale buyers";
//     sellingAdvice = "Semi-wholesale buyers or cooperative groups";
//   }

//   const priceSource = price.live ? "Live mandi data (today's rate)" : "Reference market data";
//   const quantityText = quantity ? `${quantity} kg` : "not mentioned";

//   // =====================================================================
//   // DUAL LANGUAGE PROMPTS — English and Hindi handled separately for quality
//   // =====================================================================

//   const englishPrompt = `
// You are AgroAI — a trusted crop selling assistant for farmers in Haldwani, Uttarakhand.
// Your job: Give real, actionable advice like a knowledgeable local mandi expert who genuinely cares about the farmer's profit.

// CONTEXT:
// - Crop: ${crop}
// - Quantity: ${quantityText}
// - Selling type: ${sellingChannel}
// - Location: ${location}
// - Price source: ${priceSource}
// - Current price range: ₹${price.min}–₹${price.max} per kg

// FARMER'S QUESTION: "${message}"

// INSTRUCTIONS:
// - Talk naturally, like a trusted local expert — NOT like a robot or generic assistant
// - Be direct and specific to Haldwani/Uttarakhand region
// - Mention real places when relevant (Haldwani mandi, Tikonia, Kathgodam market etc.)
// - Give honest practical advice including risks
// - Keep response concise but complete — farmers are busy

// RESPOND STRICTLY IN THIS FORMAT (use emojis for readability):

// 📍 WHERE TO SELL
// [Specific buyers/markets based on ${quantityText} of ${crop} — mention actual places in Haldwani]

// 💰 TODAY'S PRICE
// [₹${price.min}–₹${price.max}/kg · explain if it's good/bad time to sell · any price trend if relevant]

// ⏰ BEST TIME TO SELL
// [Specific time + honest reason why]

// 🚜 PRO TIP
// [One sharp, practical tip specific to ${crop} — something a real mandi expert would say]

// ⚠️ WATCH OUT
// [One common mistake farmers make while selling ${crop} — keep it real]
// `;

//   const hindiPrompt = `
// तुम AgroAI हो — हल्द्वानी, उत्तराखंड के किसानों का भरोसेमंद फसल बेचने वाला सहायक।
// तुम्हारा काम है: एक असली मंडी विशेषज्ञ की तरह सच्ची, काम की सलाह देना जो किसान की जेब भरे।

// संदर्भ (Context):
// - फसल: ${crop}
// - मात्रा: ${quantityText}
// - बेचने का तरीका: ${sellingChannel}
// - जगह: ${location}
// - भाव का स्रोत: ${priceSource}
// - आज का भाव: ₹${price.min}–₹${price.max} प्रति किलो

// किसान का सवाल: "${message}"

// निर्देश:
// - बिल्कुल असली मंडी दलाल की तरह बात करो — सरल, सीधी, दिल से
// - हल्द्वानी/उत्तराखंड की असली जगहें बताओ (हल्द्वानी मंडी, टिकोनिया, काठगोदाम बाज़ार आदि)
// - ईमानदार सलाह दो, जोखिम भी बताओ
// - जवाब छोटा पर पूरा हो — किसान के पास वक्त कम होता है
// - जवाब पूरी तरह हिंदी में (देवनागरी) दो — एक भी अंग्रेज़ी शब्द नहीं

// सख्ती से इस फॉर्मेट में जवाब दो:

// 📍 कहाँ बेचें
// [${quantityText} ${crop} के लिए हल्द्वानी की असली जगहें और खरीदार]

// 💰 आज का भाव
// [₹${price.min}–₹${price.max}/किलो · क्या अभी बेचना सही है? · कोई भाव बदलाव हो तो बताओ]

// ⏰ बेचने का सही समय
// [कौन सा वक्त और क्यों — असली कारण बताओ]

// 🚜 ज़रूरी सलाह
// [${crop} के लिए एक तेज़, काम की टिप जो असली मंडी जानकार देता है]

// ⚠️ सावधान रहो
// [${crop} बेचते वक्त किसान जो सबसे बड़ी गलती करते हैं — सच बताओ]
// `;

//   const systemPrompt = language === "Hindi"
//     ? "तुम एक भारतीय कृषि विशेषज्ञ हो। सिर्फ हिंदी (देवनागरी) में जवाब दो। कोई अंग्रेज़ी नहीं।"
//     : "You are an Indian agriculture expert for Uttarakhand farmers. Reply only in English. Be concise and practical.";

//   const userPrompt = language === "Hindi" ? hindiPrompt : englishPrompt;

//   try {
//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.1-8b-instant",
//         messages: [
//           { role: "system", content: systemPrompt },
//           { role: "user", content: userPrompt },
//         ],
//         temperature: 0.75,
//         max_tokens: 700,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         timeout: 15000,
//       }
//     );

//     let output = response.data.choices[0].message.content.trim();

//     // Safety: strip English letters if Hindi response is expected
//     if (language === "Hindi") {
//       // Only remove stray English words (not symbols, numbers, ₹ etc.)
//       output = output.replace(/\b[A-Za-z]{3,}\b/g, "").replace(/  +/g, " ").trim();
//     }

//     return output;

//   } catch (err) {
//     console.log("❌ Groq AI Error:", err.response?.data || err.message);
//     return null;
//   }
// }

// // ======================
// // 🚀 MAIN CHAT API
// // ======================
// app.post("/api/chat", async (req, res) => {
//   try {
//     const { message } = req.body;

//     if (!message?.trim()) {
//       return res.json({ reply: "⚠️ कृपया एक सवाल पूछें। / Please enter a valid question." });
//     }

//     const lowerMsg = message.toLowerCase();
//     const language = detectLanguage(message);

//     // ── Crop Detection (Hindi + English) ──
//     let rawCrop = crops.find((c) => lowerMsg.includes(c)) || "tomato";
//     const detectedCrop = cropNormalizer[rawCrop] || rawCrop; // normalize to English key

//     // ── Location Detection ──
//     const detectedLocation = locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

//     // ── Quantity Extraction ──
//     const quantityMatch = message.match(/(\d+)\s*(kg|किलो|kilo|quintal|क्विंटल)?/i);
//     const quantity = quantityMatch ? parseInt(quantityMatch[1]) : 0;

//     // ── Price Fetch (Live → Fallback) ──
//     let price = await getMandiPrice(detectedCrop, detectedLocation);
//     if (!price || price.min === 0 || price.max === 0) {
//       price = { ...(mandiData[detectedCrop] || { min: 15, max: 25 }), live: false };
//     }

//     console.log(`🌾 Crop: ${detectedCrop} | Location: ${detectedLocation} | Qty: ${quantity} | Lang: ${language} | Price: ₹${price.min}-${price.max} | Live: ${price.live}`);

//     // ── AI Response ──
//     const aiReply = await generateAIResponse({
//       message,
//       crop: detectedCrop,
//       quantity,
//       price,
//       location: detectedLocation,
//       language,
//     });

//     if (aiReply) {
//       return res.json({
//         reply: aiReply,
//         meta: {
//           crop: detectedCrop,
//           location: detectedLocation,
//           quantity,
//           priceRange: `₹${price.min}–₹${price.max}`,
//           priceSource: price.live ? "live" : "fallback",
//           language,
//         },
//       });
//     }

//     // ── Hard Fallback (if AI fails) ──
//     const fallback = language === "Hindi"
//       ? `📍 **कहाँ बेचें**\n• ${quantity > 100 ? "नवीन मंडी हल्द्वानी (थोक)" : "टिकोनिया बाज़ार या स्थानीय सब्ज़ी मंडी"}\n\n💰 **आज का भाव**\n• ₹${price.min}–₹${price.max} प्रति किलो\n\n⏰ **बेचने का सही समय**\n• सुबह ५–९ बजे (मंडी में ताज़ी माँग होती है)\n\n🚜 **ज़रूरी सलाह**\n• बेचने से पहले फसल छाँट लें — अच्छा माल अलग, खराब अलग\n\n⚠️ **सावधान**\n• बिचौलिए से बचें, सीधे मंडी जाएँ`
//       : `📍 **WHERE TO SELL**\n• ${quantity > 100 ? "Naveen Mandi Haldwani (wholesale)" : "Tikonia market or local sabzi mandi"}\n\n💰 **TODAY'S PRICE**\n• ₹${price.min}–₹${price.max} per kg\n\n⏰ **BEST TIME**\n• Early morning 5–9 AM (peak demand)\n\n🚜 **PRO TIP**\n• Sort your crops before selling — grade A separately for better price\n\n⚠️ **WATCH OUT**\n• Avoid middlemen, go directly to the mandi`;

//     return res.json({ reply: fallback });

//   } catch (error) {
//     console.error("❌ Server Error:", error.message);
//     res.status(500).json({
//       reply: "⚠️ कुछ गड़बड़ हो गई। थोड़ी देर बाद फिर कोशिश करें। / Server error. Please try again shortly.",
//     });
//   }
// });

// // ======================
// // 🏥 HEALTH CHECK
// // ======================
// app.get("/health", (_, res) => {
//   res.json({ status: "✅ AgroAI server is running", timestamp: new Date().toISOString() });
// });

// // ======================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ AgroAI Server running on http://localhost:${PORT}`);
// });










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

// const crops = ["tomato", "onion", "potato", "cabbage", "cauliflower",
//                "tamatar", "aalu", "pyaaz", "gobi", "bandgobi"];

// // Hindi crop name → English mapping
// const hindiCropMap = {
//   tamatar: "tomato",
//   aalu: "potato",
//   pyaaz: "onion",
//   gobi: "cauliflower",
//   bandgobi: "cabbage",
// };

// const locations = ["haldwani", "kathgodam", "tikonia", "bareilly road"];

// const mandiData = {
//   tomato:     { min: 18, max: 26 },
//   onion:      { min: 20, max: 32 },
//   potato:     { min: 12, max: 20 },
//   cabbage:    { min: 10, max: 18 },
//   cauliflower:{ min: 12, max: 22 },
// };

// // ======================
// // 🔹 CACHE
// // ======================
// const cache = {};
// const CACHE_TTL = 10 * 60 * 1000;

// // ======================
// // 🔹 LANGUAGE DETECTION
// // ======================
// function detectLanguage(text) {
//   // Unicode range for Devanagari script (Hindi)
//   const hindiPattern = /[\u0900-\u097F]/;
//   if (hindiPattern.test(text)) return "hindi";

//   // Common Hindi romanized words
//   const romanHindiWords = [
//     "mujhe", "meri", "kahan", "kab", "kaise", "bechna", "fasal",
//     "khet", "daam", "bhav", "tamatar", "aalu", "pyaaz", "gobi",
//     "mandi", "bikri", "paisa", "rupaye", "khareed", "bech"
//   ];
//   const lowerText = text.toLowerCase();
//   const isRomanHindi = romanHindiWords.some((word) => lowerText.includes(word));

//   return isRomanHindi ? "hindi" : "english";
// }

// // ======================
// // 🔹 FETCH MANDI PRICE
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
//       const market    = item.market?.toLowerCase() || "";
//       const min = parseInt(item.min_price);
//       const max = parseInt(item.max_price);
//       return (
//         commodity.includes(crop) &&
//         market.includes(location) &&
//         !isNaN(min) && !isNaN(max) &&
//         min > 0 && max > 0
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
//               !isNaN(min) && !isNaN(max) &&
//               min > 0 && max > 0
//             );
//           });

//     if (finalData.length === 0) return null;

//     const avgMin = Math.round(
//       finalData.reduce((sum, i) => sum + parseInt(i.min_price), 0) / finalData.length
//     );
//     const avgMax = Math.round(
//       finalData.reduce((sum, i) => sum + parseInt(i.max_price), 0) / finalData.length
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
// // 🧠 TEXT GENERATION COMPONENT
// // This is a reusable, standalone function that
// // generates personalized AI text for any farming query.
// // Professor's requirement: dedicated text generation component.
// // ======================
// async function textGenerationComponent({ prompt, language = "english" }) {
//   const systemPrompt =
//     language === "hindi"
//       ? "Aap ek helpful fasal bechne ke sahayak hain jo Haldwani ke kisanon ki madad karte hain. Hamesha Hindi mein jawab dein. Friendly aur practical rahein."
//       : "You are a helpful crop selling assistant for farmers in Haldwani, India. Always be friendly, practical, and personalized.";

//   try {
//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.1-8b-instant",
//         messages: [
//           { role: "system", content: systemPrompt },
//           { role: "user",   content: prompt },
//         ],
//         temperature: 0.75,
//         max_tokens: 600,
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
//     console.log("❌ Text Generation Error:", err.response?.data || err.message);
//     return null;
//   }
// }

// // ======================
// // 🌾 PERSONALIZED PROMPT BUILDER
// // Builds a rich, personalized prompt based on
// // farmer context before passing to text generator.
// // ======================
// function buildPersonalizedPrompt({ message, crop, quantity, price, location, language, farmerName }) {

//   // Smart selling channel based on quantity
//   let sellingChannel = "local shops or nearby market";
//   if (quantity > 100) sellingChannel = "wholesale mandi (bulk quantity)";
//   else if (quantity > 30) sellingChannel = "semi-wholesale buyers";

//   // Personalized greeting
//   const greeting = farmerName
//     ? (language === "hindi" ? `Kisan ka naam: ${farmerName}` : `Farmer's name: ${farmerName}`)
//     : "";

//   if (language === "hindi") {
//     return `
// ${greeting}

// Aap ek smart fasal bechne ke sahayak hain. Neeche diye gaye details ke aadhar par ek personalized aur helpful jawab dein.

// 📊 Jaankari:
// - Fasal (Crop): ${crop}
// - Matra (Quantity): ${quantity ? quantity + " kg" : "bataya nahi"}
// - Selling Channel: ${sellingChannel}
// - Mandi Bhav: ₹${price.min} – ₹${price.max} per kg
// - Jagah (Location): ${location}

// FORMAT (Hindi mein):

// 📍 SAHI KHAREEDDAR
// • ${sellingChannel} ke hisaab se suggestion dein

// 💰 BHAV (PRICE)
// • ₹${price.min} – ₹${price.max} per kg (roz badalta hai)

// ⏰ BECHNE KA SAHI SAMAY
// • Season aur time ke hisaab se

// 🚜 KISAN KE LIYE TIPS
// • Practical aur personal advice

// Kisan ka sawaal:
// ${message}
//     `.trim();
//   }

//   return `
// ${greeting}

// You are a smart and personalized crop selling assistant for farmers in Haldwani.

// 📊 Farmer's Context:
// - Crop: ${crop}
// - Quantity: ${quantity ? quantity + " kg" : "not specified"}
// - Ideal Selling Channel: ${sellingChannel}
// - Current Mandi Price: ₹${price.min} – ₹${price.max} per kg
// - Location: ${location}

// Give a SHORT, PERSONALIZED, and PRACTICAL response using this format:

// 📍 BEST BUYERS
// • Based on quantity (${sellingChannel}), suggest specific buyers or markets

// 💰 PRICE
// • ₹${price.min} – ₹${price.max} per kg (prices change daily)

// ⏰ BEST TIME TO SELL
// • Best time of day + season advice

// 🚜 PERSONAL TIP
// • One specific, actionable tip for this farmer's situation

// Farmer's Question:
// ${message}
//   `.trim();
// }

// // ======================
// // 🚀 MAIN API ENDPOINT
// // ======================
// app.post("/api/chat", async (req, res) => {
//   try {
//     const { message, farmerName } = req.body;

//     if (!message?.trim()) {
//       return res.json({ reply: "⚠️ Please ask a valid question." });
//     }

//     const lowerMsg = message.toLowerCase();

//     // --- Detect language ---
//     const language = detectLanguage(message);

//     // --- Detect crop (support Hindi names too) ---
//     let detectedCrop = crops.find((crop) => lowerMsg.includes(crop)) || "tomato";
//     // Map Hindi crop names to English for mandi lookup
//     if (hindiCropMap[detectedCrop]) {
//       detectedCrop = hindiCropMap[detectedCrop];
//     }

//     // --- Detect location ---
//     const detectedLocation =
//       locations.find((loc) => lowerMsg.includes(loc)) || "haldwani";

//     // --- Detect quantity ---
//     const quantityMatch = message.match(/\d+/);
//     const quantity = quantityMatch ? parseInt(quantityMatch[0]) : 0;

//     // --- Get mandi price ---
//     let price = await getMandiPrice(detectedCrop, detectedLocation);
//     if (!price || price.min === 0 || price.max === 0) {
//       price = mandiData[detectedCrop] || { min: 15, max: 25 };
//     }

//     // --- Build personalized prompt ---
//     const prompt = buildPersonalizedPrompt({
//       message,
//       crop: detectedCrop,
//       quantity,
//       price,
//       location: detectedLocation,
//       language,
//       farmerName: farmerName || null,
//     });

//     // --- Generate text using Text Generation Component ---
//     const aiReply = await textGenerationComponent({ prompt, language });

//     if (aiReply) {
//       return res.json({
//         reply: aiReply,
//         meta: {
//           crop: detectedCrop,
//           location: detectedLocation,
//           quantity,
//           language,
//           price,
//         },
//       });
//     }

//     // --- Fallback (if AI fails) ---
//     const fallback =
//       language === "hindi"
//         ? `
// 📍 SAHI KHAREEDDAR
// • ${quantity > 100 ? "Naveen Mandi (bulk ke liye)" : "Tikonia local market"}

// 💰 BHAV
// • ₹${price.min} – ₹${price.max} per kg

// ⏰ SAHI SAMAY
// • Subah 5–9 baje

// 🚜 TIP
// • Bechne se pehle fasal ko sort karein
//         `
//         : `
// 📍 BEST BUYERS
// • ${quantity > 100 ? "Naveen Mandi (bulk)" : "Local market (Tikonia)"}

// 💰 PRICE
// • ₹${price.min} – ₹${price.max} per kg

// ⏰ BEST TIME
// • Morning (5–9 AM)

// 🚜 TIP
// • Sort your crops before selling
//         `;

//     res.json({ reply: fallback.trim() });

//   } catch (error) {
//     console.error("❌ Server Error:", error);
//     res.status(500).json({ reply: "⚠️ Server error. Try again." });
//   }
// });

// // ======================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });










