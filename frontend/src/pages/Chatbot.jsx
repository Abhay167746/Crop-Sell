// // import { useState, useRef, useEffect, useCallback } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import collegeLogo from "../assets/cot.jpg";

// // /* ─── Quick suggestions ─────────────────────────────────────────── */
// // const SUGGESTIONS = [
// //   { label: "🍅 Tamatar ka bhav", query: "Haldwani mein tamatar ka bhav kya hai aaj?" },
// //   { label: "🧅 Pyaz kahan bechun", query: "Pyaz 60 kg kahan bechun Haldwani mein?" },
// //   { label: "🥔 Aloo buyers", query: "Best buyers for potatoes near Haldwani" },
// //   { label: "🥦 Gobhi mandi", query: "Cauliflower mandi price and best time to sell" },
// //   { label: "💰 Best price tips", query: "How to get maximum price for my crops?" },
// //   { label: "⏰ Kab bechna chahiye", query: "Sabji bechne ka sabse accha samay kab hai?" },
// // ];

// // /* ─── Welcome screen crop topics (like Pragyanam's knowledge topics) ─── */
// // const CROP_TOPICS = [
// //   { icon: "🍅", label: "टमाटर (Tomato)" },
// //   { icon: "🧅", label: "प्याज (Onion)" },
// //   { icon: "🥔", label: "आलू (Potato)" },
// //   { icon: "🥦", label: "फूलगोभी (Cauliflower)" },
// //   { icon: "🥕", label: "गाजर (Carrot)" },
// // ];

// // /* ─── Grain overlay ──────────────────────────────────────────────── */
// // function GrainOverlay() {
// //   return (
// //     <svg className="grain-svg" xmlns="http://www.w3.org/2000/svg" style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
// //       <filter id="grain">
// //         <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
// //         <feColorMatrix type="saturate" values="0" />
// //       </filter>
// //       <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04" />
// //     </svg>
// //   );
// // }

// // /* ─── Format bot message ────────────────────────────────────────── */
// // function BotMessage({ text }) {
// //   const lines = text.split("\n");
// //   return (
// //     <div className="bot-content">
// //       {lines.map((line, i) => {
// //         const trimmed = line.trim();
// //         if (!trimmed) return <div key={i} className="msg-spacer" />;
// //         if (/^━+$/.test(trimmed)) return <div key={i} className="msg-divider" />;
// //         const sectionMatch = trimmed.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
// //         if (sectionMatch) {
// //           return (
// //             <div key={i} className="msg-section">
// //               <span className="section-icon">{sectionMatch[1]}</span>
// //               <span className="section-title">{sectionMatch[2]}</span>
// //             </div>
// //           );
// //         }
// //         if (trimmed.startsWith("•")) {
// //           return (
// //             <div key={i} className="msg-bullet">
// //               <span className="bullet-dot" />
// //               <span>{trimmed.slice(1).trim()}</span>
// //             </div>
// //           );
// //         }
// //         return <p key={i} className="msg-text">{trimmed}</p>;
// //       })}
// //     </div>
// //   );
// // }

// // /* ─── Typing indicator ──────────────────────────────────────────── */
// // function TypingIndicator() {
// //   return (
// //     <div className="typing-wrap">
// //       <div className="bot-avatar-sm"><span>🌾</span></div>
// //       <div className="typing-bubble">
// //         <div className="typing-bar" />
// //         <div className="typing-bar" style={{ animationDelay: "0.2s", width: "55%" }} />
// //         <div className="typing-bar" style={{ animationDelay: "0.35s", width: "35%" }} />
// //       </div>
// //     </div>
// //   );
// // }

// // /* ─── Icons ─────────────────────────────────────────────────────── */
// // const IconSend = () => (
// //   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
// //     <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
// //   </svg>
// // );
// // const IconMic = () => (
// //   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
// //     <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/>
// //     <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
// //     <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconMicOff = () => (
// //   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
// //     <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconHome = () => (
// //   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
// //     <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //   </svg>
// // );
// // const IconPlus = () => (
// //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
// //     <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconSpeak = () => (
// //   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
// //     <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/>
// //     <path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconCopy = () => (
// //   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
// //     <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
// //     <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/>
// //   </svg>
// // );

// // /* ═══════════════════════════════════════════════════════════════ */
// // /*  MAIN CHATBOT                                                    */
// // /* ═══════════════════════════════════════════════════════════════ */
// // export default function Chatbot() {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("token");
// //   const farmerName = localStorage.getItem("farmerName") || null;

// //   function now() {
// //     return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// //   }

// //   const INIT = {
// //     sender: "bot",
// //     text: farmerName
// //       ? `Namaste ${farmerName} ji! 🌾\n\nMain AgroAI hoon — aapka personal fasal bechne ka saathi.`
// //       : `Namaste! 🌾\nI'm AgroAI — your personal crop selling assistant for Haldwani.`,
// //     time: now(),
// //     id: "init",
// //   };

// //   const [messages, setMessages] = useState([INIT]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [chatId, setChatId] = useState(null);
// //   const [isListening, setIsListening] = useState(false);
// //   const [voiceSupported, setVoiceSupported] = useState(false);
// //   const [voiceLang, setVoiceLang] = useState("en-IN");
// //   const [transcript, setTranscript] = useState("");
// //   const [isSpeaking, setIsSpeaking] = useState(false);
// //   const [showSuggestions, setShowSuggestions] = useState(true);
// //   const [sidebarOpen, setSidebarOpen] = useState(false); // starts CLOSED like Pragyanam
// //   const [copiedId, setCopiedId] = useState(null);
// //   const [charCount, setCharCount] = useState(0);

// //   const bottomRef = useRef(null);
// //   const inputRef = useRef(null);
// //   const recognitionRef = useRef(null);

// //   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
// //   useEffect(() => {
// //     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (SR) setVoiceSupported(true);
// //   }, []);

// //   useEffect(() => {
// //     if (!token) return;
// //     (async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
// //         const data = await res.json();
// //         if (data.length > 0) {
// //           setMessages(data[0].messages.length ? data[0].messages : [INIT]);
// //           setChatId(data[0]._id);
// //           setShowSuggestions(data[0].messages.length <= 1);
// //         } else {
// //           const cr = await fetch("http://localhost:5000/api/chats", {
// //             method: "POST", headers: { Authorization: token },
// //           });
// //           const chat = await cr.json();
// //           setChatId(chat._id);
// //         }
// //       } catch {}
// //     })();
// //   }, []);

// //   const startListening = useCallback(() => {
// //     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SR) return;
// //     const r = new SR();
// //     r.lang = voiceLang; r.interimResults = true;
// //     r.onstart = () => setIsListening(true);
// //     r.onresult = (e) => {
// //       const t = Array.from(e.results).map(x => x[0].transcript).join("");
// //       setTranscript(t); setInput(t); setCharCount(t.length);
// //     };
// //     r.onend = () => { setIsListening(false); setTranscript(""); };
// //     r.onerror = () => { setIsListening(false); setTranscript(""); };
// //     recognitionRef.current = r; r.start();
// //   }, [voiceLang]);

// //   const stopListening = useCallback(() => {
// //     recognitionRef.current?.stop(); setIsListening(false);
// //   }, []);

// //   const toggleVoice = () => {
// //     if (isListening) { stopListening(); if (input.trim()) sendMessage(input); }
// //     else startListening();
// //   };

// //   const speakText = (text) => {
// //     if (!window.speechSynthesis) return;
// //     window.speechSynthesis.cancel();
// //     const clean = text.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". ");
// //     const u = new SpeechSynthesisUtterance(clean);
// //     u.lang = voiceLang; u.rate = 0.92;
// //     u.onstart = () => setIsSpeaking(true);
// //     u.onend = () => setIsSpeaking(false);
// //     window.speechSynthesis.speak(u);
// //   };

// //   const copyText = (text, id) => {
// //     navigator.clipboard.writeText(text).then(() => {
// //       setCopiedId(id); setTimeout(() => setCopiedId(null), 2000);
// //     });
// //   };

// //   const newChat = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chats", {
// //         method: "POST", headers: { Authorization: token },
// //       });
// //       const chat = await res.json();
// //       setChatId(chat._id);
// //     } catch {}
// //     setMessages([INIT]); setInput(""); setCharCount(0);
// //     setShowSuggestions(true); setSidebarOpen(false);
// //   };

// //   const saveMessage = async (msg) => {
// //     if (!chatId || !token) return;
// //     await fetch("http://localhost:5000/api/chats/message", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json", Authorization: token },
// //       body: JSON.stringify({ chatId, message: msg }),
// //     }).catch(() => {});
// //   };

// //   const sendMessage = async (text) => {
// //     const msg = (text || input).trim();
// //     if (!msg || loading) return;
// //     setInput(""); setCharCount(0); setShowSuggestions(false);
// //     const userMsg = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
// //     await saveMessage(userMsg);
// //     setMessages(p => [...p, userMsg]);
// //     setLoading(true);
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: msg, farmerName }),
// //       });
// //       const data = await res.json();
// //       if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
// //       const botMsg = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
// //       await saveMessage(botMsg);
// //       setMessages(p => [...p, botMsg]);
// //     } catch {
// //       setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_err" }]);
// //     } finally {
// //       setLoading(false); setTimeout(() => inputRef.current?.focus(), 100);
// //     }
// //   };

// //   const handleKey = (e) => {
// //     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
// //   };

// //   /* ═══ RENDER ═══════════════════════════════════════════════════ */
// //   return (
// //     <>
// //       <style>{CSS}</style>
// //       <GrainOverlay />

// //       <div className="chat-root">

// //         {/* ══ SIDEBAR TOGGLE ARROW (always visible) ══════════════ */}
// //         <button
// //           className={`sidebar-toggle-btn ${sidebarOpen ? "sidebar-toggle-open" : ""}`}
// //           onClick={() => setSidebarOpen(p => !p)}
// //           title={sidebarOpen ? "Close menu" : "Open menu"}
// //         >
// //           {sidebarOpen ? "✕" : ">"}
// //         </button>

// //         {/* ══ SIDEBAR DRAWER ══════════════════════════════════════ */}
// //         <AnimatePresence>
// //           {sidebarOpen && (
// //             <>
// //               {/* Backdrop */}
// //               <motion.div
// //                 key="backdrop"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 className="sidebar-backdrop"
// //                 onClick={() => setSidebarOpen(false)}
// //               />

// //               {/* Sidebar panel */}
// //               <motion.aside
// //                 key="sidebar"
// //                 initial={{ x: -300, opacity: 0 }}
// //                 animate={{ x: 0, opacity: 1 }}
// //                 exit={{ x: -300, opacity: 0 }}
// //                 transition={{ type: "spring", stiffness: 320, damping: 32 }}
// //                 className="sidebar"
// //               >
// //                 <div className="sb-brand">
// //                   <div className="sb-logo">🌾</div>
// //                   <div>
// //                     <div className="sb-title">AgroAI</div>
// //                     <div className="sb-sub">Crop Intelligence</div>
// //                   </div>
// //                 </div>

// //                 <button className="sb-home-btn" onClick={() => navigate("/")}>
// //                   <IconHome /> Back to Home
// //                 </button>

// //                 <button className="sb-new-btn" onClick={newChat}>
// //                   <IconPlus /> New Conversation
// //                 </button>

// //                 <div className="sb-divider" />

// //                 {farmerName && (
// //                   <div className="sb-farmer">
// //                     <div className="sb-farmer-avatar">{farmerName[0].toUpperCase()}</div>
// //                     <div>
// //                       <div className="sb-farmer-name">{farmerName}</div>
// //                       <div className="sb-farmer-tag">Registered Farmer</div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div className="sb-section-label">Voice Language</div>
// //                 <div className="sb-lang-row">
// //                   {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([val, flag, lbl]) => (
// //                     <button key={val} className={`sb-lang-btn ${voiceLang === val ? "sb-lang-active" : ""}`} onClick={() => setVoiceLang(val)}>
// //                       {flag} {lbl}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 <div className="sb-section-label" style={{ marginTop: 24 }}>Market Status</div>
// //                 <div className="sb-status-card">
// //                   <div className="sb-status-row">
// //                     <span className="live-dot" />
// //                     <span className="sb-status-text">Live Mandi Data</span>
// //                   </div>
// //                   <div className="sb-status-row" style={{ marginTop: 6 }}>
// //                     <span className="sb-status-loc">📍 Haldwani · Uttarakhand</span>
// //                   </div>
// //                   <div className="sb-crop-pills">
// //                     {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => (
// //                       <span key={c} className="sb-crop-pill">{c}</span>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div className="sb-tip">
// //                   💡 <strong>Pro tip:</strong> Mention your crop name and quantity for hyper-accurate advice.
// //                 </div>

// //                 <div className="sb-footer">
// //                   <div className="sb-footer-text">Made for farmers of Uttarakhand</div>
// //                 </div>
// //               </motion.aside>
// //             </>
// //           )}
// //         </AnimatePresence>

// //         {/* ══ MAIN CONTENT ════════════════════════════════════════ */}
// //         <div className="chat-main">

// //           {/* ── COLLEGE BANNER (with gap on all sides like Pragyanam) ── */}
// //           <div className="banner-outer">
// //             <div className="college-banner">
// //               <div className="banner-shimmer" />
// //               <div className="banner-inner">
// //                 <div className="banner-logo-wrap">
// //                   <img src={collegeLogo} alt="College Logo" className="banner-logo" />
// //                   <div className="banner-logo-ring" />
// //                 </div>
// //                 <div className="banner-text-block">
// //                   <div className="banner-hindi-title">प्रौद्योगिकी महाविद्यालय</div>
// //                   <div className="banner-eng-title">College of Technology, Pantnagar</div>
// //                   <div className="banner-tagline">
// //                     G.B. Pant University of Agriculture &amp; Technology
// //                   </div>
// //                 </div>
// //                 <div className="banner-divider-v" />
// //                 <div className="banner-right">
// //                   <div className="banner-app-name">AgroAI</div>
// //                   <div className="banner-app-sub">Intelligent Crop Market Assistant</div>
// //                 </div>
// //               </div>
// //               <div className="banner-bottom-bar">
// //                 <span className="banner-quote">
// //                   "Empowering farmers of Uttarakhand with AI-driven market intelligence"
// //                 </span>
               
// //               </div>
// //             </div>
// //           </div>

// //           {/* ── CHAT INTERFACE CARD (the main card with gap on sides) ── */}
// //           <div className="chat-card-outer">
// //             <div className="chat-card">

// //               {/* Chat Header */}
// //               <header className="chat-header">
// //                 <div className="ch-left">
// //                   <div className="ch-avatar">🤖</div>
// //                   <div>
// //                     <div className="ch-title">AgroAI Assistant</div>
// //                     <div className="ch-status">
// //                       <span className="ch-dot" />
// //                       Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="ch-right">
// //                   <AnimatePresence>
// //                     {isSpeaking && (
// //                       <motion.div
// //                         initial={{ opacity: 0, scale: 0.8 }}
// //                         animate={{ opacity: 1, scale: 1 }}
// //                         exit={{ opacity: 0, scale: 0.8 }}
// //                         className="speaking-badge"
// //                       >
// //                         <span className="speaking-wave" />
// //                         <span className="speaking-wave" style={{ animationDelay: "0.15s" }} />
// //                         <span className="speaking-wave" style={{ animationDelay: "0.3s" }} />
// //                         Speaking
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                   <button className="ch-home-mobile" onClick={() => navigate("/")} title="Go to Home">
// //                     <IconHome />
// //                   </button>
// //                 </div>
// //               </header>

// //               {/* Messages */}
// //               <div className="chat-messages">

// //                 {/* ── WELCOME CARD (Pragyanam-style, shown when only init message) ── */}
// //                 {showSuggestions && messages.length === 1 && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.4 }}
// //                     className="welcome-card"
// //                   >
// //                     <div className="wc-namaste">🙏 AgroAI में आपका स्वागत है।</div>
// //                     <div className="wc-subtitle-hi">फसल बाजार, मूल्य और खरीदार की जानकारी की चेतनमयी दुनिया</div>
// //                     <p className="wc-desc">
// //                      नमस्ते! मैं <strong>AgroAI</strong> हूँ — प्रौद्योगिकी महाविद्यालय, पंतनगर का
// //                       AI-powered फसल बाजार सहायक. आप मुझसे निम्नलिखित विषयों पर चर्चा कर सकते हैं:
// //                     </p>
// //                     <div className="wc-crops-grid">
// //                       {CROP_TOPICS.map((t, i) => (
// //                         <button
// //                           key={i}
// //                           className="wc-crop-btn"
// //                           onClick={() => sendMessage(`Tell me about ${t.label} prices and market in Haldwani`)}
// //                         >
// //                           <span className="wc-crop-icon">{t.icon}</span>
// //                           <span className="wc-crop-label">{t.label}</span>
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 )}

// //                 <AnimatePresence initial={false}>
// //                   {messages.map((msg, i) => (
// //                     <motion.div
// //                       key={msg.id || i}
// //                       initial={{ opacity: 0, y: 16, scale: 0.97 }}
// //                       animate={{ opacity: 1, y: 0, scale: 1 }}
// //                       transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
// //                       className={`msg-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
// //                     >
// //                       {msg.sender === "bot" && (
// //                         <div className="bot-avatar-sm"><span>🌾</span></div>
// //                       )}

// //                       <div className={`bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
// //                         {msg.sender === "bot"
// //                           ? <BotMessage text={msg.text} />
// //                           : <p className="user-text">{msg.text}</p>
// //                         }

// //                         {msg.meta && (
// //                           <div className="meta-row">
// //                             {msg.meta.crop && <span className="meta-chip">🌱 {msg.meta.crop}</span>}
// //                             {msg.meta.location && <span className="meta-chip">📍 {msg.meta.location}</span>}
// //                             {msg.meta.quantity > 0 && <span className="meta-chip">⚖️ {msg.meta.quantity}kg</span>}
// //                             <span className="meta-chip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
// //                           </div>
// //                         )}

// //                         <div className="bubble-foot">
// //                           <span className="bubble-time">{msg.time}</span>
// //                           {msg.sender === "bot" && (
// //                             <div className="bubble-actions">
// //                               <button className="act-btn" onClick={() => speakText(msg.text)} title="Listen">
// //                                 <IconSpeak />
// //                               </button>
// //                               <button className="act-btn" onClick={() => copyText(msg.text, msg.id)} title="Copy">
// //                                 {copiedId === msg.id ? "✓" : <IconCopy />}
// //                               </button>
// //                             </div>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </AnimatePresence>

// //                 {loading && <TypingIndicator />}
// //                 <div ref={bottomRef} />
// //               </div>


// //               {/* Input Area */}
// //               <div className="input-area">
// //                 {isListening && (
// //                   <div className="listening-bar">
// //                     <div className="listening-waves">
// //                       {[...Array(5)].map((_, i) => (
// //                         <div key={i} className="lw-bar" style={{ animationDelay: `${i * 0.1}s` }} />
// //                       ))}
// //                     </div>
// //                     <span className="listening-text">{transcript || "Listening..."}</span>
// //                   </div>
// //                 )}
// //                 <div className="input-row">
// //                   <textarea
// //                     ref={inputRef}
// //                     className="chat-input"
// //                     value={input}
// //                     onChange={e => { setInput(e.target.value); setCharCount(e.target.value.length); }}
// //                     onKeyDown={handleKey}
// //                     placeholder="फसलों की कीमतों और खरीदारों के बारे में पूछें.."
// //                     rows={1}
// //                     maxLength={500}
// //                   />
// //                   {voiceSupported && (
// //                     <button className={`mic-btn ${isListening ? "mic-active" : ""}`} onClick={toggleVoice} title="Voice input">
// //                       {isListening ? <IconMicOff /> : <IconMic />}
// //                     </button>
// //                   )}
// //                   <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading}>
// //                     <IconSend />
// //                   </button>
// //                 </div>
// //                 <div className="input-footer-bar">
// //                   <span className="input-footer-txt">AgroAI · Live mandi data + LLaMA AI · Prices are indicative</span>
// //                 </div>
// //               </div>

// //             </div>{/* /chat-card */}
// //           </div>{/* /chat-card-outer */}

// //         </div>{/* /chat-main */}
// //       </div>{/* /chat-root */}
// //     </>
// //   );
// // }

// // /* ═══════════════════════════════════════════════════════════════ */
// // /*  CSS                                                             */
// // /* ═══════════════════════════════════════════════════════════════ */
// // const CSS = `
// //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //   body {
// //     font-family: 'Segoe UI', system-ui, sans-serif;
// //     background: #1a1f16;
// //     color: #e8f0e4;
// //     min-height: 100vh;
// //   }

