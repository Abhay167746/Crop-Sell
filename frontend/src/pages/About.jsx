import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collegeLogo from "../assets/cot.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

function About() {
  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{
        background: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
        color: "#111827",
      }}
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute w-[700px] h-[700px] bg-green-200 opacity-30 blur-3xl rounded-full top-[-250px] left-[-250px]" />

      <div className="absolute w-[500px] h-[500px] bg-lime-100 opacity-40 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      {/* ===== COLLEGE BANNER ===== */}
      <div className="relative z-20 px-3 pt-4">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#7f1d1d 0%, #991b1b 45%, #b91c1c 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}
        >
          <div className="flex items-center gap-5 px-6 py-5 flex-wrap">
            <img
              src={collegeLogo}
              alt="logo"
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            />

            <div className="flex-1 min-w-[200px]">
              <div className="text-white font-bold text-lg">
                प्रौद्योगिकी महाविद्यालय
              </div>

              <div className="text-orange-100 italic text-sm">
                College of Technology, Pantnagar
              </div>

              <div className="text-white/50 text-xs mt-1">
                G.B. Pant University of Agriculture & Technology
              </div>
            </div>

            <div className="w-px h-14 bg-white/20 hidden md:block" />

            <div className="text-right">
              <div className="text-yellow-300 text-3xl font-black italic">
                AgroAI
              </div>

              <div className="text-white/50 text-[10px] uppercase tracking-widest">
                Intelligent Crop Market Assistant
              </div>
            </div>
          </div>

          <div className="bg-black/20 border-t border-white/10 px-6 py-2 flex justify-between items-center flex-wrap gap-2">
            <span className="text-[11px] italic text-yellow-100/70">
              "Empowering farmers with AI-driven market intelligence"
            </span>

            <span className="flex items-center gap-2 text-green-400 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live Data Active
            </span>
          </div>
        </div>
      </div>

      {/* ===== PROJECT INFO ===== */}
      <div className="relative z-20 px-3 mt-3">
        <div
          className="rounded-2xl px-6 py-5"
          style={{
            background: "rgba(240,253,244,0.75)",
            border: "1px solid rgba(22,163,74,0.12)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            {/* LEFT */}
            <div>
              <div className="text-m font-semibold text-green-700 uppercase tracking-wider mb-1">
                SDS Project
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                AgroAI – Intelligent Crop Market Assistant
              </h2>

              <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed max-w-3xl">
                Developed as part of the SDS Project to empower farmers using
                AI-powered market intelligence, smart crop-selling strategies,
                live mandi prices, and multilingual AI guidance.
              </p>
            </div>

            {/* RIGHT */}
            <div className="min-w-[280px]">
              <div className="bg-white rounded-xl border border-green-100 p-4 shadow-sm">
                <div className="text-sm font-bold text-green-700 mb-3">
                  Project Team
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <div>👨‍💻 Abhay Tiwari</div>
                  <div>👨‍💻 Ishagra Badoni</div>
                  <div>👨‍💻 Aakarsh Chandola</div>
                  <div>👨‍💻 Nitin Rawat</div>
                </div>

                <div className="h-px bg-green-100 my-4" />

                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-green-700">
                    Under the Guidance of
                  </span>
                  <br />
                  Dr. S. D. Samantaray
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* ===== HERO ===== */}
      <section className="max-w-6xl mx-auto text-center px-6 pt-24 pb-20 relative z-10">
        <motion.div
          {...fadeUp()}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/20 bg-green-50 text-green-700 text-sm font-semibold mb-8"
        >
          🌾 AI Powered Agriculture Platform
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-black mb-8 leading-tight text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Not Just a Platform.
          <br />
          <span className="text-green-600">
            A Farmer’s Advantage.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          AgroAI gives farmers real-time mandi insights, selling
          strategies, and AI-powered guidance — helping them earn more with
          confidence, transparency, and better market access.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex justify-center gap-4 flex-wrap mt-10"
        >
          <Link
            to="/signup"
            className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 transition font-bold text-white shadow-lg shadow-green-200"
          >
            🌾 Start Free
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 rounded-xl border border-green-500/20 hover:bg-green-50 transition text-gray-700"
          >
            Open AgroAI
          </Link>
        </motion.div>
      </section>

      {/* ===== STORY ===== */}
      <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
        <motion.div
          {...fadeUp()}
          className="rounded-[32px] p-10 md:p-14"
          style={{
            background: "rgba(240,253,244,0.7)",
            border: "1px solid rgba(22,163,74,0.12)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
            <span className="text-green-700 font-bold">
              AgroAI
            </span>{" "}
            was created to eliminate dependency on middlemen and provide
            farmers with transparent, intelligent, and real-time market
            guidance. From mandi prices to buyer insights — everything is
            available instantly through AI.
          </p>
        </motion.div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          {...fadeUp()}
          className="text-4xl md:text-5xl font-black text-center mb-14 text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why Farmers Choose AgroAI
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📍",
              title: "Hyper-Local Intelligence",
              desc: "Get mandi prices and buyer information specific to your location.",
            },
            {
              icon: "💰",
              title: "Profit Optimization",
              desc: "Know where and when to sell for maximum earnings.",
            },
            {
              icon: "🤖",
              title: "AI Assistant",
              desc: "Talk naturally in Hindi, English, or Roman Hindi.",
            },
            {
              icon: "⚡",
              title: "Instant Insights",
              desc: "Fast answers with real-time recommendations.",
            },
            {
              icon: "🌐",
              title: "Multi-language",
              desc: "Designed for accessibility across rural India.",
            },
            {
              icon: "🚜",
              title: "Farmer-Centric",
              desc: "Built specifically for real farming problems.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[28px] p-8 cursor-pointer transition-all"
              style={{
                background: "rgba(240,253,244,0.7)",
                border: "1px solid rgba(22,163,74,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
              }}
            >
              <div className="text-4xl mb-5">{f.icon}</div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {f.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="max-w-5xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: "24/7", label: "AI Support" },
            { value: "100%", label: "Farmer Focused" },
            { value: "Live", label: "Market Data" },
            { value: "India", label: "Growing Vision" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-7 text-center"
              style={{
                background: "rgba(240,253,244,0.7)",
                border: "1px solid rgba(22,163,74,0.12)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
              }}
            >
              <div className="text-3xl font-black text-green-600 mb-2">
                {stat.value}
              </div>

              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="max-w-4xl mx-auto px-6 mt-28 pb-28 text-center relative z-10">
        <motion.h2
          {...fadeUp()}
          className="text-5xl md:text-6xl font-black mb-8 leading-tight text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Mission
          <br />
          <span className="text-green-600">
            Empower Every Farmer.
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          We believe every farmer deserves transparency, fair pricing,
          intelligent tools, and direct access to market opportunities.
          AgroAI is built to bridge the gap between hard work and fair
          earnings.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-12"
        >
          <Link
            to="/signup"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-600 text-white font-bold hover:scale-105 transition shadow-lg shadow-green-200"
          >
            🚀 Join AgroAI Today
          </Link>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 relative z-10">
        © 2026 AgroAI · SDS Project · Built for farmers of Uttarakhand 🌾
      </footer>
    </div>
  );
}

export default About;