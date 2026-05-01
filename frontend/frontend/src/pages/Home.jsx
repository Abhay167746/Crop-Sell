

// import { motion } from "framer-motion";
// import { useContext } from "react";
// import { LanguageContext } from "../context/LanguageContext";
// import { Link } from "react-router-dom";
// import bgImage from "../assets/bb1.avif";

// function Home() {
//   const { language } = useContext(LanguageContext);

//   const text = {
//     en: {
//       titleTop: "Smart Crop Selling",
//       titleBottom: "Powered by AI",
//       desc:
//         "An AI assistant helping farmers find the right buyers, better prices, and smarter selling decisions.",
//       ctaPrimary: "Talk to AI",
//       ctaSecondary: "Farmer Registration",
//     },
//   };

//   const t = text[language] || text.en;

//   return (
//     <div className="bg-white">

//       {/* HERO */}
//       <section
//         className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-green-900/40"></div>

//         {/* Glow Effect */}
//         <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 px-6 max-w-4xl"
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             {t.titleTop}
//           </h1>

//           <h2 className="text-5xl md:text-7xl font-extrabold text-green-400 mt-2">
//             {t.titleBottom}
//           </h2>

//           <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
//             {t.desc}
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

//             <Link
//               to="/login"
//               className="bg-green-600 px-10 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105 shadow-xl"
//             >
//               🌾 {t.ctaPrimary}
//             </Link>

//             <Link
//               to="/signup"
//               className="bg-white/20 border border-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-white/30 backdrop-blur-md transition"
//             >
//               {t.ctaSecondary}
//             </Link>

//           </div>

//           {/* Trust Badge */}
//           <p className="mt-6 text-sm text-gray-300">
//             Trusted by farmers across Uttarakhand 🌾
//           </p>
//         </motion.div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-24 bg-gradient-to-b from-white to-green-50">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

//           {[
//             {
//               title: "Farmer Friendly",
//               desc: "Simple and easy to use, even for non-tech users.",
//               icon: "🌱",
//             },
//             {
//               title: "Better Profit",
//               desc: "Sell directly and avoid middlemen losses.",
//               icon: "💰",
//             },
//             {
//               title: "AI Guidance",
//               desc: "Smart suggestions for selling crops efficiently.",
//               icon: "🤖",
//             },
//           ].map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.08 }}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               className="bg-white rounded-2xl p-8 shadow-xl text-center border hover:shadow-2xl transition"
//             >
//               <div className="text-5xl mb-4">{f.icon}</div>
//               <h3 className="text-xl font-bold text-green-800">
//                 {f.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{f.desc}</p>
//             </motion.div>
//           ))}

//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="py-24 bg-gradient-to-r from-green-700 to-green-900 text-white text-center relative overflow-hidden">

//         {/* Background glow */}
//         <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[100px] rounded-full top-[-100px] right-[-100px]"></div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="max-w-3xl mx-auto px-6 relative z-10"
//         >
//           <h2 className="text-4xl font-bold mb-4">
//             Start Selling Smarter 🚀
//           </h2>

//           <p className="mb-6 text-gray-200">
//             Join AgroAI and maximize your crop profits with AI-powered insights.
//           </p>

//           <Link
//             to="/signup"
//             className="bg-white text-green-700 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
//           >
//             Get Started
//           </Link>
//         </motion.div>
//       </section>

//     </div>
//   );
// }

// export default Home;



import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import bgImage from "../assets/bb1.avif";

// ── Floating particle blob ──────────────────────────────────────────────────
function Blob({ className }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -6, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
    />
  );
}

// ── Stat counter card ───────────────────────────────────────────────────────
function StatCard({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <span
        className="text-4xl md:text-5xl font-black"
        style={{ fontFamily: "'Playfair Display', serif", color: "#BBEC6C" }}
      >
        {value}
      </span>
      <span className="text-sm text-green-200 mt-1 tracking-widest uppercase">
        {label}
      </span>
    </motion.div>
  );
}