// //   /* ── ROOT LAYOUT ─────────────────────────────────────────── */
// //   .chat-root {
// //     position: relative;
// //     min-height: 100vh;
// //     background: linear-gradient(135deg, #1a1f16 0%, #0f1a0c 50%, #1a2010 100%);
// //   }

// //   /* ── SIDEBAR TOGGLE BUTTON (the green > arrow) ──────────── */
// //   .sidebar-toggle-btn {
// //     position: fixed;
// //     top: 50%;
// //     left: 0;
// //     transform: translateY(-50%);
// //     z-index: 200;
// //     background: #2d7a22;
// //     color: #fff;
// //     border: none;
// //     border-radius: 0 8px 8px 0;
// //     width: 32px;
// //     height: 56px;
// //     font-size: 18px;
// //     font-weight: bold;
// //     cursor: pointer;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     box-shadow: 2px 0 12px rgba(0,0,0,0.4);
// //     transition: background 0.2s, width 0.2s;
// //     letter-spacing: 0;
// //   }
// //   .sidebar-toggle-btn:hover {
// //     background: #3a9e2e;
// //     width: 38px;
// //   }
// //   .sidebar-toggle-btn.sidebar-toggle-open {
// //     left: 280px;
// //     border-radius: 0 8px 8px 0;
// //     background: #c0392b;
// //     font-size: 14px;
// //   }

// //   /* ── SIDEBAR BACKDROP ────────────────────────────────────── */
// //   .sidebar-backdrop {
// //     position: fixed;
// //     inset: 0;
// //     background: rgba(0,0,0,0.45);
// //     z-index: 149;
// //   }

// //   /* ── SIDEBAR ─────────────────────────────────────────────── */
// //   .sidebar {
// //     position: fixed;
// //     top: 0;
// //     left: 0;
// //     width: 280px;
// //     height: 100vh;
// //     background: #141a10;
// //     border-right: 1px solid #2a3a24;
// //     display: flex;
// //     flex-direction: column;
// //     gap: 0;
// //     padding: 24px 16px 16px;
// //     z-index: 150;
// //     overflow-y: auto;
// //   }

// //   .sb-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #2a3a24; }
// //   .sb-logo { font-size: 28px; }
// //   .sb-title { font-size: 18px; font-weight: 700; color: #7ecb5a; }
// //   .sb-sub { font-size: 11px; color: #6a8a5e; text-transform: uppercase; letter-spacing: 0.8px; }

// //   .sb-home-btn {
// //     display: flex; align-items: center; gap: 8px;
// //     background: transparent; border: 1px solid #2a3a24; color: #a8c89a;
// //     padding: 9px 14px; border-radius: 8px; cursor: pointer; font-size: 13.5px;
// //     transition: all 0.18s; margin-bottom: 10px; width: 100%;
// //   }
// //   .sb-home-btn:hover { background: #1e2e18; color: #7ecb5a; border-color: #3a5a2e; }

// //   .sb-new-btn {
// //     display: flex; align-items: center; gap: 8px; justify-content: center;
// //     background: #2d7a22; border: none; color: #fff;
// //     padding: 10px 14px; border-radius: 8px; cursor: pointer; font-size: 13.5px; font-weight: 600;
// //     transition: all 0.18s; width: 100%;
// //   }
// //   .sb-new-btn:hover { background: #3a9e2e; }

// //   .sb-divider { height: 1px; background: #2a3a24; margin: 16px 0; }
// //   .sb-section-label { font-size: 10px; color: #5a7a4e; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px; }

// //   .sb-farmer { display: flex; align-items: center; gap: 10px; background: #1e2e18; border-radius: 10px; padding: 10px 12px; margin-bottom: 16px; }
// //   .sb-farmer-avatar { width: 36px; height: 36px; border-radius: 50%; background: #2d7a22; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #fff; }
// //   .sb-farmer-name { font-size: 13.5px; font-weight: 600; color: #c8e8b4; }
// //   .sb-farmer-tag { font-size: 10.5px; color: #6a8a5e; }

// //   .sb-lang-row { display: flex; gap: 8px; }
// //   .sb-lang-btn { flex: 1; padding: 8px; border-radius: 7px; border: 1px solid #2a3a24; background: transparent; color: #a8c89a; font-size: 12.5px; cursor: pointer; transition: all 0.18s; }
// //   .sb-lang-btn:hover { background: #1e2e18; }
// //   .sb-lang-active { background: #1e3a14 !important; border-color: #2d7a22 !important; color: #7ecb5a !important; font-weight: 600; }

// //   .sb-status-card { background: #1a2a14; border: 1px solid #2a3a24; border-radius: 10px; padding: 12px 14px; }
// //   .sb-status-row { display: flex; align-items: center; gap: 7px; }
// //   .sb-status-text { font-size: 12.5px; font-weight: 600; color: #7ecb5a; }
// //   .sb-status-loc { font-size: 12px; color: #8aaa7e; }
// //   .sb-crop-pills { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
// //   .sb-crop-pill { background: #1e3a14; border: 1px solid #3a5a2e; border-radius: 20px; padding: 2px 8px; font-size: 11px; color: #a8c89a; }
// //   .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; animation: pulse 2s infinite; }

// //   .sb-tip { background: #1a2a14; border-left: 3px solid #2d7a22; border-radius: 0 8px 8px 0; padding: 10px 12px; font-size: 12px; color: #8aaa7e; margin-top: 16px; line-height: 1.5; }
// //   .sb-footer { margin-top: auto; padding-top: 20px; }
// //   .sb-footer-text { font-size: 11px; color: #4a6a3e; text-align: center; }

// //   /* ── MAIN CONTENT ─────────────────────────────────────────── */
// //   .chat-main {
// //     min-height: 100vh;
// //     display: flex;
// //     flex-direction: column;
// //     padding-left: 40px; /* space for toggle button */
// //   }

// //   /* ── BANNER OUTER (provides gap on all sides) ─────────────── */
// //   .banner-outer {
// //     padding: 20px 24px 0 24px;
// //   }

// //   /* ── COLLEGE BANNER ─────────────────────────────────────────── */
// //   .college-banner {
// //     position: relative; overflow: hidden;
// //     background: linear-gradient(135deg, #8b1a1a 0%, #6b1414 40%, #4a1010 100%);
// //     border-radius: 14px;
// //     box-shadow: 0 4px 24px rgba(0,0,0,0.4);
// //     border: 1px solid rgba(255,255,255,0.08);
// //   }
// //   .banner-shimmer {
// //     position: absolute; inset: 0;
// //     background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%);
// //     animation: shimmer 4s infinite;
// //   }
// //   @keyframes shimmer { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }

// //   .banner-inner {
// //     position: relative; display: flex; align-items: center;
// //     gap: 20px; padding: 18px 24px;
// //   }
// //   .banner-logo-wrap { position: relative; flex-shrink: 0; }
// //   .banner-logo { width: 68px; height: 68px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.2); }
// //   .banner-logo-ring { position: absolute; inset: -3px; border-radius: 50%; border: 1.5px solid rgba(255,220,100,0.3); animation: spin 12s linear infinite; }
// //   @keyframes spin { to { transform: rotate(360deg); } }

// //   .banner-text-block { flex: 1; min-width: 0; }
// //   .banner-hindi-title { font-size: 18px; font-weight: 700; color: #fff; line-height: 1.3; }
// //   .banner-eng-title { font-size: 13px; color: rgba(255,200,150,0.9); margin-top: 2px; font-style: italic; }
// //   .banner-tagline { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 3px; }

// //   .banner-divider-v { width: 1px; height: 56px; background: rgba(255,255,255,0.15); flex-shrink: 0; }

// //   .banner-right { flex-shrink: 0; text-align: right; }
// //   .banner-app-name { font-size: 22px; font-weight: 800; color: #ffd700; letter-spacing: -0.5px; font-style: italic; }
// //   .banner-app-sub { font-size: 10.5px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px; }
// //   .banner-pills { display: flex; gap: 5px; justify-content: flex-end; flex-wrap: wrap; }
// //   .banner-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 2px 8px; font-size: 10.5px; color: rgba(255,255,255,0.8); }

// //   .banner-bottom-bar {
// //     position: relative; display: flex; justify-content: space-between; align-items: center;
// //     padding: 8px 24px; background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.07);
// //     flex-wrap: wrap; gap: 6px;
// //   }
// //   .banner-quote { font-size: 11.5px; font-style: italic; color: rgba(255,255,200,0.7); }
// //   .banner-live-badge { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #4ade80; font-weight: 600; }
// //   .live-dot-sm { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; animation: pulse 2s infinite; }
// //   @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

// //   /* ── CHAT CARD OUTER (gap on sides and bottom) ─────────────── */
// //   .chat-card-outer {
// //     padding: 16px 24px 20px 24px;
// //     flex: 1;
// //     display: flex;
// //     flex-direction: column;
// //   }

// //   /* ── CHAT CARD ─────────────────────────────────────────────── */
// //   .chat-card {
// //     flex: 1;
// //     display: flex;
// //     flex-direction: column;
// //     background: #141a10;
// //     border: 1px solid #2a3a24;
// //     border-radius: 14px;
// //     overflow: hidden;
// //     min-height: calc(100vh - 220px);
// //     box-shadow: 0 4px 24px rgba(0,0,0,0.3);
// //   }

// //   /* ── CHAT HEADER ────────────────────────────────────────────── */
// //   .chat-header {
// //     display: flex; align-items: center; justify-content: space-between;
// //     padding: 14px 20px; background: #0f1a0c;
// //     border-bottom: 1px solid #2a3a24; flex-shrink: 0;
// //   }
// //   .ch-left { display: flex; align-items: center; gap: 12px; }
// //   .ch-avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, #2d7a22, #1a4a12); display: flex; align-items: center; justify-content: center; font-size: 18px; border: 1.5px solid #3a5a2e; }
// //   .ch-title { font-size: 15px; font-weight: 700; color: #c8e8b4; }
// //   .ch-status { display: flex; align-items: center; gap: 5px; font-size: 11.5px; color: #7aaa60; }
// //   .ch-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }
// //   .ch-right { display: flex; align-items: center; gap: 10px; }
// //   .ch-home-mobile { background: transparent; border: 1px solid #2a3a24; color: #8aaa7e; padding: 7px 9px; border-radius: 8px; cursor: pointer; transition: all 0.18s; display: flex; align-items: center; }
// //   .ch-home-mobile:hover { background: #1e2e18; color: #7ecb5a; }

// //   .speaking-badge { display: flex; align-items: center; gap: 5px; background: #1e3a14; border: 1px solid #2d7a22; border-radius: 20px; padding: 4px 10px; font-size: 11.5px; color: #7ecb5a; }
// //   .speaking-wave { display: inline-block; width: 3px; height: 12px; background: #4ade80; border-radius: 2px; animation: wave 0.6s ease-in-out infinite alternate; }
// //   @keyframes wave { to { height: 4px; } }

// //   /* ── MESSAGES ───────────────────────────────────────────────── */
// //   .chat-messages {
// //     flex: 1; overflow-y: auto; padding: 20px 20px 10px;
// //     display: flex; flex-direction: column; gap: 16px;
// //     scrollbar-width: thin; scrollbar-color: #2a3a24 transparent;
// //   }

// //   /* ── WELCOME CARD (Pragyanam-style) ──────────────────────── */
// //   .welcome-card {
// //     background: #1a2a14;
// //     border: 1px solid #2a3a24;
// //     border-radius: 12px;
// //     padding: 24px;
// //     margin-bottom: 8px;
// //   }
// //   .wc-namaste {
// //     font-size: 22px;
// //     font-weight: 700;
// //     color: #c8e8b4;
// //     margin-bottom: 4px;
// //     font-family: 'Segoe UI', sans-serif;
// //   }
// //   .wc-subtitle-hi {
// //     font-size: 13.5px;
// //     color: #8aaa7e;
// //     margin-bottom: 12px;
// //     font-style: italic;
// //   }
// //   .wc-desc {
// //     font-size: 13.5px;
// //     color: #a8c89a;
// //     line-height: 1.65;
// //     margin-bottom: 18px;
// //   }
// //   .wc-desc strong { color: #7ecb5a; }

// //   /* ── CROP TOPICS GRID (like Pragyanam's knowledge grid) ─── */
// //   .wc-crops-grid {
// //     display: grid;
// //     grid-template-columns: repeat(2, 1fr);
// //     gap: 8px;
// //   }
// //   .wc-crop-btn {
// //     display: flex;
// //     align-items: center;
// //     gap: 10px;
// //     background: #0f1a0c;
// //     border: 1px solid #2a3a24;
// //     border-radius: 8px;
// //     padding: 10px 13px;
// //     cursor: pointer;
// //     transition: all 0.18s;
// //     text-align: left;
// //     color: #a8c89a;
// //   }
// //   .wc-crop-btn:hover {
// //     background: #1e3a14;
// //     border-color: #3a5a2e;
// //     color: #7ecb5a;
// //     transform: translateY(-1px);
// //     box-shadow: 0 3px 10px rgba(0,0,0,0.3);
// //   }
// //   .wc-crop-icon { font-size: 18px; flex-shrink: 0; }
// //   .wc-crop-label { font-size: 12.5px; font-weight: 500; }

// //   /* ── MESSAGE ROWS ────────────────────────────────────────── */
// //   .msg-row { display: flex; align-items: flex-end; gap: 8px; }
// //   .user-row { flex-direction: row-reverse; }
// //   .bot-row { flex-direction: row; }

// //   .bot-avatar-sm { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #2d7a22, #1a4a12); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; border: 1.5px solid #3a5a2e; }

// //   .bubble { max-width: 72%; border-radius: 14px; padding: 12px 15px; position: relative; }
// //   .user-bubble { background: linear-gradient(135deg, #2d7a22, #1e5a18); border-bottom-right-radius: 4px; }
// //   .bot-bubble { background: #1a2a14; border: 1px solid #2a3a24; border-bottom-left-radius: 4px; }

// //   .user-text { font-size: 14px; color: #e8f5e0; line-height: 1.55; }
// //   .bot-content { font-size: 13.5px; line-height: 1.6; color: #c8e8b4; }
// //   .msg-text { margin-bottom: 4px; }
// //   .msg-spacer { height: 6px; }
// //   .msg-divider { height: 1px; background: #2a3a24; margin: 8px 0; }
// //   .msg-section { display: flex; align-items: center; gap: 6px; font-weight: 700; color: #7ecb5a; font-size: 13px; margin: 8px 0 2px; }
// //   .section-icon { font-size: 15px; }
// //   .msg-bullet { display: flex; align-items: flex-start; gap: 7px; margin: 3px 0; font-size: 13px; color: #a8c89a; }
// //   .bullet-dot { width: 5px; height: 5px; border-radius: 50%; background: #4a8a3e; flex-shrink: 0; margin-top: 7px; }

// //   .meta-row { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
// //   .meta-chip { background: rgba(45,122,34,0.2); border: 1px solid rgba(45,122,34,0.35); border-radius: 20px; padding: 2px 7px; font-size: 10.5px; color: #7ecb5a; }

// //   .bubble-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 7px; gap: 8px; }
// //   .bubble-time { font-size: 10.5px; color: #5a7a4e; }
// //   .bubble-actions { display: flex; gap: 4px; }
// //   .act-btn { background: transparent; border: 1px solid #2a3a24; color: #6a8a5e; width: 24px; height: 24px; border-radius: 5px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 11px; transition: all 0.15s; }
// //   .act-btn:hover { background: #1e3a14; color: #7ecb5a; border-color: #3a5a2e; }

// //   /* ── TYPING ──────────────────────────────────────────────── */
// //   .typing-wrap { display: flex; align-items: flex-end; gap: 8px; }
// //   .typing-bubble { background: #1a2a14; border: 1px solid #2a3a24; border-radius: 14px; border-bottom-left-radius: 4px; padding: 12px 16px; display: flex; flex-direction: column; gap: 5px; min-width: 80px; }
// //   .typing-bar { height: 5px; border-radius: 3px; background: linear-gradient(90deg, #2d7a22, #4ade80, #2d7a22); background-size: 200% 100%; animation: shimmerBar 1.4s ease-in-out infinite; width: 75%; }
// //   @keyframes shimmerBar { 0%,100% { background-position: 0% 50%; opacity: 0.5; } 50% { background-position: 100% 50%; opacity: 1; } }

// //   /* ── QUICK SUGGESTIONS ──────────────────────────────────── */
// //   .quick-suggestions { padding: 6px 20px 10px; border-top: 1px solid #2a3a24; background: #0f1a0c; }
// //   .qs-label { font-size: 9.5px; color: #5a7a4e; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 7px; }
// //   .qs-row { display: flex; flex-wrap: wrap; gap: 6px; }
// //   .qs-btn { background: #1a2a14; border: 1px solid #2a3a24; border-radius: 20px; padding: 5px 12px; font-size: 12px; color: #8aaa7e; cursor: pointer; transition: all 0.18s; white-space: nowrap; }
// //   .qs-btn:hover { background: #1e3a14; color: #7ecb5a; border-color: #3a5a2e; }

// //   /* ── INPUT AREA ─────────────────────────────────────────── */
// //   .input-area { border-top: 1px solid #2a3a24; background: #0f1a0c; flex-shrink: 0; padding: 12px 16px 10px; }
// //   .listening-bar { display: flex; align-items: center; gap: 10px; background: #1a2a14; border: 1px solid #2d7a22; border-radius: 8px; padding: 8px 12px; margin-bottom: 8px; }
// //   .listening-waves { display: flex; gap: 3px; align-items: center; }
// //   .lw-bar { width: 3px; height: 16px; background: #4ade80; border-radius: 2px; animation: lvWave 0.6s ease-in-out infinite alternate; }
// //   @keyframes lvWave { to { height: 5px; } }
// //   .listening-text { font-size: 12.5px; color: #7ecb5a; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

// //   .input-row { display: flex; align-items: flex-end; gap: 8px; }
// //   .chat-input {
// //     flex: 1; background: #1a2a14; border: 1px solid #2a3a24; border-radius: 10px;
// //     color: #c8e8b4; padding: 11px 14px; font-size: 14px; resize: none;
// //     outline: none; line-height: 1.5; max-height: 120px; overflow-y: auto;
// //     transition: border-color 0.18s;
// //     font-family: inherit;
// //   }
// //   .chat-input:focus { border-color: #3a6a2e; }
// //   .chat-input::placeholder { color: #4a6a3e; }

// //   .mic-btn {
// //     width: 42px; height: 42px; border-radius: 10px; border: 1px solid #2a3a24;
// //     background: #1a2a14; color: #8aaa7e; cursor: pointer; display: flex; align-items: center; justify-content: center;
// //     transition: all 0.18s; flex-shrink: 0;
// //   }
// //   .mic-btn:hover { background: #1e3a14; color: #7ecb5a; }
// //   .mic-active { background: #3a1a1a !important; border-color: #c0392b !important; color: #e74c3c !important; animation: micPulse 1s ease-in-out infinite; }
// //   @keyframes micPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(192,57,43,0.4); } 50% { box-shadow: 0 0 0 8px rgba(192,57,43,0); } }

// //   .send-btn {
// //     width: 42px; height: 42px; border-radius: 10px; border: none;
// //     background: linear-gradient(135deg, #2d7a22, #1e5a18); color: #fff;
// //     cursor: pointer; display: flex; align-items: center; justify-content: center;
// //     transition: all 0.18s; flex-shrink: 0;
// //   }
// //   .send-btn:hover:not(:disabled) { background: linear-gradient(135deg, #3a9e2e, #2d7a22); transform: scale(1.04); }
// //   .send-btn:disabled { opacity: 0.35; cursor: not-allowed; }

// //   .input-footer-bar { margin-top: 7px; text-align: center; }
// //   .input-footer-txt { font-size: 10.5px; color: #3a5a2e; }

// //   /* ── SCROLLBAR ───────────────────────────────────────────── */
// //   ::-webkit-scrollbar { width: 5px; }
// //   ::-webkit-scrollbar-track { background: transparent; }
// //   ::-webkit-scrollbar-thumb { background: #2a3a24; border-radius: 3px; }

