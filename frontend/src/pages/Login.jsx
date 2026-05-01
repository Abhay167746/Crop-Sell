// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// // import loginBg from "../assets/loginback.avif"; // newly added

// function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     setError("");

//     if (!form.email.trim() || !form.password.trim()) {
//       return setError("Please fill all fields");
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || "Login failed");

//       localStorage.setItem("token", data.token);
//       navigate("/chatbot");

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
    
//       className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
//       style={{
//          background:  "#ffffff"}}//"#070F07"
//       remove it for get old look
//     //   style={{
//     // backgroundImage: `url(${loginBg})`,
//     // backgroundSize: "cover",
//     // backgroundPosition: "center",
//     // backgroundRepeat: "no-repeat",
//   // }}
//     >
//       <button
//   onClick={() => navigate("/")}
//   className="absolute top-6 left-6 z-50 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-green-300 hover:text-[#BBEC6C] hover:border-[#BBEC6C]/30 transition text-sm backdrop-blur-md cursor-pointer"
// >
//   ← Home
// </button>

//       {/* 🔥 GLOW BACKGROUND */}
//       <div className="absolute w-[600px] h-[600px] bg-green-500 opacity-10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
//       <div className="absolute w-[400px] h-[400px] bg-lime-400 opacity-10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

//       {/* CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative z-10 w-full max-w-md p-8 rounded-3xl"
//         style={{
//           background: "linear-gradient(135deg, #ffffff08, #ffffff04)",
//           border: "1px solid rgba(187,236,108,0.15)",
//           backdropFilter: "blur(14px)",
//         }}
//       >

//         {/* TITLE */}
//         <h2
//           className="text-4xl font-black text-center mb-6"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           🌾 <span style={{ color: "#BBEC6C" }}>Welcome Farmers</span>
//         </h2>

//         <p className="text-center text-green-300 text-sm mb-6">
//           Login to continue your smart farming journey
//         </p>

//         {/* ERROR */}
//         {error && (
//           <div className="mb-4 text-sm text-red-400 bg-red-900/20 border border-red-500/30 p-3 rounded-lg text-center">
//             {error}
//           </div>
//         )}

//         {/* EMAIL */}
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
//         />

//         {/* PASSWORD */}
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
//         />