// ── Feature card ────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group rounded-3xl p-8 overflow-hidden cursor-default"
      style={{
        background: "linear-gradient(135deg, #ffffff08, #ffffff04)",
        border: "1px solid rgba(187,236,108,0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(187,236,108,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
        style={{ background: "rgba(187,236,108,0.12)", border: "1px solid rgba(187,236,108,0.2)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-green-300 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

// ── Step card ───────────────────────────────────────────────────────────────
function StepCard({ number, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="flex gap-5 items-start"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
        style={{ background: "#BBEC6C", color: "#0D2B0E", fontFamily: "'Playfair Display', serif" }}
      >
        {number}
      </div>
      <div>
        <h4 className="font-bold text-white text-lg mb-1">{title}</h4>
        <p className="text-green-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ── MAIN HOME ───────────────────────────────────────────────────────────────
export default function Home() {
  const { language } = useContext(LanguageContext);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    { icon: "🌱", title: "Farmer First", desc: "Designed for real farmers — simple Hindi & English chat that anyone can use, no tech skills needed." },
    { icon: "💰", title: "Maximum Profit", desc: "Skip the middlemen. Get live mandi prices and find direct buyers who pay fair rates." },
    { icon: "🤖", title: "AI-Powered Brain", desc: "LLaMA AI understands your crop, quantity, and location to give hyper-local advice instantly." },
    { icon: "📍", title: "Hyper-Local", desc: "Built specifically for Haldwani and Uttarakhand — real mandis, real buyers, real prices." },
    { icon: "⚡", title: "Instant Answers", desc: "No waiting, no forms. Ask a question, get a structured answer in seconds." },
    { icon: "🌐", title: "Hindi + English", desc: "Talk in your language. AgroAI understands Roman Hindi, Devanagari, and English fluently." },
  ];

  const steps = [
    { number: "01", title: "Tell us your crop", desc: "Type your crop name and quantity in Hindi or English — however you're comfortable." },
    { number: "02", title: "AI fetches live data", desc: "AgroAI pulls live mandi prices and location-specific buyer information instantly." },
    { number: "03", title: "Get your selling plan", desc: "Receive a clear breakdown: best buyers, today's price, best time, and pro tips." },
    { number: "04", title: "Sell smarter & earn more", desc: "Go to market with confidence, eliminate middlemen, and maximize your income." },
  ];

  return (
    <div className="pt-20"
     style={{ background: "#070F07", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        ::selection { background: #BBEC6C; color: #0D2B0E; }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax BG */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.25) saturate(0.6)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,15,7,0.3) 0%, rgba(7,15,7,0.95) 100%)" }} />
        </motion.div>

        {/* Animated blobs */}
        <Blob className="w-[600px] h-[600px] bg-green-500 top-[-200px] left-[-200px]" />
        <Blob className="w-[400px] h-[400px] bg-lime-400 bottom-[-100px] right-[-100px]" />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(187,236,108,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(187,236,108,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium"
            style={{ background: "rgba(187,236,108,0.12)", border: "1px solid rgba(187,236,108,0.3)", color: "#BBEC6C" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            Now live for Haldwani farmers
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sell Your Crops
            <br />
            {/* <span style={{ color: "#BBEC6C" }}>10× Smarter.</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-green-200 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            AgroAI is your AI-powered mandi advisor — giving farmers in Uttarakhand live prices,
            direct buyers, and expert guidance in Hindi or English. No middlemen. No confusion.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link
              to="/login"
              className="group relative overflow-hidden rounded-full px-10 py-4 text-base font-semibold transition-all"
              style={{ background: "#BBEC6C", color: "#0D2B0E" }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                🌾 Talk to AgroAI
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#d4f77a" }}
              />
            </Link>

            <Link
              to="/signup"
              className="rounded-full px-10 py-4 text-base font-semibold transition-all"
              style={{
                background: "transparent",
                border: "1px solid rgba(187,236,108,0.4)",
                color: "#BBEC6C",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(187,236,108,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Register as Farmer
            </Link>
          </motion.div>

          {/* Proof line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-xs tracking-widest uppercase text-green-500"
          >
            Built for farmers of Haldwani · Kathgodam · Tikonia · Rudrapur
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-xs text-green-400 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10" style={{ background: "linear-gradient(to bottom, #BBEC6C, transparent)" }} />
        </motion.div>
      </section>

  

      {/* ═══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-lime-400 mb-3">Why AgroAI</p>
          <h2
            className="text-4xl md:text-6xl font-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything a farmer<br />
            <span style={{ color: "#BBEC6C" }}>needs to win.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => <FeatureCard key={i} {...f} index={i} />)}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B1F0B 0%, #0D2B0E 100%)" }}
      >
        <Blob className="w-[500px] h-[500px] bg-green-700 top-[-200px] right-[-100px] opacity-20" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-widest text-lime-400 mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From question<br />
              <span style={{ color: "#BBEC6C" }}>to profit</span> in seconds.
            </motion.h2>
            <div className="space-y-8">
              {steps.map((s, i) => <StepCard key={i} {...s} index={i} />)}
            </div>
          </div>

          {/* Right: mock chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(187,236,108,0.15)" }}
          >
            {/* chat header */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{ background: "rgba(187,236,108,0.08)", borderBottom: "1px solid rgba(187,236,108,0.1)" }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ background: "#BBEC6C" }}>🌾</div>
              <div>
                <p className="font-semibold text-white text-sm">AgroAI</p>
                <p className="text-xs text-lime-400">● Online</p>
              </div>
            </div>
            {/* messages */}
            <div className="p-5 space-y-4" style={{ background: "#0A170A" }}>
              {/* user msg */}
              <div className="flex justify-end">
                <div
                  className="rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[80%]"
                  style={{ background: "#BBEC6C", color: "#0D2B0E", fontWeight: 500 }}
                >
                  Haldwani me tamatar 80 kg kahan bechun?
                </div>
              </div>
              {/* ai response */}
              <div className="flex justify-start">
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-4 text-sm max-w-[90%] leading-relaxed space-y-2"
                  style={{ background: "rgba(187,236,108,0.07)", border: "1px solid rgba(187,236,108,0.12)", color: "#d1fae5" }}
                >
                  <p>📍 <strong className="text-white">कहाँ बेचें</strong><br />टिकोनिया बाज़ार या नवीन मंडी हल्द्वानी जाएँ</p>
                  <p>💰 <strong className="text-white">आज का भाव</strong><br />₹18–₹26 प्रति किलो (आज का रेट)</p>
                  <p>⏰ <strong className="text-white">सही समय</strong><br />सुबह ५–९ बजे — सबसे ज़्यादा माँग होती है</p>
                  <p>🚜 <strong className="text-white">ज़रूरी सलाह</strong><br />बेचने से पहले पके और कच्चे टमाटर अलग करें</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIAL / QUOTE
      ══════════════════════════════════════ */}
      <section className="py-28 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-5xl mb-6" style={{ color: "rgba(187,236,108,0.3)" }}>"</p>
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "#e8fce8" }}
          >
            Pehle middleman 30% le jaata tha. Ab seedha mandi jaata hoon.
            AgroAI ne sab bata diya — kahan jaana hai, kab jaana hai, kitne mein bechna hai.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "#BBEC6C", color: "#0D2B0E" }}
            >
              RS
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">Ramesh Singh</p>
              <p className="text-green-500 text-xs">Farmer, Haldwani · Tomato grower</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#0D2B0E" }}>
        <Blob className="w-[700px] h-[700px] bg-lime-600 top-[-300px] left-[50%] -translate-x-1/2 opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your crops deserve
            <br />
            <span style={{ color: "#BBEC6C" }}>the best price.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-300 text-lg mb-10"
          >
            Join hundreds of farmers already using AgroAI to sell smarter across Uttarakhand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/signup"
              className="rounded-full px-12 py-4 text-base font-bold transition-all duration-300"
              style={{ background: "#BBEC6C", color: "#0D2B0E" }}
              onMouseEnter={e => e.currentTarget.style.background = "#d4f77a"}
              onMouseLeave={e => e.currentTarget.style.background = "#BBEC6C"}
            >
              🚀 Get Started Free
            </Link>
            <Link
              to="/login"
              className="rounded-full px-12 py-4 text-base font-semibold transition-all"
              style={{ border: "1px solid rgba(187,236,108,0.3)", color: "#BBEC6C" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(187,236,108,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Already registered? Login
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-2 text-center text-xs text-green-700 tracking-widest uppercase"
        style={{ borderTop: "1px solid rgba(187,236,108,0.08)" }}
      >
        © 2025 AgroAI · Built for farmers of Uttarakhand 🌾
      </footer>

    </div>
  );
}