// //   /* ── RESPONSIVE ─────────────────────────────────────────── */
// //   @media (max-width: 600px) {
// //     .banner-outer { padding: 12px 12px 0; }
// //     .chat-card-outer { padding: 10px 12px 14px; }
// //     .banner-inner { flex-wrap: wrap; gap: 12px; padding: 14px 16px; }
// //     .banner-right { width: 100%; text-align: left; }
// //     .banner-app-name { font-size: 18px; }
// //     .wc-crops-grid { grid-template-columns: repeat(2, 1fr); }
// //     .bubble { max-width: 88%; }
// //     .chat-main { padding-left: 36px; }
// //     .sidebar-toggle-btn.sidebar-toggle-open { left: 260px; }
// //     .sidebar { width: 260px; }
// //   }
// // `;




// // import { useState, useRef, useEffect, useCallback } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import collegeLogo from "../assets/cot.jpg";

// // const CROP_TOPICS = [
// //   { icon: "🍅", label: "टमाटर (Tomato)" },
// //   { icon: "🧅", label: "प्याज (Onion)" },
// //   { icon: "🥔", label: "आलू (Potato)" },
// //   { icon: "🥦", label: "फूलगोभी (Cauliflower)" },
// //   { icon: "🥕", label: "गाजर (Carrot)" },
// // ];

// // function BotMessage({ text }) {
// //   const lines = text.split("\n");
// //   return (
// //     <div className="bot-content">
// //       {lines.map((line, i) => {
// //         const trimmed = line.trim();
// //         if (!trimmed) return <div key={i} style={{ height: 6 }} />;
// //         if (/^━+$/.test(trimmed)) return <div key={i} className="msg-divider" />;
// //         const sectionMatch = trimmed.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
// //         if (sectionMatch) return (
// //           <div key={i} className="msg-section">
// //             <span className="section-icon">{sectionMatch[1]}</span>
// //             <span className="section-title">{sectionMatch[2]}</span>
// //           </div>
// //         );
// //         if (trimmed.startsWith("•")) return (
// //           <div key={i} className="msg-bullet">
// //             <span className="bullet-dot" />
// //             <span>{trimmed.slice(1).trim()}</span>
// //           </div>
// //         );
// //         return <p key={i} className="msg-text">{trimmed}</p>;
// //       })}
// //     </div>
// //   );
// // }

// // function TypingIndicator() {
// //   return (
// //     <div className="typing-wrap">
// //       <div className="bot-av">🌾</div>
// //       <div className="typing-bubble">
// //         <div className="typing-bar" />
// //         <div className="typing-bar" style={{ animationDelay: "0.2s", width: "55%" }} />
// //         <div className="typing-bar" style={{ animationDelay: "0.35s", width: "35%" }} />
// //       </div>
// //     </div>
// //   );
// // }

// // const IconSend = () => (
// //   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
// //     <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
// //   </svg>
// // );
// // const IconMic = () => (
// //   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
// //     <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/>
// //     <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
// //     <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconMicOff = () => (
// //   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
// //     <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //     <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconHome = () => (
// //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
// //     <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //   </svg>
// // );
// // const IconPlus = () => (
// //   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
// //     <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconSpeak = () => (
// //   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
// //     <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/>
// //     <path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );
// // const IconCopy = () => (
// //   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
// //     <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
// //     <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/>
// //   </svg>
// // );

// // export default function Chatbot() {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("token");
// //   const farmerName = localStorage.getItem("farmerName") || null;

// //   function now() {
// //     return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// //   }

// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [chatId, setChatId] = useState(null);
// //   const [isListening, setIsListening] = useState(false);
// //   const [voiceSupported, setVoiceSupported] = useState(false);
// //   const [voiceLang, setVoiceLang] = useState("hi-IN");
// //   const [transcript, setTranscript] = useState("");
// //   const [isSpeaking, setIsSpeaking] = useState(false);
// //   const [showWelcome, setShowWelcome] = useState(true);
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [copiedId, setCopiedId] = useState(null);

// //   const bottomRef = useRef(null);
// //   const inputRef = useRef(null);
// //   const recognitionRef = useRef(null);

// //   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
// //   useEffect(() => {
// //     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (SR) setVoiceSupported(true);
// //   }, []);

// //   useEffect(() => {
// //     if (!token) return;
// //     (async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
// //         const data = await res.json();
// //         if (data.length > 0) {
// //           const msgs = data[0].messages || [];
// //           setMessages(msgs);
// //           setChatId(data[0]._id);
// //           if (msgs.length > 0) setShowWelcome(false);
// //         } else {
// //           const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } });
// //           const chat = await cr.json();
// //           setChatId(chat._id);
// //         }
// //       } catch {}
// //     })();
// //   }, []);

// //   const startListening = useCallback(() => {
// //     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SR) return;
// //     const r = new SR();
// //     r.lang = voiceLang; r.interimResults = true;
// //     r.onstart = () => setIsListening(true);
// //     r.onresult = (e) => {
// //       const t = Array.from(e.results).map(x => x[0].transcript).join("");
// //       setTranscript(t); setInput(t);
// //     };
// //     r.onend = () => { setIsListening(false); setTranscript(""); };
// //     r.onerror = () => { setIsListening(false); setTranscript(""); };
// //     recognitionRef.current = r; r.start();
// //   }, [voiceLang]);

// //   const stopListening = useCallback(() => { recognitionRef.current?.stop(); setIsListening(false); }, []);

// //   const toggleVoice = () => {
// //     if (isListening) { stopListening(); if (input.trim()) sendMessage(input); }
// //     else startListening();
// //   };

// //   const speakText = (text) => {
// //     if (!window.speechSynthesis) return;
// //     window.speechSynthesis.cancel();
// //     const clean = text.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". ");
// //     const u = new SpeechSynthesisUtterance(clean);
// //     u.lang = voiceLang; u.rate = 0.92;
// //     u.onstart = () => setIsSpeaking(true);
// //     u.onend = () => setIsSpeaking(false);
// //     window.speechSynthesis.speak(u);
// //   };

// //   const copyText = (text, id) => {
// //     navigator.clipboard.writeText(text).then(() => {
// //       setCopiedId(id); setTimeout(() => setCopiedId(null), 2000);
// //     });
// //   };

// //   const newChat = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } });
// //       const chat = await res.json();
// //       setChatId(chat._id);
// //     } catch {}
// //     setMessages([]); setInput(""); setShowWelcome(true); setSidebarOpen(false);
// //   };

// //   const saveMessage = async (msg) => {
// //     if (!chatId || !token) return;
// //     await fetch("http://localhost:5000/api/chats/message", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json", Authorization: token },
// //       body: JSON.stringify({ chatId, message: msg }),
// //     }).catch(() => {});
// //   };

// //   const sendMessage = async (text) => {
// //     const msg = (text || input).trim();
// //     if (!msg || loading) return;
// //     setInput(""); setShowWelcome(false);
// //     const userMsg = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
// //     await saveMessage(userMsg);
// //     setMessages(p => [...p, userMsg]);
// //     setLoading(true);
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: msg, farmerName }),
// //       });
// //       const data = await res.json();
// //       if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
// //       const botMsg = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
// //       await saveMessage(botMsg);
// //       setMessages(p => [...p, botMsg]);
// //     } catch {
// //       setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_err" }]);
// //     } finally {
// //       setLoading(false); setTimeout(() => inputRef.current?.focus(), 100);
// //     }
// //   };

// //   const handleKey = (e) => {
// //     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
// //   };

// //   return (
// //     <>
// //       <style>{CSS}</style>

// //       <div className="bg-blob bg-blob-1" />
// //       <div className="bg-blob bg-blob-2" />
// //       <div className="bg-blob bg-blob-3" />

// //       <div className="chat-root">

// //         {/* Toggle button — top left corner */}
// //         <button
// //           className={`sidebar-toggle-btn ${sidebarOpen ? "open" : ""}`}
// //           onClick={() => setSidebarOpen(p => !p)}
// //           title={sidebarOpen ? "Close" : "Menu"}
// //         >
// //           {sidebarOpen ? "✕" : "☰"}
// //         </button>

// //         {/* Sidebar */}
// //         <AnimatePresence>
// //           {sidebarOpen && (
// //             <>
// //               <motion.div key="bd"
// //                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //                 className="sidebar-backdrop" onClick={() => setSidebarOpen(false)}
// //               />
// //               <motion.aside key="sb"
// //                 initial={{ x: -290, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -290, opacity: 0 }}
// //                 transition={{ type: "spring", stiffness: 320, damping: 32 }}
// //                 className="sidebar"
// //               >
// //                 <div className="sb-brand">
// //                   <div className="sb-logo-icon">🌾</div>
// //                   <div>
// //                     <div className="sb-title">AgroAI</div>
// //                     <div className="sb-sub">Crop Intelligence</div>
// //                   </div>
// //                 </div>

// //                 {farmerName && (
// //                   <div className="sb-farmer">
// //                     <div className="sb-farmer-av">{farmerName[0].toUpperCase()}</div>
// //                     <div>
// //                       <div className="sb-farmer-name">{farmerName}</div>
// //                       <div className="sb-farmer-tag">Registered Farmer</div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 <button className="sb-btn sb-home" onClick={() => navigate("/")}>
// //                   <IconHome /> Back to Home
// //                 </button>
// //                 <button className="sb-btn sb-new" onClick={newChat}>
// //                   <IconPlus /> New Conversation
// //                 </button>

// //                 <div className="sb-divider" />

// //                 <div className="sb-label">Voice Language</div>
// //                 <div className="sb-lang-row">
// //                   {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([val, flag, lbl]) => (
// //                     <button key={val} className={`sb-lang-btn ${voiceLang === val ? "active" : ""}`} onClick={() => setVoiceLang(val)}>
// //                       {flag} {lbl}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 <div className="sb-label" style={{ marginTop: 20 }}>Market Status</div>
// //                 <div className="sb-status-card">
// //                   <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
// //                     <span className="live-dot" />
// //                     <span style={{ fontSize: 12.5, fontWeight: 600, color: "#16a34a" }}>Live Mandi Data</span>
// //                   </div>
// //                   <div style={{ fontSize: 12, color: "#6b7280", marginTop: 5 }}>📍 Haldwani · Uttarakhand</div>
// //                   <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
// //                     {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => (
// //                       <span key={c} className="sb-pill">{c}</span>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div className="sb-tip">
// //                   💡 <strong>Pro tip:</strong> Apni fasal ka naam aur matra batayein for best advice.
// //                 </div>

// //                 <div className="sb-footer-txt">Made for farmers of Uttarakhand 🌾</div>
// //               </motion.aside>
// //             </>
// //           )}
// //         </AnimatePresence>

// //         {/* Main content */}
// //         <div className="chat-main">

// //           {/* College Banner */}
// //           <div className="college-banner">
// //             <div className="banner-shimmer" />
// //             <div className="banner-inner">
// //               <div style={{ position: "relative", flexShrink: 0 }}>
// //                 <img src={collegeLogo} alt="logo" className="banner-logo" />
// //                 <div className="banner-logo-ring" />
// //               </div>
// //               <div style={{ flex: 1, minWidth: 0 }}>
// //                 <div className="banner-h1">प्रौद्योगिकी महाविद्यालय</div>
// //                 <div className="banner-h2">College of Technology, Pantnagar</div>
// //                 <div className="banner-h3">G.B. Pant University of Agriculture &amp; Technology</div>
// //               </div>
// //               <div className="banner-divider-v" />
// //               <div style={{ textAlign: "right", flexShrink: 0 }}>
// //                 <div className="banner-app-name">AgroAI</div>
// //                 <div className="banner-app-sub">Intelligent Crop Market Assistant</div>
// //                 <div className="banner-pills-row">
// //                   <span className="banner-pill">🌾 Live Mandi</span>
// //                   <span className="banner-pill">🤖 AI Powered</span>
// //                   <span className="banner-pill">🇮🇳 Uttarakhand</span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="banner-foot">
// //               <span className="banner-quote">"Empowering farmers of Uttarakhand with AI-driven market intelligence"</span>
// //               <span className="banner-live"><span className="live-dot-sm" /> Live Data Active</span>
// //             </div>
// //           </div>

// //           {/* Chat card */}
// //           <div className="chat-card-wrap">
// //             <div className="chat-card">

// //               <header className="chat-header">
// //                 <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// //                   <div className="ch-avatar">🤖</div>
// //                   <div>
// //                     <div className="ch-title">AgroAI Assistant</div>
// //                     <div className="ch-status">
// //                       <span className="ch-dot" /> Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// //                   <AnimatePresence>
// //                     {isSpeaking && (
// //                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="speaking-badge">
// //                         <span className="sw" /><span className="sw" style={{ animationDelay: "0.15s" }} /><span className="sw" style={{ animationDelay: "0.3s" }} />
// //                         Speaking
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                   <button className="ch-home-btn" onClick={() => navigate("/")} title="Home">
// //                     <IconHome />
// //                   </button>
// //                 </div>
// //               </header>

// //               <div className="chat-messages">
// //                 {showWelcome && messages.length === 0 && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 16 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.4 }}
// //                     className="welcome-card"
// //                   >
// //                     <div className="wc-title">
// //                       🙏 {farmerName ? `${farmerName} ji, AgroAI में स्वागत है!` : "AgroAI में आपका स्वागत है।"}
// //                     </div>
// //                     <div className="wc-sub">फसल बाजार, मूल्य और खरीदार की सम्पूर्ण जानकारी</div>
// //                     <p className="wc-desc">
// //                       नमस्ते! मैं <strong>AgroAI</strong> हूँ — प्रौद्योगिकी महाविद्यालय, पंतनगर का AI-powered फसल बाजार सहायक।
// //                       नीचे किसी भी फसल पर क्लिक करें या सीधे अपना सवाल पूछें:
// //                     </p>
// //                     <div className="wc-grid">
// //                       {CROP_TOPICS.map((t, i) => (
// //                         <button key={i} className="wc-btn"
// //                           onClick={() => sendMessage(`${t.label} का आज का भाव और खरीदार बताएं Haldwani में`)}>
// //                           <span style={{ fontSize: 20 }}>{t.icon}</span>
// //                           <span>{t.label}</span>
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 )}

// //                 <AnimatePresence initial={false}>
// //                   {messages.map((msg, i) => (
// //                     <motion.div key={msg.id || i}
// //                       initial={{ opacity: 0, y: 14, scale: 0.97 }}
// //                       animate={{ opacity: 1, y: 0, scale: 1 }}
// //                       transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
// //                       className={`msg-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
// //                     >
// //                       {msg.sender === "bot" && <div className="bot-av">🌾</div>}
// //                       <div className={`bubble ${msg.sender === "user" ? "user-bbl" : "bot-bbl"}`}>
// //                         {msg.sender === "bot" ? <BotMessage text={msg.text} /> : <p className="user-txt">{msg.text}</p>}
// //                         {msg.meta && (
// //                           <div className="meta-row">
// //                             {msg.meta.crop && <span className="meta-chip">🌱 {msg.meta.crop}</span>}
// //                             {msg.meta.location && <span className="meta-chip">📍 {msg.meta.location}</span>}
// //                             {msg.meta.quantity > 0 && <span className="meta-chip">⚖️ {msg.meta.quantity}kg</span>}
// //                             <span className="meta-chip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
// //                           </div>
// //                         )}
// //                         <div className="bbl-foot">
// //                           <span className="bbl-time">{msg.time}</span>
// //                           {msg.sender === "bot" && (
// //                             <div style={{ display: "flex", gap: 4 }}>
// //                               <button className="act-btn" onClick={() => speakText(msg.text)}><IconSpeak /></button>
// //                               <button className="act-btn" onClick={() => copyText(msg.text, msg.id)}>
// //                                 {copiedId === msg.id ? "✓" : <IconCopy />}
// //                               </button>
// //                             </div>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </AnimatePresence>

// //                 {loading && <TypingIndicator />}
// //                 <div ref={bottomRef} />
// //               </div>

// //               <div className="input-area">
// //                 {isListening && (
// //                   <div className="listening-bar">
// //                     <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
// //                       {[...Array(5)].map((_, i) => <div key={i} className="lw-bar" style={{ animationDelay: `${i * 0.1}s` }} />)}
// //                     </div>
// //                     <span className="listening-txt">{transcript || "Listening..."}</span>
// //                   </div>
// //                 )}
// //                 <div className="input-row">
// //                   <textarea
// //                     ref={inputRef}
// //                     className="chat-input"
// //                     value={input}
// //                     onChange={e => setInput(e.target.value)}
// //                     onKeyDown={handleKey}
// //                     placeholder="अपनी फसलों के बारे में पूछें... (e.g. टमाटर 50 किलो का भाव)"
// //                     rows={1}
// //                     maxLength={500}
// //                   />
// //                   {voiceSupported && (
// //                     <button className={`mic-btn ${isListening ? "mic-on" : ""}`} onClick={toggleVoice}>
// //                       {isListening ? <IconMicOff /> : <IconMic />}
// //                     </button>
// //                   )}
// //                   <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading}>
// //                     <IconSend />
// //                   </button>
// //                 </div>
// //                 <div className="input-foot">AgroAI · Live mandi data + LLaMA AI · Prices are indicative</div>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // const CSS = `
// //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //   html, body { height: 100%; overflow: hidden; }

// //   body {
// //     font-family: 'Segoe UI', system-ui, sans-serif;
// //     background: #f0fdf4;
// //     color: #1a2e1a;
// //   }

// //   .bg-blob {
// //     position: fixed; border-radius: 50%;
// //     filter: blur(80px); pointer-events: none; z-index: 0; opacity: 0.5;
// //   }
// //   .bg-blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, #bbf7d0, transparent); top: -150px; left: -150px; animation: blobFloat 14s ease-in-out infinite; }
// //   .bg-blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, #d1fae5, transparent); bottom: -100px; right: -100px; animation: blobFloat 18s ease-in-out infinite reverse; }
// //   .bg-blob-3 { width: 300px; height: 300px; background: radial-gradient(circle, #ecfccb, transparent); top: 40%; left: 40%; animation: blobFloat 22s ease-in-out infinite; }
// //   @keyframes blobFloat { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-20px) scale(1.05); } 66% { transform: translate(-20px,30px) scale(0.97); } }

// //   .chat-root { position: relative; height: 100vh; display: flex; overflow: hidden; z-index: 1; }

// //   /* TOGGLE — top left corner */
// //   .sidebar-toggle-btn {
// //     position: fixed; top: 12px; left: 12px; z-index: 300;
// //     background: rgba(255,255,255,0.88); backdrop-filter: blur(12px);
// //     color: #166534; border: 1px solid rgba(34,197,94,0.3);
// //     border-radius: 10px; width: 40px; height: 40px;
// //     font-size: 17px; cursor: pointer;
// //     display: flex; align-items: center; justify-content: center;
// //     box-shadow: 0 2px 12px rgba(0,0,0,0.1); transition: all 0.2s;
// //   }
// //   .sidebar-toggle-btn:hover { background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,0.14); }
// //   .sidebar-toggle-btn.open { left: 290px; background: #fee2e2; color: #dc2626; border-color: rgba(220,38,38,0.3); }

// //   .sidebar-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.22); backdrop-filter: blur(2px); z-index: 149; }

// //   .sidebar {
// //     position: fixed; top: 0; left: 0; width: 278px; height: 100vh;
// //     background: rgba(255,255,255,0.94); backdrop-filter: blur(20px);
// //     border-right: 1px solid rgba(34,197,94,0.18);
// //     box-shadow: 4px 0 28px rgba(0,0,0,0.08);
// //     display: flex; flex-direction: column;
// //     padding: 20px 15px 15px; z-index: 150; overflow-y: auto;
// //   }
// //   .sb-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid rgba(34,197,94,0.12); }
// //   .sb-logo-icon { font-size: 26px; }
// //   .sb-title { font-size: 17px; font-weight: 700; color: #166534; }
// //   .sb-sub { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.8px; }
// //   .sb-farmer { display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 9px 11px; margin-bottom: 14px; }
// //   .sb-farmer-av { width: 33px; height: 33px; border-radius: 50%; background: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #fff; }
// //   .sb-farmer-name { font-size: 12.5px; font-weight: 600; color: #15803d; }
// //   .sb-farmer-tag { font-size: 10px; color: #9ca3af; }
// //   .sb-btn { display: flex; align-items: center; gap: 8px; border-radius: 9px; cursor: pointer; font-size: 13px; padding: 9px 12px; width: 100%; margin-bottom: 7px; transition: all 0.18s; }
// //   .sb-home { background: transparent; border: 1px solid #e5e7eb; color: #374151; }
// //   .sb-home:hover { background: #f0fdf4; color: #166534; border-color: #bbf7d0; }
// //   .sb-new { background: #16a34a; border: none; color: #fff; font-weight: 600; justify-content: center; }
// //   .sb-new:hover { background: #15803d; }
// //   .sb-divider { height: 1px; background: rgba(34,197,94,0.12); margin: 10px 0; }
// //   .sb-label { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px; }
// //   .sb-lang-row { display: flex; gap: 6px; }
// //   .sb-lang-btn { flex: 1; padding: 7px; border-radius: 8px; border: 1px solid #e5e7eb; background: transparent; color: #6b7280; font-size: 12px; cursor: pointer; transition: all 0.18s; }
// //   .sb-lang-btn.active { background: #dcfce7 !important; border-color: #16a34a !important; color: #166534 !important; font-weight: 600; }
// //   .sb-lang-btn:hover { background: #f0fdf4; }
// //   .sb-status-card { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 11px 12px; }
// //   .sb-pill { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 11px; color: #166534; }
// //   .live-dot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; box-shadow: 0 0 6px #16a34a; animation: pulse 2s infinite; display: inline-block; }
// //   .sb-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 9px 11px; font-size: 11.5px; color: #78716c; margin-top: 14px; line-height: 1.5; }
// //   .sb-footer-txt { margin-top: auto; padding-top: 14px; font-size: 11px; color: #9ca3af; text-align: center; }