//         {/* LOGIN BUTTON */}
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className={`w-full p-3 rounded-xl font-semibold transition-all ${
//             loading
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-[#BBEC6C] text-[#0D2B0E] hover:bg-[#d4f77a]"
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {/* GUEST */}
//         <button
//           onClick={() => navigate("/chatbot")}
//           className="w-full mt-3 p-3 rounded-xl border border-[#BBEC6C]/30 text-[#BBEC6C] hover:bg-[#BBEC6C]/10 transition"
//         >
//           Continue as Guest →
//         </button>

//         {/* SIGNUP */}
//         <p className="text-center mt-5 text-green-300 text-sm">
//           New user?{" "}
//           <Link to="/signup" className="text-[#BBEC6C] font-semibold">
//             Sign Up
//           </Link>
//         </p>

//       </motion.div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import collegeLogo from "../assets/cot.jpg";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    setError("");
    if (!form.email.trim() || !form.password.trim())
      return setError("कृपया सभी फ़ील्ड भरें / Please fill all fields");

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // ✅ Save everything needed by Chatbot
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("farmerName", data.name || data.user?.name || "");
      navigate("/chatbot");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = () => {
    // ✅ Guest login — clears any old token, goes straight to chatbot
    localStorage.removeItem("token");
    localStorage.removeItem("farmerName");
    localStorage.setItem("isLoggedIn", "guest");
    navigate("/chatbot");
  };

  const handleKey = (e) => { if (e.key === "Enter") handleLogin(); };

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Segoe UI', 'Noto Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .inp-field {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid #bbf7d0; border-radius: 10px;
          font-size: 14px; color: #1f2937; background: #fff;
          outline: none; transition: border-color 0.18s, box-shadow 0.18s;
          font-family: inherit;
        }
        .inp-field:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.1); }
        .inp-field::placeholder { color: #9ca3af; }
      `}</style>

      {/* ── COLLEGE BANNER — same as home page ── */}
      <div style={{ padding: "16px 10px 0" }}>
        <div style={{
          background: "linear-gradient(135deg, #8b1a1a 0%, #6b1414 40%, #4a1010 100%)",
          borderRadius: 14, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "16px 22px", flexWrap: "wrap" }}>
            <img src={collegeLogo} alt="logo" style={{ width: 54, height: 54, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>प्रौद्योगिकी महाविद्यालय</div>
              <div style={{ fontSize: 12, color: "rgba(255,200,150,0.9)", fontStyle: "italic", marginTop: 1 }}>College of Technology, Pantnagar</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>G.B. Pant University of Agriculture &amp; Technology</div>
            </div>
            <div style={{ width: 1, height: 44, background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#ffd700", fontStyle: "italic" }}>AgroAI</div>
              <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Intelligent Crop Market Assistant</div>
            </div>
          </div>
          <div style={{ background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "6px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
            <span style={{ fontSize: 10.5, fontStyle: "italic", color: "rgba(255,255,200,0.65)" }}>
              "Empowering farmers of Uttarakhand with AI-driven market intelligence"
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10.5, color: "#4ade80", fontWeight: 600 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              Live Data Active
            </span>
          </div>
        </div>
      </div>

      {/* ── NAV BAR ── */}
      <div style={{ margin: "12px 10px 0" }}>
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: "9px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {[{ to: "/", label: "होम" }, { to: "/about", label: "हमारे बारे में" }].map(l => (
              <Link key={l.to} to={l.to} style={{ padding: "5px 13px", borderRadius: 20, border: "1px solid #bbf7d0", color: "#15803d", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link to="/signup" style={{ padding: "6px 16px", borderRadius: 20, background: "#16a34a", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
            🌾 रजिस्टर करें
          </Link>
        </div>
      </div>

      {/* ── LOGIN CARD ── */}
      <div style={{ display: "flex", justifyContent: "center", padding: "32px 16px 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%", maxWidth: 420,
            background: "#fff",
            border: "1px solid #bbf7d0",
            borderRadius: 20,
            padding: "36px 32px",
            boxShadow: "0 8px 40px rgba(22,163,74,0.1), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {/* Icon + heading */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🌾</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#15803d", marginBottom: 4 }}>
              किसान लॉगिन
            </h2>
            <p style={{ fontSize: 13.5, color: "#6b7280" }}>
              अपने खाते में लॉगिन करें और फसल बेचना शुरू करें
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{ marginBottom: 16, padding: "10px 14px", background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 10, fontSize: 13, color: "#dc2626", textAlign: "center" }}>
              {error}
            </div>
          )}

          {/* Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" }}>
                ईमेल / Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onKeyDown={handleKey}
                placeholder="aapka@email.com"
                className="inp-field"
              />
            </div>
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" }}>
                पासवर्ड / Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                onKeyDown={handleKey}
                placeholder="••••••••"
                className="inp-field"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: "100%", marginTop: 22,
              padding: "13px",
              borderRadius: 12, border: "none",
              background: loading ? "#9ca3af" : "linear-gradient(135deg, #16a34a, #15803d)",
              color: "#fff", fontSize: 15, fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 4px 14px rgba(22,163,74,0.35)",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            {loading ? "लॉगिन हो रहा है..." : "🔐 लॉगिन करें"}
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0" }}>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>या / OR</span>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
          </div>

          {/* Guest Button */}
          <button
            onClick={handleGuest}
            style={{
              width: "100%", padding: "12px",
              borderRadius: 12, border: "1.5px solid #bbf7d0",
              background: "#f0fdf4", color: "#15803d",
              fontSize: 14, fontWeight: 600,
              cursor: "pointer", transition: "all 0.18s",
              fontFamily: "inherit",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#dcfce7"}
            onMouseLeave={e => e.currentTarget.style.background = "#f0fdf4"}
          >
            👤 बिना लॉगिन के जारी रखें (Guest)
          </button>

          {/* Signup link */}
          <p style={{ textAlign: "center", marginTop: 20, fontSize: 13.5, color: "#6b7280" }}>
            नया खाता बनाएं?{" "}
            <Link to="/signup" style={{ color: "#15803d", fontWeight: 700, textDecoration: "none" }}>
              Sign Up करें →
            </Link>
          </p>

        </motion.div>
      </div>
    </div>
  );
}

export default Login;