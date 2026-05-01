


import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import collegeLogo from "../assets/cot.jpg";

const CONTENT = {
  en: {
    tagline: "Your crop selling helper",
    subtitle: "Get today's mandi price, find buyers, and sell at the best rate — in Hindi or English.",
    cta: "Start Chatting",
    ctaSub: "Register Free",
    switchLang: "हिंदी में देखें",
    section1Title: "What can AgroAI do for you?",
    features: [
      { icon: "💰", title: "Today's Mandi Price", desc: "Know the latest price of tomato, potato, onion and more in Haldwani mandi right now." },
      { icon: "🛒", title: "Find Buyers", desc: "We'll tell you who is buying your crop today and where to go to get the best price." },
      { icon: "⏰", title: "Best Time to Sell", desc: "Not sure when to sell? AgroAI will tell you the right time so you earn more." },
      { icon: "🗣️", title: "Hindi & English", desc: "Talk to AgroAI in Hindi, Roman Hindi, or English — whatever is easy for you." },
      { icon: "🚫", title: "No Middleman", desc: "Sell directly. No broker cutting your profit. You keep what you earn." },
      { icon: "📱", title: "Works on Any Phone", desc: "Works on any mobile browser. No app download needed." },
    ],
    howTitle: "How to use AgroAI?",
    steps: [
      { n: "1", t: "Open the chatbot", d: "Click 'Start Chatting' and open AgroAI assistant." },
      { n: "2", t: "Type your crop", d: "Tell us what crop you have and how many kilos. Example: 'Tamatar 50 kg'" },
      { n: "3", t: "Get the answer", d: "AgroAI will instantly show you price, buyer, and the best advice." },
      { n: "4", t: "Sell and earn more", d: "Go to the right mandi at the right time and earn a better price." },
    ],
    cropsTitle: "Crops we help with",
    crops: [
      { e: "🍅", n: "Tomato" }, { e: "🧅", n: "Onion" }, { e: "🥔", n: "Potato" },
      { e: "🥦", n: "Cauliflower" }, { e: "🥕", n: "Carrot" }, { e: "🌽", n: "Maize" },
      { e: "🌾", n: "Wheat" }, { e: "🫘", n: "Pulses" }, { e: "🍎", n: "Apple" },
      { e: "🫚", n: "Mustard" }, { e: "🌿", n: "Coriander" }, { e: "🍐", n: "Pear" },
    ],
    quoteText: "Earlier the broker used to take 30%. Now I go directly to the mandi. AgroAI told me everything — where to go, when to go, and at what price to sell.",
    quoteName: "Ramesh Singh",
    quoteSub: "Farmer, Haldwani · Tomato Grower",
    finalTitle: "Your crops deserve the best price.",
    finalDesc: "Hundreds of farmers in Uttarakhand are already using AgroAI. Join them today — it's free.",
    finalCta: "Start for Free",
    footer: "© 2025 AgroAI · Made for farmers of Uttarakhand 🌾",
    madeFor: "Made for farmers of Haldwani · Kathgodam · Tikonia · Rudrapur",
    liveBadge: "Live for Haldwani farmers",
  },
  hi: {
    tagline: "आपकी फसल बेचने का सहायक",
    subtitle: "आज का मंडी भाव जानें, खरीदार ढूंढें और सबसे अच्छे दाम पर बेचें — हिंदी या अंग्रेज़ी में।",
    cta: "चैट शुरू करें",
    ctaSub: "मुफ़्त रजिस्टर करें",
    switchLang: "View in English",
    section1Title: "AgroAI आपके लिए क्या कर सकता है?",
    features: [
      { icon: "💰", title: "आज का मंडी भाव", desc: "टमाटर, आलू, प्याज और बाकी सब्ज़ियों का हल्द्वानी मंडी का ताज़ा भाव अभी जानें।" },
      { icon: "🛒", title: "खरीदार खोजें", desc: "हम बताएंगे आज कौन आपकी फसल खरीद रहा है और कहाँ जाने पर सबसे अच्छा दाम मिलेगा।" },
      { icon: "⏰", title: "बेचने का सही समय", desc: "कब बेचें यह नहीं पता? AgroAI सही समय बताएगा ताकि आप ज़्यादा कमा सकें।" },
      { icon: "🗣️", title: "हिंदी और अंग्रेज़ी", desc: "AgroAI से हिंदी, रोमन हिंदी या अंग्रेज़ी में बात करें — जो आसान लगे।" },
      { icon: "🚫", title: "बिचौलिया नहीं", desc: "सीधे बेचें। कोई दलाल आपका मुनाफ़ा नहीं काटेगा। जो कमाओ वो पूरा आपका।" },
      { icon: "📱", title: "किसी भी फोन पर", desc: "किसी भी मोबाइल ब्राउज़र पर चलता है। कोई ऐप डाउनलोड करने की ज़रूरत नहीं।" },
    ],
    howTitle: "AgroAI कैसे इस्तेमाल करें?",
    steps: [
      { n: "1", t: "चैटबॉट खोलें", d: "'चैट शुरू करें' पर क्लिक करें और AgroAI सहायक खोलें।" },
      { n: "2", t: "अपनी फसल बताएं", d: "हमें बताएं आपके पास कौन सी फसल है और कितने किलो। जैसे: 'टमाटर 50 किलो'" },
      { n: "3", t: "जवाब पाएं", d: "AgroAI तुरंत आपको भाव, खरीदार और सबसे अच्छी सलाह दिखाएगा।" },
      { n: "4", t: "बेचें और ज़्यादा कमाएं", d: "सही मंडी पर सही समय जाएं और बेहतर दाम पाएं।" },
    ],
    cropsTitle: "हम किन फसलों में मदद करते हैं",
    crops: [
      { e: "🍅", n: "टमाटर" }, { e: "🧅", n: "प्याज" }, { e: "🥔", n: "आलू" },
      { e: "🥦", n: "फूलगोभी" }, { e: "🥕", n: "गाजर" }, { e: "🌽", n: "मक्का" },
      { e: "🌾", n: "गेहूँ" }, { e: "🫘", n: "दाल" }, { e: "🍎", n: "सेब" },
      { e: "🫚", n: "सरसों" }, { e: "🌿", n: "धनिया" }, { e: "🍐", n: "नाशपाती" },
    ],
    quoteText: "पहले बिचौलिया 30% ले जाता था। अब सीधे मंडी जाता हूँ। AgroAI ने सब बता दिया — कहाँ जाना है, कब जाना है, कितने में बेचना है।",
    quoteName: "रमेश सिंह",
    quoteSub: "किसान, हल्द्वानी · टमाटर उगाने वाले",
    finalTitle: "आपकी फसल को सबसे अच्छा दाम मिलना चाहिए।",
    finalDesc: "उत्तराखंड के सैकड़ों किसान पहले से AgroAI इस्तेमाल कर रहे हैं। आज ही जुड़ें — बिल्कुल मुफ़्त।",
    finalCta: "मुफ़्त शुरू करें",
    footer: "© 2025 AgroAI · उत्तराखंड के किसानों के लिए बना 🌾",
    madeFor: "हल्द्वानी · काठगोदाम · टिकोनिया · रुद्रपुर के किसानों के लिए",
    liveBadge: "हल्द्वानी किसानों के लिए लाइव",
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  const [lang, setLang] = useState("hi");
  const c = CONTENT[lang];

  /* ── shared text colors for white bg ── */
  const T = {
    heading:  "#1a2e1a",
    body:     "#374151",
    muted:    "#6b7280",
    green:    "#15803d",
    card:     "#f0fdf4",
    cardBorder: "#bbf7d0",
    sectionBg: "#f8fffe",
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", fontFamily: "'Noto Sans', 'Segoe UI', sans-serif", color: T.heading }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #4ade80; color: #0f1a0c; }
      `}</style>

      {/* ══ COLLEGE BANNER — 10px margin left/right ══ */}
      <div style={{ padding: "16px 10px 0" }}>
        <div style={{
          background: "maroon",
          borderRadius: 14, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "18px 24px", flexWrap: "wrap" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img src={collegeLogo} alt="College Logo" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>प्रौद्योगिकी महाविद्यालय</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,200,150,0.9)", fontStyle: "italic", marginTop: 2 }}>College of Technology, Pantnagar</div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>G.B. Pant University of Agriculture &amp; Technology</div>
            </div>
            <div style={{ width: 1, height: 52, background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#ffd700", fontStyle: "italic" }}>AgroAI</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Intelligent Crop Market Assistant</div>
            </div>
          </div>
          <div style={{ background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "8px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
            <span style={{ fontSize: 11.5, fontStyle: "italic", color: "rgba(255,255,200,0.7)" }}>
              "Empowering farmers of Uttarakhand with AI-driven market intelligence"
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#4ade80", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px #4ade80" }} />
              Live Data Active
            </span>
          </div>
        </div>
      </div>

      {/* ══ NAVBAR MENU — 10px margin left/right ══ */}
      <div style={{ margin: "12px 10px 0" }}>
        <div style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: 12,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[
              { to: "/", label: lang === "hi" ? "होम" : "Home" },
              { to: "/about", label: lang === "hi" ? "हमारे बारे में" : "About" },
              { to: "/login", label: lang === "hi" ? "लॉगिन" : "Login" },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{
                padding: "6px 14px", borderRadius: 20,
                border: "1px solid #bbf7d0", color: T.green,
                fontSize: 13, fontWeight: 500, textDecoration: "none",
                transition: "all 0.18s", background: "transparent",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#dcfce7"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/signup" style={{
              padding: "6px 16px", borderRadius: 20,
              background: "#16a34a", color: "#fff",
              fontSize: 13, fontWeight: 700, textDecoration: "none",
            }}>
              🌾 {lang === "hi" ? "शुरू करें" : "Get Started"}
            </Link>
          </div>
          <button
            onClick={() => setLang(l => l === "hi" ? "en" : "hi")}
            style={{
              padding: "6px 14px", borderRadius: 20,
              border: "1px solid #bbf7d0", background: "#dcfce7",
              color: T.green, fontSize: 12.5, fontWeight: 600,
              cursor: "pointer", display: "flex", alignItems: "center", gap: 5,
            }}
          >
            🌐 {c.switchLang}
          </button>
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px 36px", textAlign: "center" }}>
        <motion.div {...fadeUp(0)} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.25)", borderRadius: 20, padding: "5px 14px", fontSize: 12.5, color: T.green, fontWeight: 600, marginBottom: 20 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block", boxShadow: "0 0 6px #16a34a" }} />
          {c.liveBadge}
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, color: T.heading, lineHeight: 1.35, marginBottom: 14 }}>
          {c.tagline}
        </motion.h1>

        <motion.p {...fadeUp(0.2)} style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: T.muted, lineHeight: 1.7, maxWidth: 580, margin: "0 auto 28px" }}>
          {c.subtitle}
        </motion.p>

        <motion.div {...fadeUp(0.3)} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/login" style={{
            padding: "12px 28px", borderRadius: 10,
            background: "#16a34a", color: "#fff",
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 7,
            boxShadow: "0 4px 14px rgba(22,163,74,0.3)",
          }}>
            🌾 {c.cta}
          </Link>
          <Link to="/signup" style={{
            padding: "12px 28px", borderRadius: 10,
            border: "1px solid #bbf7d0", color: T.green,
            fontSize: 15, fontWeight: 600, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 7,
          }}>
            {c.ctaSub}
          </Link>
        </motion.div>

        <motion.p {...fadeUp(0.4)} style={{ marginTop: 18, fontSize: 11.5, color: T.muted, letterSpacing: "0.5px" }}>
          {c.madeFor}
        </motion.p>
      </section>

      {/* ══ FEATURES ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 40px" }}>
        <motion.h2 {...fadeUp()} style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 700, color: T.heading, marginBottom: 20, textAlign: "center" }}>
          {c.section1Title}
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
          {c.features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.07)}
              style={{ background: T.card, border: "1px solid #bbf7d0", borderRadius: 12, padding: "18px 16px" }}
            >
              <div style={{ fontSize: 26, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: T.heading, marginBottom: 5 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CROPS ══ */}
      <section style={{ background: T.sectionBg, padding: "36px 20px", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.h2 {...fadeUp()} style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 700, color: T.heading, marginBottom: 18, textAlign: "center" }}>
            {c.cropsTitle}
          </motion.h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {c.crops.map((cr, i) => (
              <motion.div key={i} {...fadeUp(i * 0.04)}
                style={{
                  background: "#fff", border: "1px solid #bbf7d0",
                  borderRadius: 10, padding: "9px 16px",
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 13.5, color: T.body, fontWeight: 500,
                  cursor: "default", boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <span style={{ fontSize: 20 }}>{cr.e}</span>
                {cr.n}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW TO USE ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <motion.h2 {...fadeUp()} style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 700, color: T.heading, marginBottom: 24, textAlign: "center" }}>
          {c.howTitle}
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          {c.steps.map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}
              style={{
                background: T.card, border: "1px solid #bbf7d0",
                borderRadius: 12, padding: "18px 16px",
                display: "flex", flexDirection: "column", gap: 10,
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "#16a34a", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, flexShrink: 0,
              }}>{s.n}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: T.heading }}>{s.t}</div>
              <div style={{ fontSize: 12.5, color: T.muted, lineHeight: 1.6 }}>{s.d}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CHAT DEMO ══ */}
      <section style={{ background: T.sectionBg, padding: "36px 20px", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <motion.h2 {...fadeUp()} style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 700, color: T.heading, marginBottom: 18, textAlign: "center" }}>
            {lang === "hi" ? "ऐसे काम करता है AgroAI 👇" : "See how AgroAI works 👇"}
          </motion.h2>
          <motion.div {...fadeUp(0.1)} style={{ background: "#fff", border: "1px solid #bbf7d0", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
            <div style={{ background: T.card, borderBottom: "1px solid #bbf7d0", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🌾</div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: T.green }}>AgroAI</div>
                <div style={{ fontSize: 11, color: "#16a34a" }}>● Online</div>
              </div>
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "#16a34a", color: "#fff", borderRadius: "12px 12px 3px 12px", padding: "10px 14px", fontSize: 13.5, maxWidth: "80%" }}>
                  {lang === "hi" ? "हल्द्वानी में टमाटर 80 किलो कहाँ बेचूँ?" : "Haldwani me tamatar 80 kg kahan bechun?"}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: T.card, border: "1px solid #bbf7d0", borderRadius: "12px 12px 12px 3px", padding: "12px 14px", fontSize: 13, color: T.body, maxWidth: "90%", lineHeight: 1.65 }}>
                  <div style={{ marginBottom: 6 }}>📍 <strong style={{ color: T.green }}>{lang === "hi" ? "कहाँ जाएं" : "Where to go"}</strong><br />
                    <span style={{ color: T.muted }}>{lang === "hi" ? "टिकोनिया बाज़ार या नवीन मंडी हल्द्वानी" : "Tikonia Bazaar or Naveen Mandi Haldwani"}</span>
                  </div>
                  <div style={{ marginBottom: 6 }}>💰 <strong style={{ color: T.green }}>{lang === "hi" ? "आज का भाव" : "Today's price"}</strong><br />
                    <span style={{ color: T.muted }}>{lang === "hi" ? "₹18–₹26 प्रति किलो" : "₹18–₹26 per kg"}</span>
                  </div>
                  <div style={{ marginBottom: 6 }}>⏰ <strong style={{ color: T.green }}>{lang === "hi" ? "सही समय" : "Best time"}</strong><br />
                    <span style={{ color: T.muted }}>{lang === "hi" ? "सुबह 5–9 बजे — सबसे ज़्यादा माँग" : "5–9 AM — highest demand"}</span>
                  </div>
                  <div>🚜 <strong style={{ color: T.green }}>{lang === "hi" ? "ज़रूरी सलाह" : "Pro tip"}</strong><br />
                    <span style={{ color: T.muted }}>{lang === "hi" ? "पके और कच्चे टमाटर अलग करके ले जाएं" : "Sort ripe and raw tomatoes before selling"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ QUOTE ══ */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "40px 20px", textAlign: "center" }}>
        <motion.div {...fadeUp()} style={{ background: T.card, border: "1px solid #bbf7d0", borderRadius: 14, padding: "28px 24px" }}>
          <div style={{ fontSize: 32, color: "rgba(22,163,74,0.2)", marginBottom: 10 }}>"</div>
          <blockquote style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: T.body, lineHeight: 1.8, marginBottom: 18, fontStyle: "italic" }}>
            {c.quoteText}
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#fff" }}>
              {lang === "hi" ? "र" : "RS"}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: T.heading }}>{c.quoteName}</div>
              <div style={{ fontSize: 11.5, color: T.muted }}>{c.quoteSub}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section style={{ background: T.sectionBg, padding: "44px 20px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <motion.div {...fadeUp()} style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 700, color: T.heading, marginBottom: 12, lineHeight: 1.4 }}>
            {c.finalTitle}
          </h2>
          <p style={{ fontSize: 14.5, color: T.muted, marginBottom: 24, lineHeight: 1.7 }}>
            {c.finalDesc}
          </p>
          <Link to="/signup" style={{
            display: "inline-block", padding: "13px 36px",
            background: "#16a34a", color: "#fff",
            borderRadius: 10, fontSize: 15, fontWeight: 700,
            textDecoration: "none", boxShadow: "0 4px 14px rgba(22,163,74,0.3)",
          }}>
            🚀 {c.finalCta}
          </Link>
        </motion.div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "16px 20px", textAlign: "center", fontSize: 11.5, color: T.muted }}>
        {c.footer}
      </footer>

    </div>
  );
}