// //   .chat-main { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }

// //   /* BANNER */
// //   .college-banner { position: relative; overflow: hidden; flex-shrink: 0; background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%); }
// //   .banner-shimmer { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%); animation: shimmer 5s infinite; }
// //   @keyframes shimmer { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }
// //   .banner-inner { position: relative; display: flex; align-items: center; gap: 16px; padding: 12px 20px 12px 62px; }
// //   .banner-logo { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.25); }
// //   .banner-logo-ring { position: absolute; inset: -3px; border-radius: 50%; border: 1.5px solid rgba(255,220,100,0.4); animation: spin 14s linear infinite; }
// //   @keyframes spin { to { transform: rotate(360deg); } }
// //   .banner-h1 { font-size: 15px; font-weight: 700; color: #fff; }
// //   .banner-h2 { font-size: 11.5px; color: rgba(255,200,150,0.9); font-style: italic; margin-top: 1px; }
// //   .banner-h3 { font-size: 10.5px; color: rgba(255,255,255,0.5); margin-top: 2px; }
// //   .banner-divider-v { width: 1px; height: 44px; background: rgba(255,255,255,0.15); flex-shrink: 0; }
// //   .banner-app-name { font-size: 19px; font-weight: 800; color: #fde68a; font-style: italic; }
// //   .banner-app-sub { font-size: 9px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.8px; }
// //   .banner-pills-row { display: flex; gap: 4px; justify-content: flex-end; margin-top: 4px; flex-wrap: wrap; }
// //   .banner-pill { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 1px 7px; font-size: 9.5px; color: rgba(255,255,255,0.85); }
// //   .banner-foot { position: relative; display: flex; justify-content: space-between; align-items: center; padding: 5px 20px; background: rgba(0,0,0,0.15); border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap; gap: 4px; }
// //   .banner-quote { font-size: 10px; font-style: italic; color: rgba(255,255,200,0.6); }
// //   .banner-live { display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: #86efac; font-weight: 600; }
// //   .live-dot-sm { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 5px #4ade80; display: inline-block; animation: pulse 2s infinite; }
// //   @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }

// //   /* CHAT CARD */
// //   .chat-card-wrap { flex: 1; padding: 10px 14px 12px; overflow: hidden; display: flex; flex-direction: column; min-height: 0; }
// //   .chat-card {
// //     flex: 1; display: flex; flex-direction: column; min-height: 0;
// //     background: rgba(255,255,255,0.7);
// //     backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
// //     border: 1px solid rgba(255,255,255,0.85);
// //     border-radius: 16px; overflow: hidden;
// //     box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
// //   }

// //   .chat-header { display: flex; align-items: center; justify-content: space-between; padding: 11px 15px; background: rgba(255,255,255,0.55); border-bottom: 1px solid rgba(34,197,94,0.1); flex-shrink: 0; }
// //   .ch-avatar { width: 35px; height: 35px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 16px; box-shadow: 0 2px 8px rgba(22,163,74,0.25); }
// //   .ch-title { font-size: 13.5px; font-weight: 700; color: #15803d; }
// //   .ch-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9ca3af; }
// //   .ch-dot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; animation: pulse 2s infinite; }
// //   .ch-home-btn { background: rgba(255,255,255,0.7); border: 1px solid rgba(34,197,94,0.2); color: #374151; padding: 6px 8px; border-radius: 8px; cursor: pointer; transition: all 0.18s; display: flex; align-items: center; }
// //   .ch-home-btn:hover { background: #f0fdf4; color: #166534; }
// //   .speaking-badge { display: flex; align-items: center; gap: 5px; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 4px 10px; font-size: 11px; color: #166534; }
// //   .sw { display: inline-block; width: 3px; height: 11px; background: #16a34a; border-radius: 2px; animation: wave 0.6s ease-in-out infinite alternate; }
// //   @keyframes wave { to { height: 4px; } }

// //   .chat-messages { flex: 1; overflow-y: auto; padding: 14px 15px 8px; display: flex; flex-direction: column; gap: 12px; scrollbar-width: thin; scrollbar-color: #bbf7d0 transparent; min-height: 0; }

// //   /* WELCOME */
// //   .welcome-card { background: rgba(255,255,255,0.8); border: 1px solid rgba(34,197,94,0.18); border-radius: 14px; padding: 18px; box-shadow: 0 2px 14px rgba(0,0,0,0.05); }
// //   .wc-title { font-size: 18px; font-weight: 700; color: #15803d; margin-bottom: 3px; }
// //   .wc-sub { font-size: 12px; color: #9ca3af; font-style: italic; margin-bottom: 10px; }
// //   .wc-desc { font-size: 13px; color: #374151; line-height: 1.65; margin-bottom: 14px; }
// //   .wc-desc strong { color: #166534; }
// //   .wc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px; }
// //   .wc-btn { display: flex; align-items: center; gap: 9px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 9px; padding: 9px 12px; cursor: pointer; transition: all 0.18s; font-size: 12.5px; color: #374151; font-weight: 500; }
// //   .wc-btn:hover { background: #dcfce7; border-color: #4ade80; color: #15803d; transform: translateY(-1px); box-shadow: 0 3px 10px rgba(0,0,0,0.07); }

// //   .msg-row { display: flex; align-items: flex-end; gap: 7px; }
// //   .user-row { flex-direction: row-reverse; }
// //   .bot-av { width: 27px; height: 27px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(22,163,74,0.2); }

// //   .bubble { max-width: 74%; border-radius: 14px; padding: 10px 13px; }
// //   .user-bbl { background: linear-gradient(135deg, #16a34a, #15803d); border-bottom-right-radius: 3px; box-shadow: 0 3px 12px rgba(22,163,74,0.28); }
// //   .bot-bbl { background: rgba(255,255,255,0.88); border: 1px solid rgba(34,197,94,0.13); border-bottom-left-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
// //   .user-txt { font-size: 13.5px; color: #fff; line-height: 1.55; }
// //   .bot-content { font-size: 13px; line-height: 1.6; color: #1f2937; }
// //   .msg-text { margin-bottom: 3px; }
// //   .msg-divider { height: 1px; background: #e5e7eb; margin: 6px 0; }
// //   .msg-section { display: flex; align-items: center; gap: 6px; font-weight: 700; color: #166534; font-size: 12.5px; margin: 6px 0 2px; }
// //   .section-icon { font-size: 14px; }
// //   .msg-bullet { display: flex; align-items: flex-start; gap: 7px; margin: 3px 0; font-size: 12.5px; color: #374151; }
// //   .bullet-dot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; flex-shrink: 0; margin-top: 7px; }
// //   .meta-row { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
// //   .meta-chip { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 10px; color: #166534; }
// //   .bbl-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 5px; gap: 8px; }
// //   .bbl-time { font-size: 10px; color: #9ca3af; }
// //   .act-btn { background: transparent; border: 1px solid #e5e7eb; color: #9ca3af; width: 22px; height: 22px; border-radius: 5px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; transition: all 0.15s; }
// //   .act-btn:hover { background: #f0fdf4; color: #16a34a; border-color: #bbf7d0; }

// //   .typing-wrap { display: flex; align-items: flex-end; gap: 7px; }
// //   .typing-bubble { background: rgba(255,255,255,0.88); border: 1px solid rgba(34,197,94,0.13); border-radius: 14px; border-bottom-left-radius: 3px; padding: 11px 15px; display: flex; flex-direction: column; gap: 5px; min-width: 70px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
// //   .typing-bar { height: 4px; border-radius: 3px; background: linear-gradient(90deg, #16a34a, #4ade80, #16a34a); background-size: 200% 100%; animation: shimmerBar 1.4s ease-in-out infinite; width: 75%; }
// //   @keyframes shimmerBar { 0%,100% { background-position: 0% 50%; opacity: 0.5; } 50% { background-position: 100% 50%; opacity: 1; } }

// //   .input-area { border-top: 1px solid rgba(34,197,94,0.1); background: rgba(255,255,255,0.45); flex-shrink: 0; padding: 9px 13px 7px; }
// //   .listening-bar { display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 7px 11px; margin-bottom: 7px; }
// //   .lw-bar { width: 3px; height: 13px; background: #16a34a; border-radius: 2px; animation: lvWave 0.6s ease-in-out infinite alternate; }
// //   @keyframes lvWave { to { height: 4px; } }
// //   .listening-txt { font-size: 12px; color: #16a34a; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// //   .input-row { display: flex; align-items: flex-end; gap: 7px; }
// //   .chat-input {
// //     flex: 1; background: rgba(255,255,255,0.82); border: 1.5px solid rgba(34,197,94,0.22);
// //     border-radius: 12px; color: #1f2937; padding: 10px 13px; font-size: 13.5px; resize: none;
// //     outline: none; line-height: 1.5; max-height: 90px; overflow-y: auto;
// //     transition: border-color 0.18s, box-shadow 0.18s; font-family: inherit;
// //     box-shadow: 0 1px 4px rgba(0,0,0,0.04);
// //   }
// //   .chat-input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.1); }
// //   .chat-input::placeholder { color: #9ca3af; }
// //   .mic-btn { width: 40px; height: 40px; border-radius: 10px; border: 1.5px solid rgba(34,197,94,0.22); background: rgba(255,255,255,0.8); color: #6b7280; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.18s; flex-shrink: 0; }
// //   .mic-btn:hover { background: #f0fdf4; color: #16a34a; }
// //   .mic-on { background: #fef2f2 !important; border-color: #fca5a5 !important; color: #dc2626 !important; animation: micPulse 1s ease-in-out infinite; }
// //   @keyframes micPulse { 0%,100% { box-shadow: none; } 50% { box-shadow: 0 0 0 7px rgba(220,38,38,0); } }
// //   .send-btn { width: 40px; height: 40px; border-radius: 10px; border: none; background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.18s; flex-shrink: 0; box-shadow: 0 3px 10px rgba(22,163,74,0.3); }
// //   .send-btn:hover:not(:disabled) { background: linear-gradient(135deg, #15803d, #166534); transform: scale(1.05); }
// //   .send-btn:disabled { opacity: 0.35; cursor: not-allowed; }
// //   .input-foot { margin-top: 4px; text-align: center; font-size: 9.5px; color: #9ca3af; }

// //   ::-webkit-scrollbar { width: 4px; }
// //   ::-webkit-scrollbar-track { background: transparent; }
// //   ::-webkit-scrollbar-thumb { background: #bbf7d0; border-radius: 3px; }

// //   @media (max-width: 600px) {
// //     .banner-inner { padding: 10px 12px 10px 58px; gap: 10px; }
// //     .banner-logo { width: 42px; height: 42px; }
// //     .banner-h1 { font-size: 13px; }
// //     .banner-pills-row { display: none; }
// //     .bubble { max-width: 86%; }
// //     .chat-card-wrap { padding: 7px 8px 9px; }
// //     .sidebar-toggle-btn.open { left: 270px; }
// //     .sidebar { width: 262px; }
// //     .wc-grid { grid-template-columns: 1fr 1fr; }
// //   }
// // `;


// // import { useState, useRef, useEffect, useCallback } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import collegeLogo from "../assets/cot.jpg";

// // const CROP_TOPICS = [
// //   { icon: "🍅", label: "टमाटर (Tomato)" },
// //   { icon: "🧅", label: "प्याज (Onion)" },
// //   { icon: "🥔", label: "आलू (Potato)" },
// //   { icon: "🥦", label: "फूलगोभी (Cauliflower)" },
// //   { icon: "🥕", label: "गाजर (Carrot)" },
// //   // { icon: "🌽", label: "मक्का (Maize)" },
// //   // { icon: "🌾", label: "गेहूँ (Wheat)" },
// //   // { icon: "🫘", label: "दाल (Pulses)" },
// //   // { icon: "🍎", label: "सेब (Apple)" },
// //   // { icon: "🫚", label: "सरसों (Mustard)" },
// //   // { icon: "🌿", label: "धनिया (Coriander)" },
// //   // { icon: "🍐", label: "नाशपाती (Pear)" },
// // ];

// // function BotMessage({ text }) {
// //   return (
// //     <div className="bot-content">
// //       {text.split("\n").map((line, i) => {
// //         const t = line.trim();
// //         if (!t) return <div key={i} style={{ height: 5 }} />;
// //         if (/^━+$/.test(t)) return <div key={i} className="msg-divider" />;
// //         const sec = t.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
// //         if (sec) return <div key={i} className="msg-section"><span>{sec[1]}</span><strong>{sec[2]}</strong></div>;
// //         if (t.startsWith("•")) return <div key={i} className="msg-bullet"><span className="bdot" /><span>{t.slice(1).trim()}</span></div>;
// //         return <p key={i} className="msg-text">{t}</p>;
// //       })}
// //     </div>
// //   );
// // }

// // function TypingIndicator() {
// //   return (
// //     <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
// //       <div className="bot-av">🌾</div>
// //       <div className="typing-bbl">
// //         {[0, 0.18, 0.36].map((d, i) => (
// //           <div key={i} className="t-dot" style={{ animationDelay: `${d}s` }} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // const Ico = {
// //   Send: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
// //   Mic: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/><line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
// //   MicOff: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
// //   Home: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
// //   Plus: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
// //   Speak: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
// //   Copy: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/></svg>,
// // };

// // export default function Chatbot() {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("token");
// //   const farmerName = localStorage.getItem("farmerName") || null;
// //   const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [chatId, setChatId] = useState(null);
// //   const [isListening, setIsListening] = useState(false);
// //   const [voiceSupported, setVoiceSupported] = useState(false);
// //   const [voiceLang, setVoiceLang] = useState("hi-IN");
// //   const [transcript, setTranscript] = useState("");
// //   const [isSpeaking, setIsSpeaking] = useState(false);
// //   const [showWelcome, setShowWelcome] = useState(true);
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [copiedId, setCopiedId] = useState(null);

// //   const bottomRef = useRef(null);
// //   const inputRef = useRef(null);
// //   const recRef = useRef(null);

// //   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
// //   useEffect(() => { if (window.SpeechRecognition || window.webkitSpeechRecognition) setVoiceSupported(true); }, []);

// //   useEffect(() => {
// //     if (!token) return;
// //     (async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
// //         const data = await res.json();
// //         if (data.length > 0) {
// //           const msgs = data[0].messages || [];
// //           setMessages(msgs); setChatId(data[0]._id);
// //           if (msgs.length > 0) setShowWelcome(false);
// //         } else {
// //           const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } });
// //           const chat = await cr.json(); setChatId(chat._id);
// //         }
// //       } catch {}
// //     })();
// //   }, []);

// //   const startListening = useCallback(() => {
// //     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SR) return;
// //     const r = new SR(); r.lang = voiceLang; r.interimResults = true;
// //     r.onstart = () => setIsListening(true);
// //     r.onresult = e => { const t = Array.from(e.results).map(x => x[0].transcript).join(""); setTranscript(t); setInput(t); };
// //     r.onend = () => { setIsListening(false); setTranscript(""); };
// //     r.onerror = () => { setIsListening(false); setTranscript(""); };
// //     recRef.current = r; r.start();
// //   }, [voiceLang]);

// //   const stopListening = useCallback(() => { recRef.current?.stop(); setIsListening(false); }, []);
// //   const toggleVoice = () => { if (isListening) { stopListening(); if (input.trim()) sendMessage(input); } else startListening(); };

// //   const speakText = t => {
// //     if (!window.speechSynthesis) return;
// //     window.speechSynthesis.cancel();
// //     const u = new SpeechSynthesisUtterance(t.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". "));
// //     u.lang = voiceLang; u.rate = 0.92;
// //     u.onstart = () => setIsSpeaking(true); u.onend = () => setIsSpeaking(false);
// //     window.speechSynthesis.speak(u);
// //   };

// //   const copyText = (t, id) => { navigator.clipboard.writeText(t).then(() => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); }); };

// //   const newChat = async () => {
// //     try { const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } }); const chat = await cr.json(); setChatId(chat._id); } catch {}
// //     setMessages([]); setInput(""); setShowWelcome(true); setSidebarOpen(false);
// //   };

// //   const saveMessage = async msg => {
// //     if (!chatId || !token) return;
// //     await fetch("http://localhost:5000/api/chats/message", { method: "POST", headers: { "Content-Type": "application/json", Authorization: token }, body: JSON.stringify({ chatId, message: msg }) }).catch(() => {});
// //   };

// //   const sendMessage = async text => {
// //     const msg = (text || input).trim(); if (!msg || loading) return;
// //     setInput(""); setShowWelcome(false);
// //     const um = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
// //     await saveMessage(um); setMessages(p => [...p, um]); setLoading(true);
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: msg, farmerName }) });
// //       const data = await res.json();
// //       if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
// //       const bm = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
// //       await saveMessage(bm); setMessages(p => [...p, bm]);
// //     } catch { setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_e" }]); }
// //     finally { setLoading(false); setTimeout(() => inputRef.current?.focus(), 80); }
// //   };

// //   const handleKey = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

// //   return (
// //     <>
// //       <style>{CSS}</style>

// //       {/* Soft background blobs */}
// //       <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />

// //       <div className="root">

// //         {/* ── GREEN PILL ARROW — exactly like Pragyanam ── */}
// //         <button className={`pill-toggle ${sidebarOpen ? "pill-open" : ""}`} onClick={() => setSidebarOpen(p => !p)}>
// //           <span className="pill-arrow">{sidebarOpen ? "‹" : "›"}</span>
// //         </button>

// //         {/* ── SIDEBAR ── */}
// //         <AnimatePresence>
// //           {sidebarOpen && (
// //             <>
// //               <motion.div key="bd" className="sb-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSidebarOpen(false)} />
// //               <motion.aside key="sb" className="sidebar"
// //                 initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}
// //                 transition={{ type: "spring", stiffness: 340, damping: 34 }}
// //               >
// //                 <div className="sb-head">
// //                   <span style={{ fontSize: 24 }}>🌾</span>
// //                   <div><div className="sb-name">AgroAI</div><div className="sb-tag">Crop Intelligence</div></div>
// //                 </div>

// //                 {farmerName && (
// //                   <div className="sb-user">
// //                     <div className="sb-av">{farmerName[0].toUpperCase()}</div>
// //                     <div><div className="sb-uname">{farmerName}</div><div className="sb-utag">Registered Farmer</div></div>
// //                   </div>
// //                 )}

// //                 <button className="sb-btn outline" onClick={() => navigate("/")}><Ico.Home /> Back to Home</button>
// //                 <button className="sb-btn green" onClick={newChat}><Ico.Plus /> New Conversation</button>

// //                 <div className="sb-rule" />

// //                 <div className="sb-sec">Voice Language</div>
// //                 <div style={{ display: "flex", gap: 6 }}>
// //                   {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([v, f, l]) => (
// //                     <button key={v} className={`lang-btn ${voiceLang === v ? "lang-on" : ""}`} onClick={() => setVoiceLang(v)}>{f} {l}</button>
// //                   ))}
// //                 </div>

// //                 <div className="sb-sec" style={{ marginTop: 18 }}>Market Status</div>
// //                 <div className="sb-mandi">
// //                   <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="ldot" /><b style={{ fontSize: 12.5, color: "#15803d" }}>Live Mandi Data</b></div>
// //                   <div style={{ fontSize: 11.5, color: "#6b7280", marginTop: 4 }}>📍 Haldwani · Uttarakhand</div>
// //                   <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 7 }}>
// //                     {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => <span key={c} className="mpill">{c}</span>)}
// //                   </div>
// //                 </div>

// //                 <div className="sb-tip">💡 <b>Pro tip:</b> Fasal ka naam aur matra batayein for best advice.</div>
// //                 <div className="sb-foot">Made for farmers of Uttarakhand 🌾</div>
// //               </motion.aside>
// //             </>
// //           )}
// //         </AnimatePresence>

// //         {/* ── MAIN ── */}
// //         <div className="main">

// //           {/* BANNER — with side margin like Pragyanam */}
// //           <div className="banner-wrap">
// //             <div className="banner">
// //               <div className="ban-shine" />
// //               <div className="ban-body">
// //                 <div style={{ position: "relative", flexShrink: 0 }}>
// //                   <img src={collegeLogo} alt="logo" className="ban-logo" />
// //                   <div className="ban-ring" />
// //                 </div>
// //                 <div style={{ flex: 1, minWidth: 0 }}>
// //                   <div className="ban-h1">प्रौद्योगिकी महाविद्यालय</div>
// //                   <div className="ban-h2">College of Technology, Pantnagar</div>
// //                   <div className="ban-h3">G.B. Pant University of Agriculture &amp; Technology</div>
// //                 </div>
// //                 <div className="ban-vline" />
// //                 <div style={{ textAlign: "right", flexShrink: 0 }}>
// //                   <div className="ban-appname">AgroAI</div>
// //                   <div className="ban-appsub">Intelligent Crop Market Assistant</div>
// //                 </div>
// //               </div>
// //               <div className="ban-foot">
// //                 <span className="ban-quote">"Empowering farmers of Uttarakhand with AI-driven market intelligence"</span>
// //                 <span className="ban-live"><span className="ldot-sm" /> Live Data Active</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* CHAT AREA */}
// //           <div className="chat-wrap">
// //             <div className="chat-card">

// //               {/* Header
// //               <header className="chat-hdr">
// //                 <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// //                   <div className="hdr-av">🤖</div>
// //                   <div>
// //                     <div className="hdr-title">AgroAI Assistant</div>
// //                     <div className="hdr-status"><span className="hdr-dot" /> Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}</div>
// //                   </div>
// //                 </div>
// //                 <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// //                   <AnimatePresence>
// //                     {isSpeaking && (
// //                       <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="spk-badge">
// //                         {[0, 0.15, 0.3].map((d, i) => <span key={i} className="spk-bar" style={{ animationDelay: `${d}s` }} />)}
// //                         Speaking
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                   <button className="hdr-btn" onClick={() => navigate("/")}><Ico.Home /></button>
// //                 </div>
// //               </header> */}

// //               {/* Messages */}
// //               <div className="msgs">

// //                 {/* ── WELCOME — exactly like Pragyanam style ── */}
// //                 {showWelcome && messages.length === 0 && (
// //                   <motion.div className="welcome" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }}>

// //                     {/* Maroon bold title like "🙏 प्रज्ञानम् में आपका स्वागत है।" */}
// //                     <div className="wc-heading">
// //                       🙏 {farmerName ? `${farmerName} ji, AgroAI में आपका स्वागत है।` : "AgroAI में आपका स्वागत है।"}
// //                     </div>

// //                     {/* Subtitle */}
// //                     <div className="wc-subtitle">फसल बाजार, मूल्य और खरीदार की चेतनमयी दुनिया</div>

// //                     {/* Description paragraph */}
// //                     <p className="wc-body">
// //                       नमस्ते! मैं <strong>AgroAI</strong> हूँ — प्रौद्योगिकी महाविद्यालय, पंतनगर का
// //                       AI-powered फसल बाजार सहायक। आप मुझसे निम्नलिखित विषयों पर चर्चा कर सकते हैं:
// //                     </p>

// //                     {/* Topic grid — plain text links like Pragyanam, NOT cards */}
// //                     <div className="wc-topics">
// //                       {CROP_TOPICS.map((t, i) => (
// //                         <div key={i} className="wc-topic" onClick={() => sendMessage(`${t.label} का आज का भाव और खरीदार बताएं Haldwani में`)}>
// //                           <span className="wc-topic-icon">{t.icon}</span>
// //                           <span className="wc-topic-label">{t.label}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 )}

// //                 <AnimatePresence initial={false}>
// //                   {messages.map((msg, i) => (
// //                     <motion.div key={msg.id || i}
// //                       initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
// //                       transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
// //                       className={`mrow ${msg.sender === "user" ? "mrow-u" : "mrow-b"}`}
// //                     >
// //                       {msg.sender === "bot" && <div className="bot-av">🌾</div>}
// //                       <div className={`bbl ${msg.sender === "user" ? "bbl-u" : "bbl-b"}`}>
// //                         {msg.sender === "bot" ? <BotMessage text={msg.text} /> : <p className="utxt">{msg.text}</p>}
// //                         {msg.meta && (
// //                           <div className="meta">
// //                             {msg.meta.crop && <span className="mchip">🌱 {msg.meta.crop}</span>}
// //                             {msg.meta.location && <span className="mchip">📍 {msg.meta.location}</span>}
// //                             {msg.meta.quantity > 0 && <span className="mchip">⚖️ {msg.meta.quantity}kg</span>}
// //                             <span className="mchip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
// //                           </div>
// //                         )}
// //                         <div className="bbl-foot">
// //                           <span className="bbl-time">{msg.time}</span>
// //                           {msg.sender === "bot" && (
// //                             <div style={{ display: "flex", gap: 4 }}>
// //                               <button className="abt" onClick={() => speakText(msg.text)}><Ico.Speak /></button>
// //                               <button className="abt" onClick={() => copyText(msg.text, msg.id)}>{copiedId === msg.id ? "✓" : <Ico.Copy />}</button>
// //                             </div>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </AnimatePresence>

// //                 {loading && <TypingIndicator />}
// //                 <div ref={bottomRef} />
// //               </div>

// //               {/* Input */}
// //               <div className="inp-area">
// //                 {isListening && (
// //                   <div className="listen-bar">
// //                     <div style={{ display: "flex", gap: 3 }}>{[...Array(5)].map((_, i) => <div key={i} className="lbar" style={{ animationDelay: `${i * 0.1}s` }} />)}</div>
// //                     <span className="listen-txt">{transcript || "Listening..."}</span>
// //                   </div>
// //                 )}
// //                 <div className="inp-row">
// //                   <textarea ref={inputRef} className="inp" value={input}
// //                     onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
// //                     placeholder="यहाँ अपना प्रश्न लिखें..." rows={1} maxLength={500}
// //                   />
// //                   {voiceSupported && (
// //                     <button className={`mic ${isListening ? "mic-on" : ""}`} onClick={toggleVoice}>
// //                       {isListening ? <Ico.MicOff /> : <Ico.Mic />}
// //                     </button>
// //                   )}
// //                   <button className="send" onClick={() => sendMessage()} disabled={!input.trim() || loading}><Ico.Send /></button>
// //                 </div>
// //                 <div className="inp-foot">AgroAI · Live mandi data + LLaMA AI · Prices are indicative</div>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // const CSS = `
// //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //   html, body { height: 100%; overflow: hidden; }
// //   body { font-family: 'Segoe UI', 'Noto Sans', system-ui, sans-serif; background: #f8faf8; color: #1a1a1a; }

// //   /* ── BACKGROUND ─────────────────────────────── */
// //   .blob { position: fixed; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
// //   .b1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(187,247,208,0.6), transparent); top: -200px; left: -200px; animation: bf 16s ease-in-out infinite; }
// //   .b2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(209,250,229,0.5), transparent); bottom: -150px; right: -150px; animation: bf 20s ease-in-out infinite reverse; }
// //   .b3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(254,243,199,0.4), transparent); top: 35%; left: 45%; animation: bf 24s ease-in-out infinite; }
// //   @keyframes bf { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(25px,-18px) scale(1.04); } 66% { transform: translate(-18px,22px) scale(0.97); } }

// //   /* ── ROOT ───────────────────────────────────── */
// //   .root { position: relative; height: 100vh; display: flex; overflow: hidden; z-index: 1; }

// //   /* ── PILL TOGGLE — green arrow like Pragyanam ── */
// //   .pill-toggle {
// //     position: fixed;
// //     top: 50%;
// //     left: 0;
// //     transform: translateY(-50%);
// //     z-index: 300;
// //     background: #16a34a;
// //     border: none;
// //     border-radius: 0 20px 20px 0;
// //     width: 28px;
// //     height: 52px;
// //     cursor: pointer;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     box-shadow: 2px 0 14px rgba(22,163,74,0.35);
// //     transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
// //     padding: 0;
// //   }
// //   .pill-toggle:hover { width: 33px; background: #15803d; box-shadow: 3px 0 18px rgba(22,163,74,0.45); }
// //   .pill-toggle.pill-open { left: 283px; background: #dc2626; border-radius: 0 20px 20px 0; box-shadow: 2px 0 14px rgba(220,38,38,0.3); }
// //   .pill-toggle.pill-open:hover { background: #b91c1c; }
// //   .pill-arrow { color: #fff; font-size: 20px; font-weight: 700; line-height: 1; user-select: none; }

// //   /* ── SIDEBAR ─────────────────────────────────── */
// //   .sb-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.18); backdrop-filter: blur(3px); z-index: 149; }
// //   .sidebar {
// //     position: fixed; top: 0; left: 0; width: 282px; height: 100vh;
// //     background: rgba(255,255,255,0.97);
// //     border-right: 1px solid rgba(22,163,74,0.15);
// //     box-shadow: 6px 0 32px rgba(0,0,0,0.09);
// //     display: flex; flex-direction: column;
// //     padding: 22px 16px 16px; z-index: 150; overflow-y: auto;
// //     backdrop-filter: blur(20px);
// //   }
// //   .sb-head { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid rgba(22,163,74,0.1); }
// //   .sb-name { font-size: 17px; font-weight: 700; color: #15803d; }
// //   .sb-tag { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.7px; }
// //   .sb-user { display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 9px 11px; margin-bottom: 14px; }
// //   .sb-av { width: 32px; height: 32px; border-radius: 50%; background: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; }
// //   .sb-uname { font-size: 12.5px; font-weight: 600; color: #15803d; }
// //   .sb-utag { font-size: 10px; color: #9ca3af; }
// //   .sb-btn { display: flex; align-items: center; gap: 8px; border-radius: 9px; cursor: pointer; font-size: 13px; padding: 9px 12px; width: 100%; margin-bottom: 7px; transition: all 0.18s; font-family: inherit; }
// //   .outline { background: transparent; border: 1px solid #e5e7eb; color: #374151; }
// //   .outline:hover { background: #f0fdf4; color: #15803d; border-color: #bbf7d0; }
// //   .green { background: #16a34a; border: none; color: #fff; font-weight: 600; justify-content: center; }
// //   .green:hover { background: #15803d; }
// //   .sb-rule { height: 1px; background: rgba(22,163,74,0.1); margin: 10px 0; }
// //   .sb-sec { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px; }
// //   .lang-btn { flex: 1; padding: 7px; border-radius: 8px; border: 1px solid #e5e7eb; background: transparent; color: #6b7280; font-size: 12px; cursor: pointer; transition: all 0.18s; font-family: inherit; }
// //   .lang-btn:hover { background: #f0fdf4; }
// //   .lang-on { background: #dcfce7 !important; border-color: #16a34a !important; color: #15803d !important; font-weight: 600; }
// //   .sb-mandi { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 11px 12px; }
// //   .mpill { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 8px; font-size: 11px; color: #15803d; }
// //   .ldot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; box-shadow: 0 0 6px #16a34a; display: inline-block; animation: pulse 2s infinite; }
// //   .sb-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 9px 11px; font-size: 11.5px; color: #78716c; margin-top: 14px; line-height: 1.55; }
// //   .sb-foot { margin-top: auto; padding-top: 14px; font-size: 11px; color: #9ca3af; text-align: center; }

// //   /* ── MAIN ────────────────────────────────────── */
// //   .main { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }

// //   /* ── BANNER WRAP — margin on left/right like Pragyanam ── */
// //   .banner-wrap { padding: 14px 18px 0 18px; flex-shrink: 0; }

// //   .banner {
// //     position: relative; overflow: hidden;
// //     background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 45%, #b91c1c 100%);
// //     border-radius: 12px;
// //     box-shadow: 0 4px 20px rgba(127,29,29,0.35);
// //     border: 1px solid rgba(255,255,255,0.06);
// //   }
// //   .ban-shine { position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%); animation: shine 5s infinite; }
// //   @keyframes shine { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }

// //   .ban-body { position: relative; display: flex; align-items: center; gap: 16px; padding: 13px 22px; }
// //   .ban-logo { width: 54px; height: 54px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.22); flex-shrink: 0; }
// //   .ban-ring { position: absolute; inset: -3px; border-radius: 50%; border: 1.5px solid rgba(253,230,138,0.35); animation: spin 14s linear infinite; pointer-events: none; }
// //   @keyframes spin { to { transform: rotate(360deg); } }
// //   .ban-h1 { font-size: 16px; font-weight: 700; color: #fff; line-height: 1.3; }
// //   .ban-h2 { font-size: 12px; color: rgba(255,210,160,0.9); font-style: italic; margin-top: 1px; }
// //   .ban-h3 { font-size: 11px; color: rgba(255,255,255,0.45); margin-top: 2px; }
// //   .ban-vline { width: 1px; height: 50px; background: rgba(255,255,255,0.14); flex-shrink: 0; }
// //   .ban-appname { font-size: 20px; font-weight: 800; color: #fde68a; font-style: italic; letter-spacing: -0.3px; }
// //   .ban-appsub { font-size: 9.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.8px; margin-top: 1px; }
// //   .ban-pills { display: flex; gap: 4px; justify-content: flex-end; margin-top: 5px; flex-wrap: wrap; }
// //   .ban-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 20px; padding: 1px 8px; font-size: 9.5px; color: rgba(255,255,255,0.82); }
// //   .ban-foot { display: flex; justify-content: space-between; align-items: center; padding: 5px 22px; background: rgba(0,0,0,0.14); border-top: 1px solid rgba(255,255,255,0.06); flex-wrap: wrap; gap: 4px; }
// //   .ban-quote { font-size: 10px; font-style: italic; color: rgba(255,255,200,0.58); }
// //   .ban-live { display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: #86efac; font-weight: 600; }
// //   .ldot-sm { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; display: inline-block; box-shadow: 0 0 5px #4ade80; animation: pulse 2s infinite; }
// //   @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

// //   /* ── CHAT WRAP ───────────────────────────────── */
// //   .chat-wrap { flex: 1; padding: 10px 18px 14px; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }

// //   /* ── CHAT CARD — frosted glass ───────────────── */
// //   .chat-card {
// //     flex: 1; display: flex; flex-direction: column; min-height: 0;
// //     background: rgba(255,255,255,0.75);
// //     backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
// //     border: 1px solid rgba(255,255,255,0.9);
// //     border-radius: 14px; overflow: hidden;
// //     box-shadow: 0 8px 40px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.95) inset;
// //   }

// //   /* ── CHAT HEADER ─────────────────────────────── */
// //   .chat-hdr { display: flex; align-items: center; justify-content: space-between; padding: 11px 16px; background: rgba(255,255,255,0.6); border-bottom: 1px solid rgba(22,163,74,0.1); flex-shrink: 0; }
// //   .hdr-av { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 15px; box-shadow: 0 2px 8px rgba(22,163,74,0.22); }
// //   .hdr-title { font-size: 13.5px; font-weight: 700; color: #15803d; }
// //   .hdr-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9ca3af; margin-top: 1px; }
// //   .hdr-dot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; animation: pulse 2s infinite; }
// //   .hdr-btn { background: rgba(255,255,255,0.7); border: 1px solid rgba(22,163,74,0.18); color: #374151; padding: 6px 8px; border-radius: 8px; cursor: pointer; transition: all 0.18s; display: flex; align-items: center; }
// //   .hdr-btn:hover { background: #f0fdf4; color: #15803d; }
// //   .spk-badge { display: flex; align-items: center; gap: 5px; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 4px 10px; font-size: 11px; color: #15803d; }
// //   .spk-bar { display: inline-block; width: 3px; height: 10px; background: #16a34a; border-radius: 2px; animation: wv 0.6s ease-in-out infinite alternate; }
// //   @keyframes wv { to { height: 3px; } }

// //   /* ── MESSAGES ────────────────────────────────── */
// //   .msgs { flex: 1; overflow-y: auto; padding: 14px 16px 8px; display: flex; flex-direction: column; gap: 11px; scrollbar-width: thin; scrollbar-color: #bbf7d0 transparent; min-height: 0; }

// //   /* ── WELCOME — Pragyanam exact style ─────────── */
// //   .welcome {
// //     background: rgba(255,255,255,0.92);
// //     border: 1px solid rgba(22,163,74,0.12);
// //     border-radius: 12px;
// //     padding: 20px 22px;
// //     box-shadow: 0 2px 16px rgba(0,0,0,0.04);
// //   }

// //   /* Bold maroon heading exactly like Pragyanam */
// //   .wc-heading {
// //     font-size: 20px;
// //     font-weight: 800;
// //     color: #7f1d1d;
// //     margin-bottom: 2px;
// //     letter-spacing: -0.2px;
// //     line-height: 1.3;
// //   }

// //   .wc-subtitle {
// //     font-size: 13px;
// //     color: #6b7280;
// //     margin-bottom: 12px;
// //     font-weight: 400;
// //   }

// //   .wc-body {
// //     font-size: 13.5px;
// //     color: #374151;
// //     line-height: 1.7;
// //     margin-bottom: 16px;
// //     border-bottom: 1px solid rgba(22,163,74,0.1);
// //     padding-bottom: 14px;
// //   }
// //   .wc-body strong { color: #15803d; }

// //   /* Topic list — plain text rows like Pragyanam (NOT cards) */
// //   .wc-topics {
// //     display: grid;
// //     grid-template-columns: 1fr 1fr;
// //     gap: 0;
// //   }

// //   .wc-topic {
// //     display: flex;
// //     align-items: center;
// //     gap: 8px;
// //     padding: 7px 6px;
// //     cursor: pointer;
// //     border-radius: 6px;
// //     transition: background 0.15s;
// //     text-decoration: none;
// //   }
// //   .wc-topic:hover { background: rgba(22,163,74,0.07); }
// //   .wc-topic:hover .wc-topic-label { color: #15803d; }

// //   .wc-topic-icon { font-size: 17px; flex-shrink: 0; }
// //   .wc-topic-label {
// //     font-size: 13px;
// //     color: #374151;
// //     font-weight: 400;
// //     line-height: 1.4;
// //     transition: color 0.15s;
// //   }

// //   .wc-hint { font-size: 11px; color: #9ca3af; margin-top: 12px; text-align: center; }

// //   /* ── MESSAGE BUBBLES ─────────────────────────── */
// //   .mrow { display: flex; align-items: flex-end; gap: 7px; }
// //   .mrow-u { flex-direction: row-reverse; }
// //   .bot-av { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(22,163,74,0.2); }
// //   .bbl { max-width: 74%; border-radius: 14px; padding: 10px 13px; }
// //   .bbl-u { background: linear-gradient(135deg, #16a34a, #15803d); border-bottom-right-radius: 3px; box-shadow: 0 3px 12px rgba(22,163,74,0.25); }
// //   .bbl-b { background: rgba(255,255,255,0.92); border: 1px solid rgba(22,163,74,0.12); border-bottom-left-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
// //   .utxt { font-size: 13.5px; color: #fff; line-height: 1.55; }
// //   .bot-content { font-size: 13px; line-height: 1.65; color: #1f2937; }
// //   .msg-text { margin-bottom: 3px; }
// //   .msg-divider { height: 1px; background: #e5e7eb; margin: 6px 0; }
// //   .msg-section { display: flex; align-items: center; gap: 6px; font-weight: 700; color: #15803d; font-size: 12.5px; margin: 6px 0 2px; }
// //   .msg-bullet { display: flex; align-items: flex-start; gap: 7px; margin: 3px 0; font-size: 12.5px; color: #374151; }
// //   .bdot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; flex-shrink: 0; margin-top: 7px; }
// //   .meta { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
// //   .mchip { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 10px; color: #15803d; }
// //   .bbl-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 5px; gap: 8px; }
// //   .bbl-time { font-size: 10px; color: #9ca3af; }
// //   .abt { background: transparent; border: 1px solid #e5e7eb; color: #9ca3af; width: 22px; height: 22px; border-radius: 5px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; transition: all 0.15s; }
// //   .abt:hover { background: #f0fdf4; color: #16a34a; border-color: #bbf7d0; }

// //   /* ── TYPING ──────────────────────────────────── */
// //   .typing-bbl { background: rgba(255,255,255,0.92); border: 1px solid rgba(22,163,74,0.12); border-radius: 14px; border-bottom-left-radius: 3px; padding: 12px 16px; display: flex; gap: 6px; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
// //   .t-dot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; animation: tdot 1.2s ease-in-out infinite; }
// //   @keyframes tdot { 0%,100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(-5px); opacity: 1; } }

// //   /* ── INPUT ───────────────────────────────────── */
// //   .inp-area { border-top: 1px solid rgba(22,163,74,0.08); background: rgba(255,255,255,0.5); flex-shrink: 0; padding: 9px 14px 7px; }
// //   .listen-bar { display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 7px 11px; margin-bottom: 7px; }
// //   .lbar { width: 3px; height: 13px; background: #16a34a; border-radius: 2px; animation: lv 0.6s ease-in-out infinite alternate; }
// //   @keyframes lv { to { height: 3px; } }
// //   .listen-txt { font-size: 12px; color: #16a34a; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// //   .inp-row { display: flex; align-items: flex-end; gap: 7px; }
// //   .inp {
// //     flex: 1; background: rgba(255,255,255,0.85);
// //     border: 1.5px solid rgba(22,163,74,0.2); border-radius: 12px;
// //     color: #1f2937; padding: 10px 13px; font-size: 13.5px;
// //     resize: none; outline: none; line-height: 1.5; max-height: 88px;
// //     overflow-y: auto; font-family: inherit;
// //     transition: border-color 0.18s, box-shadow 0.18s;
// //     box-shadow: 0 1px 4px rgba(0,0,0,0.04);
// //   }
// //   .inp:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.09); }
// //   .inp::placeholder { color: #9ca3af; }
// //   .mic { width: 40px; height: 40px; border-radius: 10px; border: 1.5px solid rgba(22,163,74,0.2); background: rgba(255,255,255,0.8); color: #6b7280; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.18s; flex-shrink: 0; }
// //   .mic:hover { background: #f0fdf4; color: #16a34a; }
// //   .mic-on { background: #fef2f2 !important; border-color: #fca5a5 !important; color: #dc2626 !important; }
// //   .send { width: 40px; height: 40px; border-radius: 10px; border: none; background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; box-shadow: 0 3px 10px rgba(22,163,74,0.28); }
// //   .send:hover:not(:disabled) { transform: scale(1.06); background: linear-gradient(135deg, #15803d, #166534); }
// //   .send:disabled { opacity: 0.32; cursor: not-allowed; }
// //   .inp-foot { margin-top: 4px; text-align: center; font-size: 9.5px; color: #9ca3af; }

// //   ::-webkit-scrollbar { width: 4px; }
// //   ::-webkit-scrollbar-track { background: transparent; }
// //   ::-webkit-scrollbar-thumb { background: #bbf7d0; border-radius: 3px; }

// //   @media (max-width: 600px) {
// //     .ban-body { padding: 11px 14px; }
// //     .ban-logo { width: 44px; height: 44px; }
// //     .ban-h1 { font-size: 13.5px; }
// //     .ban-pills { display: none; }
// //     .bbl { max-width: 86%; }
// //     .chat-wrap { padding: 8px 10px 10px; }
// //     .banner-wrap { padding: 10px 10px 0; }
// //     .pill-toggle.pill-open { left: 268px; }
// //     .sidebar { width: 265px; }
// //     .wc-topics { grid-template-columns: 1fr; }
// //   }
// // `;



// import { useState, useRef, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import collegeLogo from "../assets/cot.jpg";

// const CROP_TOPICS = [
//   { icon: "🍅", label: "टमाटर (Tomato)" },
//   { icon: "🧅", label: "प्याज (Onion)" },
//   { icon: "🥔", label: "आलू (Potato)" },
//   { icon: "🥦", label: "फूलगोभी (Cauliflower)" },
//   { icon: "🥕", label: "गाजर (Carrot)" },
//   { icon: "🌽", label: "मक्का (Maize)" },
//   { icon: "🌾", label: "गेहूँ (Wheat)" },
//   { icon: "🫘", label: "दाल (Pulses)" },
//   { icon: "🍎", label: "सेब (Apple)" },
//   { icon: "🫚", label: "सरसों (Mustard)" },
//   { icon: "🌿", label: "धनिया (Coriander)" },
// ];

// function BotMessage({ text }) {
//   return (
//     <div className="bot-content">
//       {text.split("\n").map((line, i) => {
//         const t = line.trim();
//         if (!t) return <div key={i} style={{ height: 5 }} />;
//         if (/^━+$/.test(t)) return <div key={i} className="msg-divider" />;
//         const sec = t.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
//         if (sec) return <div key={i} className="msg-section"><span>{sec[1]}</span><strong>{sec[2]}</strong></div>;
//         if (t.startsWith("•")) return <div key={i} className="msg-bullet"><span className="bdot" /><span>{t.slice(1).trim()}</span></div>;
//         return <p key={i} className="msg-text">{t}</p>;
//       })}
//     </div>
//   );
// }

// function TypingIndicator() {
//   return (
//     <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
//       <div className="bot-av">🌾</div>
//       <div className="typing-bbl">
//         {[0, 0.18, 0.36].map((d, i) => (
//           <div key={i} className="t-dot" style={{ animationDelay: `${d}s` }} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const Ico = {
//   Send: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   Mic: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/><line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
//   MicOff: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
//   Home: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   Plus: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
//   Speak: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
//   Copy: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/></svg>,
// };

// export default function Chatbot() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const farmerName = localStorage.getItem("farmerName") || null;
//   const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [chatId, setChatId] = useState(null);
//   const [isListening, setIsListening] = useState(false);
//   const [voiceSupported, setVoiceSupported] = useState(false);
//   const [voiceLang, setVoiceLang] = useState("hi-IN");
//   const [transcript, setTranscript] = useState("");
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [copiedId, setCopiedId] = useState(null);

//   const bottomRef = useRef(null);
//   const inputRef = useRef(null);
//   const recRef = useRef(null);

//   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
//   useEffect(() => { if (window.SpeechRecognition || window.webkitSpeechRecognition) setVoiceSupported(true); }, []);

//   useEffect(() => {
//     if (!token) return;
//     (async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
//         const data = await res.json();
//         if (data.length > 0) {
//           const msgs = data[0].messages || [];
//           setMessages(msgs); setChatId(data[0]._id);
//         } else {
//           const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } });
//           const chat = await cr.json(); setChatId(chat._id);
//         }
//       } catch {}
//     })();
//   }, []);

//   const startListening = useCallback(() => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return;
//     const r = new SR(); r.lang = voiceLang; r.interimResults = true;
//     r.onstart = () => setIsListening(true);
//     r.onresult = e => { const t = Array.from(e.results).map(x => x[0].transcript).join(""); setTranscript(t); setInput(t); };
//     r.onend = () => { setIsListening(false); setTranscript(""); };
//     r.onerror = () => { setIsListening(false); setTranscript(""); };
//     recRef.current = r; r.start();
//   }, [voiceLang]);

//   const stopListening = useCallback(() => { recRef.current?.stop(); setIsListening(false); }, []);
//   const toggleVoice = () => { if (isListening) { stopListening(); if (input.trim()) sendMessage(input); } else startListening(); };

//   const speakText = t => {
//     if (!window.speechSynthesis) return;
//     window.speechSynthesis.cancel();
//     const u = new SpeechSynthesisUtterance(t.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". "));
//     u.lang = voiceLang; u.rate = 0.92;
//     u.onstart = () => setIsSpeaking(true); u.onend = () => setIsSpeaking(false);
//     window.speechSynthesis.speak(u);
//   };

//   const copyText = (t, id) => { navigator.clipboard.writeText(t).then(() => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); }); };

//   const newChat = async () => {
//     try { const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } }); const chat = await cr.json(); setChatId(chat._id); } catch {}
//     setMessages([]); setInput(""); setSidebarOpen(false);
//   };

//   const saveMessage = async msg => {
//     if (!chatId || !token) return;
//     await fetch("http://localhost:5000/api/chats/message", { method: "POST", headers: { "Content-Type": "application/json", Authorization: token }, body: JSON.stringify({ chatId, message: msg }) }).catch(() => {});
//   };

//   const sendMessage = async text => {
//     const msg = (text || input).trim(); if (!msg || loading) return;
//     setInput("");
//     const um = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
//     await saveMessage(um); setMessages(p => [...p, um]); setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: msg, farmerName }) });
//       const data = await res.json();
//       if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
//       const bm = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
//       await saveMessage(bm); setMessages(p => [...p, bm]);
//     } catch { setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_e" }]); }
//     finally { setLoading(false); setTimeout(() => inputRef.current?.focus(), 80); }
//   };

//   const handleKey = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

//   return (
//     <>
//       <style>{CSS}</style>
//       <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />

//       <div className="root">

//         {/* ── GREEN PILL › — TOP LEFT CORNER ── */}
//         <button
//           className={`pill ${sidebarOpen ? "pill-open" : ""}`}
//           onClick={() => setSidebarOpen(p => !p)}
//         >
//           <span>{sidebarOpen ? "‹" : "›"}</span>
//         </button>

//         {/* ── LEFT SIDEBAR (menu) ── */}
//         <AnimatePresence>
//           {sidebarOpen && (
//             <>
//               <motion.div key="bd" className="sb-bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSidebarOpen(false)} />
//               <motion.aside key="sb" className="sidebar"
//                 initial={{ x: -295, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -295, opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 340, damping: 34 }}
//               >
//                 <div className="sb-head">
//                   <span style={{ fontSize: 22 }}>🌾</span>
//                   <div><div className="sb-name">AgroAI</div><div className="sb-tag">Crop Intelligence</div></div>
//                 </div>
//                 {farmerName && (
//                   <div className="sb-user">
//                     <div className="sb-av">{farmerName[0].toUpperCase()}</div>
//                     <div><div className="sb-uname">{farmerName}</div><div className="sb-utag">Registered Farmer</div></div>
//                   </div>
//                 )}
//                 <button className="sb-btn ob" onClick={() => navigate("/")}><Ico.Home /> Back to Home</button>
//                 <button className="sb-btn gb" onClick={newChat}><Ico.Plus /> New Conversation</button>
//                 <div className="sb-rule" />
//                 <div className="sb-sec">Voice Language</div>
//                 <div style={{ display: "flex", gap: 6 }}>
//                   {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([v, f, l]) => (
//                     <button key={v} className={`lang-btn ${voiceLang === v ? "lang-on" : ""}`} onClick={() => setVoiceLang(v)}>{f} {l}</button>
//                   ))}
//                 </div>
//                 <div className="sb-sec" style={{ marginTop: 16 }}>Market Status</div>
//                 <div className="sb-mandi">
//                   <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="ldot" /><b style={{ fontSize: 12, color: "#15803d" }}>Live Mandi Data</b></div>
//                   <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>📍 Haldwani · Uttarakhand</div>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 7 }}>
//                     {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => <span key={c} className="mpill">{c}</span>)}
//                   </div>
//                 </div>
//                 <div className="sb-tip">💡 <b>Pro tip:</b> Fasal ka naam aur matra batayein for best advice.</div>
//                 <div className="sb-foot">Made for farmers of Uttarakhand 🌾</div>
//               </motion.aside>
//             </>
//           )}
//         </AnimatePresence>

//         {/* ── MAIN AREA ── */}
//         <div className="main">

//           {/* COLLEGE BANNER — more gap from sides */}
//           <div className="banner-wrap">
//             <div className="banner">
//               <div className="ban-shine" />
//               <div className="ban-body">
//                 <div style={{ position: "relative", flexShrink: 0 }}>
//                   <img src={collegeLogo} alt="logo" className="ban-logo" />
//                   <div className="ban-ring" />
//                 </div>
//                 <div style={{ flex: 1, minWidth: 0 }}>
//                   <div className="ban-h1">प्रौद्योगिकी महाविद्यालय</div>
//                   <div className="ban-h2">College of Technology, Pantnagar</div>
//                   <div className="ban-h3">G.B. Pant University of Agriculture &amp; Technology</div>
//                 </div>
//                 <div className="ban-vline" />
//                 <div style={{ textAlign: "right", flexShrink: 0 }}>
//                   <div className="ban-appname">AgroAI</div>
//                   <div className="ban-appsub">Intelligent Crop Market Assistant</div>
//                   <div className="ban-pills">
//                     <span className="ban-pill">🌾 Live Mandi</span>
//                     <span className="ban-pill">🤖 AI Powered</span>
//                     <span className="ban-pill">🇮🇳 Uttarakhand</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="ban-foot">
//                 <span className="ban-quote">"Empowering farmers of Uttarakhand with AI-driven market intelligence"</span>
//                 <span className="ban-live"><span className="ldot-sm" /> Live Data Active</span>
//               </div>
//             </div>
//           </div>

//           {/* CONTENT ROW — chat + crops panel side by side */}
//           <div className="content-row">

//             {/* ── CHAT CARD ── */}
//             <div className="chat-wrap">
//               <div className="chat-card">

//                 {/* Chat header */}
//                 <header className="chat-hdr">
//                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                     <div className="hdr-av">🤖</div>
//                     <div>
//                       <div className="hdr-title">AgroAI Assistant</div>
//                       <div className="hdr-status"><span className="hdr-dot" /> Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}</div>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                     <AnimatePresence>
//                       {isSpeaking && (
//                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="spk-badge">
//                           {[0, 0.15, 0.3].map((d, i) => <span key={i} className="spk-bar" style={{ animationDelay: `${d}s` }} />)}
//                           Speaking
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                     <button className="hdr-btn" onClick={() => navigate("/")}><Ico.Home /></button>
//                   </div>
//                 </header>

//                 {/* Messages */}
//                 <div className="msgs">

//                   {/* Welcome shown when no messages yet */}
//                   {messages.length === 0 && (
//                     <motion.div className="welcome-inline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
//                       <div className="wi-heading">
//                         🙏 {farmerName ? `${farmerName} ji, AgroAI में आपका स्वागत है।` : "AgroAI में आपका स्वागत है।"}
//                       </div>
//                       <p className="wi-body">
//                         नमस्ते! मैं <strong>AgroAI</strong> हूँ — प्रौद्योगिकी महाविद्यालय, पंतनगर का
//                         AI-powered फसल बाजार सहायक। दाईं तरफ फसलों की सूची देखें और नीचे अपना सवाल पूछें।
//                       </p>
//                     </motion.div>
//                   )}

//                   <AnimatePresence initial={false}>
//                     {messages.map((msg, i) => (
//                       <motion.div key={msg.id || i}
//                         initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
//                         transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
//                         className={`mrow ${msg.sender === "user" ? "mrow-u" : "mrow-b"}`}
//                       >
//                         {msg.sender === "bot" && <div className="bot-av">🌾</div>}
//                         <div className={`bbl ${msg.sender === "user" ? "bbl-u" : "bbl-b"}`}>
//                           {msg.sender === "bot" ? <BotMessage text={msg.text} /> : <p className="utxt">{msg.text}</p>}
//                           {msg.meta && (
//                             <div className="meta">
//                               {msg.meta.crop && <span className="mchip">🌱 {msg.meta.crop}</span>}
//                               {msg.meta.location && <span className="mchip">📍 {msg.meta.location}</span>}
//                               {msg.meta.quantity > 0 && <span className="mchip">⚖️ {msg.meta.quantity}kg</span>}
//                               <span className="mchip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
//                             </div>
//                           )}
//                           <div className="bbl-foot">
//                             <span className="bbl-time">{msg.time}</span>
//                             {msg.sender === "bot" && (
//                               <div style={{ display: "flex", gap: 4 }}>
//                                 <button className="abt" onClick={() => speakText(msg.text)}><Ico.Speak /></button>
//                                 <button className="abt" onClick={() => copyText(msg.text, msg.id)}>{copiedId === msg.id ? "✓" : <Ico.Copy />}</button>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>

//                   {loading && <TypingIndicator />}
//                   <div ref={bottomRef} />
//                 </div>

//                 {/* Input */}
//                 <div className="inp-area">
//                   {isListening && (
//                     <div className="listen-bar">
//                       <div style={{ display: "flex", gap: 3 }}>{[...Array(5)].map((_, i) => <div key={i} className="lbar" style={{ animationDelay: `${i * 0.1}s` }} />)}</div>
//                       <span className="listen-txt">{transcript || "Listening..."}</span>
//                     </div>
//                   )}
//                   <div className="inp-row">
//                     <textarea ref={inputRef} className="inp" value={input}
//                       onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
//                       placeholder="यहाँ अपना प्रश्न लिखें..." rows={1} maxLength={500}
//                     />
//                     {voiceSupported && (
//                       <button className={`mic ${isListening ? "mic-on" : ""}`} onClick={toggleVoice}>
//                         {isListening ? <Ico.MicOff /> : <Ico.Mic />}
//                       </button>
//                     )}
//                     <button className="send" onClick={() => sendMessage()} disabled={!input.trim() || loading}><Ico.Send /></button>
//                   </div>
//                   <div className="inp-foot">AgroAI · Live mandi data + LLaMA AI · Prices are indicative</div>
//                 </div>

//               </div>
//             </div>

//             {/* ── PERMANENT CROPS PANEL — always visible, unclickable ── */}
//             <div className="crops-panel">
//               <div className="cp-title">आप मुझसे निम्नलिखित विषयों पर चर्चा कर सकते हैं:</div>
//               <div className="cp-list">
//                 {CROP_TOPICS.map((t, i) => (
//                   <div key={i} className="cp-item">
//                     <span className="cp-icon">{t.icon}</span>
//                     <span className="cp-label">{t.label}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="cp-footer">
//                 <span className="ldot" style={{ marginRight: 5 }} />
//                 <span>Live Mandi · Haldwani</span>
//               </div>
//             </div>

//           </div>{/* /content-row */}
//         </div>{/* /main */}
//       </div>{/* /root */}
//     </>
//   );
// }

// /* ══════════════════════════════════════════════════════════════ */
// const CSS = `
//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//   html, body { height: 100%; overflow: hidden; }
//   body { font-family: 'Segoe UI', 'Noto Sans', 'Noto Sans Devanagari', system-ui, sans-serif; background: #f5faf5; color: #1a1a1a; }

//   /* ── BLOBS ──────────────────────────────────── */
//   .blob { position: fixed; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
//   .b1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(187,247,208,0.55), transparent); top: -200px; left: -200px; animation: bf 16s ease-in-out infinite; }
//   .b2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(209,250,229,0.45), transparent); bottom: -150px; right: -150px; animation: bf 20s ease-in-out infinite reverse; }
//   .b3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(254,243,199,0.35), transparent); top: 35%; left: 45%; animation: bf 24s ease-in-out infinite; }
//   @keyframes bf { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(25px,-18px) scale(1.04); } 66% { transform: translate(-18px,22px) scale(0.97); } }

//   /* ── ROOT ───────────────────────────────────── */
//   .root { position: relative; height: 100vh; display: flex; overflow: hidden; z-index: 1; }

//   /* ── GREEN PILL › — TOP LEFT CORNER ────────── */
//   .pill {
//     position: fixed;
//     top: 16px;
//     left: 0;
//     z-index: 300;
//     background: #16a34a;
//     border: none;
//     border-radius: 0 22px 22px 0;
//     width: 30px;
//     height: 48px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 2px 0 16px rgba(22,163,74,0.38);
//     transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
//     padding: 0;
//   }
//   .pill span { color: #fff; font-size: 22px; font-weight: 700; line-height: 1; user-select: none; }
//   .pill:hover { width: 36px; background: #15803d; }
//   .pill.pill-open { left: 283px; background: #dc2626; }
//   .pill.pill-open:hover { background: #b91c1c; }

//   /* ── SIDEBAR ─────────────────────────────────── */
//   .sb-bd { position: fixed; inset: 0; background: rgba(0,0,0,0.16); backdrop-filter: blur(3px); z-index: 149; }
//   .sidebar {
//     position: fixed; top: 0; left: 0; width: 282px; height: 100vh;
//     background: rgba(255,255,255,0.97); backdrop-filter: blur(20px);
//     border-right: 1px solid rgba(22,163,74,0.14);
//     box-shadow: 6px 0 32px rgba(0,0,0,0.08);
//     display: flex; flex-direction: column;
//     padding: 20px 15px 15px; z-index: 150; overflow-y: auto;
//   }
//   .sb-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid rgba(22,163,74,0.1); }
//   .sb-name { font-size: 16px; font-weight: 700; color: #15803d; }
//   .sb-tag { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.7px; }
//   .sb-user { display: flex; align-items: center; gap: 9px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 8px 10px; margin-bottom: 12px; }
//   .sb-av { width: 30px; height: 30px; border-radius: 50%; background: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; }
//   .sb-uname { font-size: 12px; font-weight: 600; color: #15803d; }
//   .sb-utag { font-size: 10px; color: #9ca3af; }
//   .sb-btn { display: flex; align-items: center; gap: 8px; border-radius: 9px; cursor: pointer; font-size: 12.5px; padding: 8px 11px; width: 100%; margin-bottom: 6px; transition: all 0.18s; font-family: inherit; }
//   .ob { background: transparent; border: 1px solid #e5e7eb; color: #374151; }
//   .ob:hover { background: #f0fdf4; color: #15803d; border-color: #bbf7d0; }
//   .gb { background: #16a34a; border: none; color: #fff; font-weight: 600; justify-content: center; }
//   .gb:hover { background: #15803d; }
//   .sb-rule { height: 1px; background: rgba(22,163,74,0.1); margin: 9px 0; }
//   .sb-sec { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 7px; }
//   .lang-btn { flex: 1; padding: 7px; border-radius: 8px; border: 1px solid #e5e7eb; background: transparent; color: #6b7280; font-size: 12px; cursor: pointer; transition: all 0.18s; font-family: inherit; }
//   .lang-btn:hover { background: #f0fdf4; }
//   .lang-on { background: #dcfce7 !important; border-color: #16a34a !important; color: #15803d !important; font-weight: 600; }
//   .sb-mandi { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 10px 11px; }
//   .mpill { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 10.5px; color: #15803d; }
//   .ldot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; box-shadow: 0 0 6px #16a34a; display: inline-block; animation: pulse 2s infinite; }
//   .sb-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 8px 10px; font-size: 11px; color: #78716c; margin-top: 12px; line-height: 1.55; }
//   .sb-foot { margin-top: auto; padding-top: 12px; font-size: 10.5px; color: #9ca3af; text-align: center; }

//   /* ── MAIN ────────────────────────────────────── */
//   .main { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }

//   /* ── BANNER — generous side gap ─────────────── */
//   .banner-wrap { padding: 14px 28px 0 28px; flex-shrink: 0; }

//   .banner {
//     position: relative; overflow: hidden;
//     background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 45%, #b91c1c 100%);
//     border-radius: 12px;
//     box-shadow: 0 4px 22px rgba(127,29,29,0.3);
//     border: 1px solid rgba(255,255,255,0.06);
//   }
//   .ban-shine { position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%); animation: shine 5s infinite; }
//   @keyframes shine { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }
//   .ban-body { position: relative; display: flex; align-items: center; gap: 16px; padding: 13px 22px; }
//   .ban-logo { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.22); flex-shrink: 0; }
//   .ban-ring { position: absolute; inset: -3px; border-radius: 50%; border: 1.5px solid rgba(253,230,138,0.35); animation: spin 14s linear infinite; pointer-events: none; }
//   @keyframes spin { to { transform: rotate(360deg); } }
//   .ban-h1 { font-size: 16px; font-weight: 700; color: #fff; }
//   .ban-h2 { font-size: 12px; color: rgba(255,210,160,0.9); font-style: italic; margin-top: 1px; }
//   .ban-h3 { font-size: 11px; color: rgba(255,255,255,0.45); margin-top: 2px; }
//   .ban-vline { width: 1px; height: 48px; background: rgba(255,255,255,0.14); flex-shrink: 0; }
//   .ban-appname { font-size: 20px; font-weight: 800; color: #fde68a; font-style: italic; }
//   .ban-appsub { font-size: 9.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.8px; margin-top: 1px; }
//   .ban-pills { display: flex; gap: 4px; justify-content: flex-end; margin-top: 5px; flex-wrap: wrap; }
//   .ban-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 20px; padding: 1px 8px; font-size: 9.5px; color: rgba(255,255,255,0.82); }
//   .ban-foot { display: flex; justify-content: space-between; align-items: center; padding: 5px 22px; background: rgba(0,0,0,0.14); border-top: 1px solid rgba(255,255,255,0.06); flex-wrap: wrap; gap: 4px; }
//   .ban-quote { font-size: 10px; font-style: italic; color: rgba(255,255,200,0.58); }
//   .ban-live { display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: #86efac; font-weight: 600; }
//   .ldot-sm { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; display: inline-block; box-shadow: 0 0 5px #4ade80; animation: pulse 2s infinite; }
//   @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

//   /* ── CONTENT ROW — chat + crops side by side ── */
//   .content-row {
//     flex: 1;
//     display: flex;
//     gap: 14px;
//     padding: 12px 28px 16px 28px;
//     min-height: 0;
//     overflow: hidden;
//   }

//   /* ── CHAT WRAP ───────────────────────────────── */
//   .chat-wrap { flex: 1; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }

//   .chat-card {
//     flex: 1; display: flex; flex-direction: column; min-height: 0;
//     background: rgba(255,255,255,0.78);
//     backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
//     border: 1px solid rgba(255,255,255,0.92);
//     border-radius: 14px; overflow: hidden;
//     box-shadow: 0 8px 40px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.95) inset;
//   }

//   .chat-hdr { display: flex; align-items: center; justify-content: space-between; padding: 11px 15px; background: rgba(255,255,255,0.6); border-bottom: 1px solid rgba(22,163,74,0.1); flex-shrink: 0; }
//   .hdr-av { width: 33px; height: 33px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 15px; box-shadow: 0 2px 8px rgba(22,163,74,0.2); }
//   .hdr-title { font-size: 13.5px; font-weight: 700; color: #15803d; }
//   .hdr-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9ca3af; }
//   .hdr-dot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; animation: pulse 2s infinite; }
//   .hdr-btn { background: rgba(255,255,255,0.7); border: 1px solid rgba(22,163,74,0.18); color: #374151; padding: 6px 8px; border-radius: 8px; cursor: pointer; transition: all 0.18s; display: flex; align-items: center; }
//   .hdr-btn:hover { background: #f0fdf4; color: #15803d; }
//   .spk-badge { display: flex; align-items: center; gap: 5px; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 4px 10px; font-size: 11px; color: #15803d; }
//   .spk-bar { display: inline-block; width: 3px; height: 10px; background: #16a34a; border-radius: 2px; animation: wv 0.6s ease-in-out infinite alternate; }
//   @keyframes wv { to { height: 3px; } }

//   .msgs { flex: 1; overflow-y: auto; padding: 14px 15px 8px; display: flex; flex-direction: column; gap: 11px; scrollbar-width: thin; scrollbar-color: #bbf7d0 transparent; min-height: 0; }

//   /* ── INLINE WELCOME (stays until first message, small) ── */
//   .welcome-inline {
//     background: rgba(255,255,255,0.85);
//     border: 1px solid rgba(22,163,74,0.12);
//     border-radius: 12px;
//     padding: 18px 20px;
//     box-shadow: 0 2px 12px rgba(0,0,0,0.04);
//   }
//   /* Maroon bold heading — bigger font */
//   .wi-heading {
//     font-size: 22px;
//     font-weight: 800;
//     color: #7f1d1d;
//     margin-bottom: 8px;
//     line-height: 1.35;
//     letter-spacing: -0.2px;
//   }
//   .wi-body {
//     font-size: 15px;
//     font-weight: 500;
//     color: #374151;
//     line-height: 1.75;
//   }
//   .wi-body strong { color: #15803d; font-weight: 700; }

//   /* ── MESSAGE BUBBLES ─────────────────────────── */
//   .mrow { display: flex; align-items: flex-end; gap: 7px; }
//   .mrow-u { flex-direction: row-reverse; }
//   .bot-av { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(22,163,74,0.18); }
//   .bbl { max-width: 76%; border-radius: 14px; padding: 10px 13px; }
//   .bbl-u { background: linear-gradient(135deg, #16a34a, #15803d); border-bottom-right-radius: 3px; box-shadow: 0 3px 12px rgba(22,163,74,0.25); }
//   .bbl-b { background: rgba(255,255,255,0.92); border: 1px solid rgba(22,163,74,0.12); border-bottom-left-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
//   .utxt { font-size: 14px; color: #fff; line-height: 1.55; }
//   .bot-content { font-size: 13.5px; line-height: 1.68; color: #1f2937; }
//   .msg-text { margin-bottom: 3px; }
//   .msg-divider { height: 1px; background: #e5e7eb; margin: 6px 0; }
//   .msg-section { display: flex; align-items: center; gap: 6px; font-weight: 700; color: #15803d; font-size: 13px; margin: 6px 0 2px; }
//   .msg-bullet { display: flex; align-items: flex-start; gap: 7px; margin: 3px 0; font-size: 13px; color: #374151; }
//   .bdot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; flex-shrink: 0; margin-top: 7px; }
//   .meta { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
//   .mchip { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 10px; color: #15803d; }
//   .bbl-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 5px; gap: 8px; }
//   .bbl-time { font-size: 10px; color: #9ca3af; }
//   .abt { background: transparent; border: 1px solid #e5e7eb; color: #9ca3af; width: 22px; height: 22px; border-radius: 5px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; transition: all 0.15s; }
//   .abt:hover { background: #f0fdf4; color: #16a34a; border-color: #bbf7d0; }

//   /* ── TYPING ──────────────────────────────────── */
//   .typing-bbl { background: rgba(255,255,255,0.92); border: 1px solid rgba(22,163,74,0.12); border-radius: 14px; border-bottom-left-radius: 3px; padding: 12px 16px; display: flex; gap: 6px; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
//   .t-dot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; animation: tdot 1.2s ease-in-out infinite; }
//   @keyframes tdot { 0%,100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(-5px); opacity: 1; } }

//   /* ── INPUT ───────────────────────────────────── */
//   .inp-area { border-top: 1px solid rgba(22,163,74,0.08); background: rgba(255,255,255,0.5); flex-shrink: 0; padding: 9px 13px 7px; }
//   .listen-bar { display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 7px 11px; margin-bottom: 7px; }
//   .lbar { width: 3px; height: 13px; background: #16a34a; border-radius: 2px; animation: lv 0.6s ease-in-out infinite alternate; }
//   @keyframes lv { to { height: 3px; } }
//   .listen-txt { font-size: 12px; color: #16a34a; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
//   .inp-row { display: flex; align-items: flex-end; gap: 7px; }
//   .inp {
//     flex: 1; background: rgba(255,255,255,0.88);
//     border: 1.5px solid rgba(22,163,74,0.2); border-radius: 12px;
//     color: #1f2937; padding: 10px 13px; font-size: 14px;
//     resize: none; outline: none; line-height: 1.5; max-height: 88px;
//     overflow-y: auto; font-family: inherit;
//     transition: border-color 0.18s, box-shadow 0.18s;
//     box-shadow: 0 1px 4px rgba(0,0,0,0.04);
//   }
//   .inp:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.09); }
//   .inp::placeholder { color: #9ca3af; }
//   .mic { width: 40px; height: 40px; border-radius: 10px; border: 1.5px solid rgba(22,163,74,0.2); background: rgba(255,255,255,0.8); color: #6b7280; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.18s; flex-shrink: 0; }
//   .mic:hover { background: #f0fdf4; color: #16a34a; }
//   .mic-on { background: #fef2f2 !important; border-color: #fca5a5 !important; color: #dc2626 !important; }
//   .send { width: 40px; height: 40px; border-radius: 10px; border: none; background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; box-shadow: 0 3px 10px rgba(22,163,74,0.28); }
//   .send:hover:not(:disabled) { transform: scale(1.06); background: linear-gradient(135deg, #15803d, #166534); }
//   .send:disabled { opacity: 0.32; cursor: not-allowed; }
//   .inp-foot { margin-top: 4px; text-align: center; font-size: 9.5px; color: #9ca3af; }

//   /* ── PERMANENT CROPS PANEL ───────────────────── */
//   .crops-panel {
//     width: 210px;
//     flex-shrink: 0;
//     background: rgba(255,255,255,0.78);
//     backdrop-filter: blur(20px);
//     border: 1px solid rgba(255,255,255,0.9);
//     border-radius: 14px;
//     padding: 16px 14px 14px;
//     box-shadow: 0 8px 40px rgba(0,0,0,0.06);
//     display: flex;
//     flex-direction: column;
//     overflow-y: auto;
//     scrollbar-width: thin;
//     scrollbar-color: #bbf7d0 transparent;
//   }

//   /* Title — bigger bold Hindi like Pragyanam */
//   .cp-title {
//     font-size: 13px;
//     font-weight: 700;
//     color: #374151;
//     line-height: 1.55;
//     margin-bottom: 12px;
//     padding-bottom: 10px;
//     border-bottom: 1px solid rgba(22,163,74,0.12);
//   }

//   .cp-list { display: flex; flex-direction: column; gap: 2px; flex: 1; }

//   /* Each crop row — unclickable plain text like Pragyanam */
//   .cp-item {
//     display: flex;
//     align-items: center;
//     gap: 9px;
//     padding: 6px 4px;
//     border-radius: 6px;
//     cursor: default;
//     user-select: none;
//   }
//   .cp-icon { font-size: 17px; flex-shrink: 0; }
//   .cp-label {
//     font-size: 14px;
//     font-weight: 500;
//     color: #374151;
//     line-height: 1.4;
//   }

//   .cp-footer {
//     margin-top: 12px;
//     padding-top: 10px;
//     border-top: 1px solid rgba(22,163,74,0.1);
//     font-size: 10.5px;
//     color: #9ca3af;
//     display: flex;
//     align-items: center;
//   }

//   /* ── SCROLLBAR ───────────────────────────────── */
//   ::-webkit-scrollbar { width: 4px; }
//   ::-webkit-scrollbar-track { background: transparent; }
//   ::-webkit-scrollbar-thumb { background: #bbf7d0; border-radius: 3px; }

//   /* ── RESPONSIVE ──────────────────────────────── */
//   @media (max-width: 768px) {
//     .crops-panel { display: none; }
//     .content-row { padding: 10px 14px 12px; }
//     .banner-wrap { padding: 12px 14px 0; }
//     .bbl { max-width: 86%; }
//     .pill.pill-open { left: 268px; }
//     .sidebar { width: 265px; }
//   }
//   @media (max-width: 600px) {
//     .ban-body { padding: 11px 14px; }
//     .ban-logo { width: 44px; height: 44px; }
//     .ban-h1 { font-size: 13.5px; }
//     .ban-pills { display: none; }
//   }
// `;


import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import collegeLogo from "../assets/cot.jpg";

const CROP_TOPICS = [
  { icon: "🍅", label: "टमाटर (Tomato)" },
  { icon: "🧅", label: "प्याज (Onion)" },
  { icon: "🥔", label: "आलू (Potato)" },
  { icon: "🥦", label: "फूलगोभी (Cauliflower)" },
  { icon: "🥕", label: "गाजर (Carrot)" },
];

function BotMessage({ text }) {
  return (
    <div className="bot-content">
      {text.split("\n").map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{ height: 5 }} />;
        if (/^━+$/.test(t)) return <div key={i} className="msg-divider" />;
        const sec = t.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
        if (sec) return <div key={i} className="msg-section"><span>{sec[1]}</span><strong>{sec[2]}</strong></div>;
        if (t.startsWith("•")) return <div key={i} className="msg-bullet"><span className="bdot" /><span>{t.slice(1).trim()}</span></div>;
        return <p key={i} className="msg-text">{t}</p>;
      })}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
      <div className="bot-av">🌾</div>
      <div className="typing-bbl">
        {[0, 0.18, 0.36].map((d, i) => (
          <div key={i} className="t-dot" style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
    </div>
  );
}

const Ico = {
  Send: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Mic: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/><line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  MicOff: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  Home: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Plus: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
  Speak: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  Copy: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/></svg>,
};

export default function Chatbot() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const farmerName = localStorage.getItem("farmerName") || null;
  const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceLang, setVoiceLang] = useState("hi-IN");
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const recRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (window.SpeechRecognition || window.webkitSpeechRecognition) setVoiceSupported(true); }, []);

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
        const data = await res.json();
        if (data.length > 0) {
          const msgs = data[0].messages || [];
          setMessages(msgs); setChatId(data[0]._id);
        } else {
          const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } });
          const chat = await cr.json(); setChatId(chat._id);
        }
      } catch {}
    })();
  }, []);

  const startListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const r = new SR(); r.lang = voiceLang; r.interimResults = true;
    r.onstart = () => setIsListening(true);
    r.onresult = e => { const t = Array.from(e.results).map(x => x[0].transcript).join(""); setTranscript(t); setInput(t); };
    r.onend = () => { setIsListening(false); setTranscript(""); };
    r.onerror = () => { setIsListening(false); setTranscript(""); };
    recRef.current = r; r.start();
  }, [voiceLang]);

  const stopListening = useCallback(() => { recRef.current?.stop(); setIsListening(false); }, []);
  const toggleVoice = () => { if (isListening) { stopListening(); if (input.trim()) sendMessage(input); } else startListening(); };

  const speakText = t => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". "));
    u.lang = voiceLang; u.rate = 0.92;
    u.onstart = () => setIsSpeaking(true); u.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(u);
  };

  const copyText = (t, id) => { navigator.clipboard.writeText(t).then(() => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); }); };

  const newChat = async () => {
    try { const cr = await fetch("http://localhost:5000/api/chats", { method: "POST", headers: { Authorization: token } }); const chat = await cr.json(); setChatId(chat._id); } catch {}
    setMessages([]); setInput(""); setSidebarOpen(false);
  };

  const saveMessage = async msg => {
    if (!chatId || !token) return;
    await fetch("http://localhost:5000/api/chats/message", { method: "POST", headers: { "Content-Type": "application/json", Authorization: token }, body: JSON.stringify({ chatId, message: msg }) }).catch(() => {});
  };

  const sendMessage = async text => {
    const msg = (text || input).trim(); if (!msg || loading) return;
    setInput("");
    const um = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
    await saveMessage(um); setMessages(p => [...p, um]); setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: msg, farmerName }) });
      const data = await res.json();
      if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
      const bm = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
      await saveMessage(bm); setMessages(p => [...p, bm]);
    } catch { setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_e" }]); }
    finally { setLoading(false); setTimeout(() => inputRef.current?.focus(), 80); }
  };

  const handleKey = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  return (
    <>
      <style>{CSS}</style>
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />

      <div className="root">

        {/* ── GREEN PILL › — TOP LEFT CORNER ── */}
        <button
          className={`pill ${sidebarOpen ? "pill-open" : ""}`}
          onClick={() => setSidebarOpen(p => !p)}
        >
          <span>{sidebarOpen ? "‹" : "›"}</span>
        </button>

        {/* ── LEFT SIDEBAR (menu) ── */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div key="bd" className="sb-bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSidebarOpen(false)} />
              <motion.aside key="sb" className="sidebar"
                initial={{ x: -295, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -295, opacity: 0 }}
                transition={{ type: "spring", stiffness: 340, damping: 34 }}
              >
                <div className="sb-head">
                  <span style={{ fontSize: 22 }}>🌾</span>
                  <div><div className="sb-name">AgroAI</div><div className="sb-tag">Crop Intelligence</div></div>
                </div>
                {farmerName && (
                  <div className="sb-user">
                    <div className="sb-av">{farmerName[0].toUpperCase()}</div>
                    <div><div className="sb-uname">{farmerName}</div><div className="sb-utag">Registered Farmer</div></div>
                  </div>
                )}
                <button className="sb-btn ob" onClick={() => navigate("/")}><Ico.Home /> Back to Home</button>
                <button className="sb-btn gb" onClick={newChat}><Ico.Plus /> New Conversation</button>
                <div className="sb-rule" />
                <div className="sb-sec">Voice Language</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([v, f, l]) => (
                    <button key={v} className={`lang-btn ${voiceLang === v ? "lang-on" : ""}`} onClick={() => setVoiceLang(v)}>{f} {l}</button>
                  ))}
                </div>
                <div className="sb-sec" style={{ marginTop: 16 }}>Market Status</div>
                <div className="sb-mandi">
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="ldot" /><b style={{ fontSize: 12, color: "#15803d" }}>Live Mandi Data</b></div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>📍 Haldwani · Uttarakhand</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 7 }}>
                    {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => <span key={c} className="mpill">{c}</span>)}
                  </div>
                </div>
                <div className="sb-tip">💡 <b>Pro tip:</b> Fasal ka naam aur matra batayein for best advice.</div>
                <div className="sb-foot">Made for farmers of Uttarakhand 🌾</div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ── MAIN AREA ── */}
        <div className="main">

          {/* COLLEGE BANNER — more gap from sides */}
          <div className="banner-wrap">
            <div className="banner">
              <div className="ban-shine" />
              <div className="ban-body">
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <img src={collegeLogo} alt="logo" className="ban-logo" />
                  <div className="ban-ring" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="ban-h1">प्रौद्योगिकी महाविद्यालय</div>
                  <div className="ban-h2">College of Technology, Pantnagar</div>
                  <div className="ban-h3">G.B. Pant University of Agriculture &amp; Technology</div>
                </div>
                <div className="ban-vline" />
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div className="ban-appname">AgroAI</div>
                  <div className="ban-appsub">Intelligent Crop Market Assistant</div>
                 
                </div>
              </div>
              <div className="ban-foot">
                <span className="ban-quote">"Empowering farmers of Uttarakhand with AI-driven market intelligence"</span>
                {/* <span className="ban-live"><span className="ldot-sm" /> Live Data Active</span> */}
              </div>
            </div>
          </div>

          {/* CONTENT ROW — chat takes full width now */}
          <div className="content-row">

            {/* ── CHAT CARD ── */}
            <div className="chat-wrap">
              <div className="chat-card">

                {/* Chat header */}
                <header className="chat-hdr">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div className="hdr-av">🤖</div>
                    <div>
                      <div className="hdr-title">AgroAI Assistant</div>
                      <div className="hdr-status"><span className="hdr-dot" /> Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <AnimatePresence>
                      {isSpeaking && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="spk-badge">
                          {[0, 0.15, 0.3].map((d, i) => <span key={i} className="spk-bar" style={{ animationDelay: `${d}s` }} />)}
                          Speaking
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button className="hdr-btn" onClick={() => navigate("/")}><Ico.Home /></button>
                  </div>
                </header>

                {/* Messages */}
                <div className="msgs">

                  {/* Welcome shown when no messages yet */}
                  {messages.length === 0 && (
                    <motion.div className="welcome-inline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                      <div className="wi-heading">
                        🙏 {farmerName ? `${farmerName} ji, AgroAI में आपका स्वागत है।` : "AgroAI में आपका स्वागत है।"}
                      </div>
                      <p className="wi-body">
                        नमस्ते! मैं <strong>AgroAI</strong> हूँ — प्रौद्योगिकी महाविद्यालय, पंतनगर का
                        AI-powered फसल बाजार सहायक। दाईं तरफ फसलों की सूची देखें और नीचे अपना सवाल पूछें।
                      </p>

                  {/* <div className="cs-title">आप मुझसे निम्नलिखित विषयों पर चर्चा कर सकते हैं:</div> */}
                  <div className="cs-list">
                    {CROP_TOPICS.map((t, i) => (
                      <div key={i} className="cs-item">
                        <span>{t.icon}</span>
                        <span className="cs-label">{t.label}</span>
                      </div>
                    ))}
                  </div>
                
                    </motion.div>
                  )}

                  <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                      <motion.div key={msg.id || i}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className={`mrow ${msg.sender === "user" ? "mrow-u" : "mrow-b"}`}
                      >
                        {msg.sender === "bot" && <div className="bot-av">🌾</div>}
                        <div className={`bbl ${msg.sender === "user" ? "bbl-u" : "bbl-b"}`}>
                          {msg.sender === "bot" ? <BotMessage text={msg.text} /> : <p className="utxt">{msg.text}</p>}
                          {msg.meta && (
                            <div className="meta">
                              {msg.meta.crop && <span className="mchip">🌱 {msg.meta.crop}</span>}
                              {msg.meta.location && <span className="mchip">📍 {msg.meta.location}</span>}
                              {msg.meta.quantity > 0 && <span className="mchip">⚖️ {msg.meta.quantity}kg</span>}
                              <span className="mchip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
                            </div>
                          )}
                          <div className="bbl-foot">
                            <span className="bbl-time">{msg.time}</span>
                            {msg.sender === "bot" && (
                              <div style={{ display: "flex", gap: 4 }}>
                                <button className="abt" onClick={() => speakText(msg.text)}><Ico.Speak /></button>
                                <button className="abt" onClick={() => copyText(msg.text, msg.id)}>{copiedId === msg.id ? "✓" : <Ico.Copy />}</button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {loading && <TypingIndicator />}
                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="inp-area">
                  {isListening && (
                    <div className="listen-bar">
                      <div style={{ display: "flex", gap: 3 }}>{[...Array(5)].map((_, i) => <div key={i} className="lbar" style={{ animationDelay: `${i * 0.1}s` }} />)}</div>
                      <span className="listen-txt">{transcript || "Listening..."}</span>
                    </div>
                  )}
                  <div className="inp-row">
                    <textarea ref={inputRef} className="inp" value={input}
                      onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
                      placeholder="यहाँ अपना प्रश्न लिखें..." rows={1} maxLength={500}
                    />
                    {voiceSupported && (
                      <button className={`mic ${isListening ? "mic-on" : ""}`} onClick={toggleVoice}>
                        {isListening ? <Ico.MicOff /> : <Ico.Mic />}
                      </button>
                    )}
                    <button className="send" onClick={() => sendMessage()} disabled={!input.trim() || loading}><Ico.Send /></button>
                  </div>
                  <div className="inp-foot">AgroAI · Live mandi data + LLaMA AI · Prices are indicative</div>
                </div>

              </div>
            </div>

          </div>{/* /content-row */}
        </div>{/* /main */}
      </div>{/* /root */}
    </>
  );
}

/* ══════════════════════════════════════════════════════════════ */
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; }
  body { font-family: 'Segoe UI', 'Noto Sans', 'Noto Sans Devanagari', system-ui, sans-serif; background: #ffffff; color: #1a1a1a; }

  /* ── BLOBS ──────────────────────────────────── */
  .blob { position: fixed; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
  .b1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(187,247,208,0.35), transparent); top: -200px; left: -200px; animation: bf 16s ease-in-out infinite; }
  .b2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(209,250,229,0.3), transparent); bottom: -150px; right: -150px; animation: bf 20s ease-in-out infinite reverse; }
  .b3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(254,243,199,0.25), transparent); top: 35%; left: 45%; animation: bf 24s ease-in-out infinite; }
  @keyframes bf { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(25px,-18px) scale(1.04); } 66% { transform: translate(-18px,22px) scale(0.97); } }

  /* ── ROOT ───────────────────────────────────── */
  .root { position: relative; height: 100vh; display: flex; overflow: hidden; z-index: 1; }

  /* ── GREEN PILL › — TOP LEFT CORNER ────────── */
  .pill {
    position: fixed;
    top: 16px;
    left: 0;
    z-index: 300;
    background: #16a34a;
    border: none;
    border-radius: 0 22px 22px 0;
    width: 30px;
    height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 0 16px rgba(22,163,74,0.38);
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
    padding: 0;
  }
  .pill span { color: #fff; font-size: 22px; font-weight: 700; line-height: 1; user-select: none; }
  .pill:hover { width: 36px; background: #15803d; }
  .pill.pill-open { left: 283px; background: #dc2626; }
  .pill.pill-open:hover { background: #b91c1c; }

  /* ── SIDEBAR ─────────────────────────────────── */
  .sb-bd { position: fixed; inset: 0; background: rgba(0,0,0,0.16); backdrop-filter: blur(3px); z-index: 149; }
  .sidebar {
    position: fixed; top: 0; left: 0; width: 282px; height: 100vh;
    background: rgba(255,255,255,0.97); backdrop-filter: blur(20px);
    border-right: 1px solid rgba(22,163,74,0.14);
    box-shadow: 6px 0 32px rgba(0,0,0,0.08);
    display: flex; flex-direction: column;
    padding: 20px 15px 15px; z-index: 150; overflow-y: auto;
  }
  .sb-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid rgba(22,163,74,0.1); }
  .sb-name { font-size: 16px; font-weight: 700; color: #15803d; }
  .sb-tag { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.7px; }
  .sb-user { display: flex; align-items: center; gap: 9px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 8px 10px; margin-bottom: 12px; }
  .sb-av { width: 30px; height: 30px; border-radius: 50%; background: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; }
  .sb-uname { font-size: 12px; font-weight: 600; color: #15803d; }
  .sb-utag { font-size: 10px; color: #9ca3af; }
  .sb-btn { display: flex; align-items: center; gap: 8px; border-radius: 9px; cursor: pointer; font-size: 12.5px; padding: 8px 11px; width: 100%; margin-bottom: 6px; transition: all 0.18s; font-family: inherit; }
  .ob { background: transparent; border: 1px solid #e5e7eb; color: #374151; }
  .ob:hover { background: #f0fdf4; color: #15803d; border-color: #bbf7d0; }
  .gb { background: #16a34a; border: none; color: #fff; font-weight: 600; justify-content: center; }
  .gb:hover { background: #15803d; }
  .sb-rule { height: 1px; background: rgba(22,163,74,0.1); margin: 9px 0; }
  .sb-sec { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 7px; }
  .lang-btn { flex: 1; padding: 7px; border-radius: 8px; border: 1px solid #e5e7eb; background: transparent; color: #6b7280; font-size: 12px; cursor: pointer; transition: all 0.18s; font-family: inherit; }
  .lang-btn:hover { background: #f0fdf4; }
  .lang-on { background: #dcfce7 !important; border-color: #16a34a !important; color: #15803d !important; font-weight: 600; }
  .sb-mandi { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 10px 11px; }
  .mpill { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 10.5px; color: #15803d; }
  .ldot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; box-shadow: 0 0 6px #16a34a; display: inline-block; animation: pulse 2s infinite; }
  .sb-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 8px 10px; font-size: 11px; color: #78716c; margin-top: 12px; line-height: 1.55; }
  .sb-foot { margin-top: auto; padding-top: 12px; font-size: 10.5px; color: #9ca3af; text-align: center; }

  /* ── MAIN ────────────────────────────────────── */
  .main { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }

  /* ── BANNER — generous side gap ─────────────── */
  .banner-wrap { padding: 14px 40px 0 40px; flex-shrink: 0; }

  .banner {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 45%, #b91c1c 100%);
    border-radius: 12px;
    box-shadow: 0 4px 22px rgba(127,29,29,0.3);
    border: 1px solid rgba(255,255,255,0.06);
  }
  .ban-shine { position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%); animation: shine 5s infinite; }
  @keyframes shine { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }
  .ban-body { position: relative; display: flex; align-items: center; gap: 16px; padding: 13px 22px; }
  .ban-logo { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.22); flex-shrink: 0; }
  .ban-ring { position: absolute; inset: -3px; border-radius: 50%; border: 1.5px solid rgba(253,230,138,0.35); animation: spin 14s linear infinite; pointer-events: none; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .ban-h1 { font-size: 16px; font-weight: 700; color: #fff; }
  .ban-h2 { font-size: 12px; color: rgba(255,210,160,0.9); font-style: italic; margin-top: 1px; }
  .ban-h3 { font-size: 11px; color: rgba(255,255,255,0.45); margin-top: 2px; }
  .ban-vline { width: 1px; height: 48px; background: rgba(255,255,255,0.14); flex-shrink: 0; }
  .ban-appname { font-size: 20px; font-weight: 800; color: #fde68a; font-style: italic; }
  .ban-appsub { font-size: 9.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.8px; margin-top: 1px; }
  .ban-pills { display: flex; gap: 4px; justify-content: flex-end; margin-top: 5px; flex-wrap: wrap; }
  .ban-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 20px; padding: 1px 8px; font-size: 9.5px; color: rgba(255,255,255,0.82); }
  .ban-foot { display: flex; justify-content: space-between; align-items: center; padding: 5px 22px; background: rgba(0,0,0,0.14); border-top: 1px solid rgba(255,255,255,0.06); flex-wrap: wrap; gap: 4px; }
  .ban-quote { font-size: 10px; font-style: italic; color: rgba(255,255,200,0.58); }
  .ban-live { display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: #86efac; font-weight: 600; }
  .ldot-sm { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; display: inline-block; box-shadow: 0 0 5px #4ade80; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

  /* ── CONTENT ROW — chat + crops side by side ── */
  .content-row {
    flex: 1;
    display: flex;
    gap: 14px;
    padding: 12px 40px 16px 40px;
    min-height: 0;
    overflow: hidden;
  }

  /* ── CHAT WRAP ───────────────────────────────── */
  .chat-wrap { flex: 1; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }

  .chat-card {
    flex: 1; display: flex; flex-direction: column; min-height: 0;
    background: rgba(255,255,255,0.78);
    backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
    border: 1px solid rgba(255,255,255,0.92);
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 8px 40px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.95) inset;
  }

  .chat-hdr { display: flex; align-items: center; justify-content: space-between; padding: 11px 15px; background: rgba(255,255,255,0.6); border-bottom: 1px solid rgba(22,163,74,0.1); flex-shrink: 0; }
  .hdr-av { width: 33px; height: 33px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 15px; box-shadow: 0 2px 8px rgba(22,163,74,0.2); }
  .hdr-title { font-size: 13.5px; font-weight: 700; color: #15803d; }
  .hdr-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9ca3af; }
  .hdr-dot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; animation: pulse 2s infinite; }
  .hdr-btn { background: rgba(255,255,255,0.7); border: 1px solid rgba(22,163,74,0.18); color: #374151; padding: 6px 8px; border-radius: 8px; cursor: pointer; transition: all 0.18s; display: flex; align-items: center; }
  .hdr-btn:hover { background: #f0fdf4; color: #15803d; }
  .spk-badge { display: flex; align-items: center; gap: 5px; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 4px 10px; font-size: 11px; color: #15803d; }
  .spk-bar { display: inline-block; width: 3px; height: 10px; background: #16a34a; border-radius: 2px; animation: wv 0.6s ease-in-out infinite alternate; }
  @keyframes wv { to { height: 3px; } }

  .msgs { flex: 1; overflow-y: auto; padding: 14px 15px 8px; display: flex; flex-direction: column; gap: 11px; scrollbar-width: thin; scrollbar-color: #bbf7d0 transparent; min-height: 0; }

  /* ── INLINE WELCOME (stays until first message, small) ── */
  .welcome-inline {
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(22,163,74,0.12);
    border-radius: 12px;
    padding: 18px 20px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }
  /* Maroon bold heading — bigger font */
  .wi-heading {
    font-size: 22px;
    font-weight: 800;
    color: #7f1d1d;
    margin-bottom: 8px;
    line-height: 1.35;
    letter-spacing: -0.2px;
  }
  .wi-body {
    font-size: 15px;
    font-weight: 500;
    color: #374151;
    line-height: 1.75;
  }
  .wi-body strong { color: #15803d; font-weight: 700; }

  /* ── MESSAGE BUBBLES ─────────────────────────── */
  .mrow { display: flex; align-items: flex-end; gap: 7px; }
  .mrow-u { flex-direction: row-reverse; }
  .bot-av { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #16a34a, #15803d); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(22,163,74,0.18); }
  .bbl { max-width: 76%; border-radius: 14px; padding: 10px 13px; }
  .bbl-u { background: linear-gradient(135deg, #16a34a, #15803d); border-bottom-right-radius: 3px; box-shadow: 0 3px 12px rgba(22,163,74,0.25); }
  .bbl-b { background: rgba(255,255,255,0.92); border: 1px solid rgba(22,163,74,0.12); border-bottom-left-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .utxt { font-size: 14px; color: #fff; line-height: 1.55; }
  .bot-content { font-size: 13.5px; line-height: 1.68; color: #1f2937; }
  .msg-text { margin-bottom: 3px; }
  .msg-divider { height: 1px; background: #e5e7eb; margin: 6px 0; }
  .msg-section { display: flex; align-items: center; gap: 6px; font-weight: 700; color: #15803d; font-size: 13px; margin: 6px 0 2px; }
  .msg-bullet { display: flex; align-items: flex-start; gap: 7px; margin: 3px 0; font-size: 13px; color: #374151; }
  .bdot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; flex-shrink: 0; margin-top: 7px; }
  .meta { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
  .mchip { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 20px; padding: 2px 7px; font-size: 10px; color: #15803d; }
  .bbl-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 5px; gap: 8px; }
  .bbl-time { font-size: 10px; color: #9ca3af; }
  .abt { background: transparent; border: 1px solid #e5e7eb; color: #9ca3af; width: 22px; height: 22px; border-radius: 5px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; transition: all 0.15s; }
  .abt:hover { background: #f0fdf4; color: #16a34a; border-color: #bbf7d0; }

  /* ── TYPING ──────────────────────────────────── */
  .typing-bbl { background: rgba(255,255,255,0.92); border: 1px solid rgba(22,163,74,0.12); border-radius: 14px; border-bottom-left-radius: 3px; padding: 12px 16px; display: flex; gap: 6px; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .t-dot { width: 7px; height: 7px; border-radius: 50%; background: #16a34a; animation: tdot 1.2s ease-in-out infinite; }
  @keyframes tdot { 0%,100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(-5px); opacity: 1; } }

  /* ── INPUT ───────────────────────────────────── */
  .inp-area { border-top: 1px solid rgba(22,163,74,0.08); background: rgba(255,255,255,0.5); flex-shrink: 0; padding: 9px 13px 7px; }
  .listen-bar { display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 7px 11px; margin-bottom: 7px; }
  .lbar { width: 3px; height: 13px; background: #16a34a; border-radius: 2px; animation: lv 0.6s ease-in-out infinite alternate; }
  @keyframes lv { to { height: 3px; } }
  .listen-txt { font-size: 12px; color: #16a34a; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .inp-row { display: flex; align-items: flex-end; gap: 7px; }
  .inp {
    flex: 1; background: rgba(255,255,255,0.88);
    border: 1.5px solid rgba(22,163,74,0.2); border-radius: 12px;
    color: #1f2937; padding: 10px 13px; font-size: 14px;
    resize: none; outline: none; line-height: 1.5; max-height: 88px;
    overflow-y: auto; font-family: inherit;
    transition: border-color 0.18s, box-shadow 0.18s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  }
  .inp:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.09); }
  .inp::placeholder { color: #9ca3af; }
  .mic { width: 40px; height: 40px; border-radius: 10px; border: 1.5px solid rgba(22,163,74,0.2); background: rgba(255,255,255,0.8); color: #6b7280; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.18s; flex-shrink: 0; }
  .mic:hover { background: #f0fdf4; color: #16a34a; }
  .mic-on { background: #fef2f2 !important; border-color: #fca5a5 !important; color: #dc2626 !important; }
  .send { width: 40px; height: 40px; border-radius: 10px; border: none; background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; box-shadow: 0 3px 10px rgba(22,163,74,0.28); }
  .send:hover:not(:disabled) { transform: scale(1.06); background: linear-gradient(135deg, #15803d, #166534); }
  .send:disabled { opacity: 0.32; cursor: not-allowed; }
  .inp-foot { margin-top: 4px; text-align: center; font-size: 9.5px; color: #9ca3af; }

  /* ── CROPS STRIP — inside chat card, always visible ────── */
  .crops-strip {
    flex-shrink: 0;
    border-top: 1px solid rgba(22,163,74,0.1);
    background: rgba(248,255,248,0.7);
    padding: 10px 16px 8px;
  }
  .cs-title {
    font-size: 13px;
    font-weight: 700;
    color: #374151;
    margin-bottom: 8px;
    line-height: 1.5;
  }
  .cs-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
  }
  .cs-item {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: default;
    user-select: none;
    padding: 2px 0;
  }
  .cs-label {
    font-size: 13px;
    font-weight: 500;
    color: #374151;
  }

  /* ── SCROLLBAR ───────────────────────────────── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #bbf7d0; border-radius: 3px; }

  /* ── RESPONSIVE ──────────────────────────────── */
  @media (max-width: 768px) {
    .content-row { padding: 10px 16px 12px; }
    .banner-wrap { padding: 12px 16px 0; }
    .bbl { max-width: 86%; }
    .pill.pill-open { left: 268px; }
    .sidebar { width: 265px; }
    .cs-list { gap: 3px 10px; }
    .cs-label { font-size: 12px; }
  }
  @media (max-width: 600px) {
    .ban-body { padding: 11px 14px; }
    .ban-logo { width: 44px; height: 44px; }
    .ban-h1 { font-size: 13.5px; }
    .ban-pills { display: none; }
    .content-row { padding: 8px 10px 10px; }
    .banner-wrap { padding: 10px 10px 0; }
  }
`;