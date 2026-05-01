// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// function Signup() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async () => {
//     setError("");

//     if (
//       !form.email.trim() ||
//       !form.password.trim() ||
//       !form.confirmPassword.trim()
//     ) {
//       return setError("Please fill all fields");
//     }

//     if (form.password !== form.confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: form.email,
//           password: form.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Signup failed");
//       }

//       navigate("/login");

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md"
//       >

//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
//           🌾 Create Your Account
//         </h2>

//         {error && (
//           <p className="bg-red-100 text-red-600 p-2 rounded text-center mb-4">
//             {error}
//           </p>
//         )}

//         {/* Name */}
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-3 border rounded mb-4 text-lg focus:outline-green-500"
//           placeholder="Full Name"
//         />

//         {/* Email */}
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-3 border rounded mb-4 text-lg focus:outline-green-500"
//           placeholder="Email Address"
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full p-3 border rounded mb-4 text-lg focus:outline-green-500"
//           placeholder="Password"
//         />

//         {/* Confirm Password */}
//         <input
//           type="password"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           className="w-full p-3 border rounded mb-6 text-lg focus:outline-green-500"
//           placeholder="Confirm Password"
//         />

//         {/* Button */}
//         <button
//           onClick={handleSignup}
//           disabled={loading}
//           className={`w-full p-3 rounded text-lg font-semibold transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-700 text-white hover:bg-green-800"
//           }`}
//         >
//           {loading ? "Creating Account..." : "Sign Up"}
//         </button>

//         {/* Footer */}
//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-700 font-semibold">
//             Login
//           </Link>
//         </p>

//       </motion.div>
//     </div>
//   );
// }

// export default Signup;
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// function Signup() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async () => {
//     setError("");

//     if (
//       !form.name.trim() ||
//       !form.email.trim() ||
//       !form.password.trim() ||
//       !form.confirmPassword.trim()
//     ) {
//       return setError("Please fill all fields");
//     }

//     if (form.password !== form.confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           password: form.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || "Signup failed");

//       navigate("/login");

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
//       style={{ background: "#070F07" }}
//     >

//     <button
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
//           className="text-4xl font-black text-center mb-4"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           🌾 <span style={{ color: "#BBEC6C" }}>Create Account</span>
//         </h2>

//         <p className="text-center text-green-300 text-sm mb-6">
//           Join AgroAI and start selling smarter 🚀
//         </p>

//         {/* ERROR */}
//         {error && (
//           <div className="mb-4 text-sm text-red-400 bg-red-900/20 border border-red-500/30 p-3 rounded-lg text-center">
//             {error}
//           </div>
//         )}

//         {/* NAME */}
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
//         />

//         {/* EMAIL */}
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email Address"
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

//         {/* CONFIRM PASSWORD */}
//         <input
//           type="password"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm Password"
//           className="w-full p-3 mb-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
//         />

//         {/* BUTTON */}
//         <button
//           onClick={handleSignup}
//           disabled={loading}
//           className={`w-full p-3 rounded-xl font-semibold transition-all ${
//             loading
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-[#BBEC6C] text-[#0D2B0E] hover:bg-[#d4f77a]"
//           }`}
//         >
//           {loading ? "Creating Account..." : "Sign Up"}
//         </button>

//         {/* LOGIN LINK */}
//         <p className="text-center mt-5 text-green-300 text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-[#BBEC6C] font-semibold">
//             Login
//           </Link>
//         </p>

//       </motion.div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import collegeLogo from "../assets/cot.jpg";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    setError(""); setSuccess("");

    if (!form.name.trim() || !form.email.trim() || !form.password.trim() || !form.confirmPassword.trim())
      return setError("कृपया सभी फ़ील्ड भरें / Please fill all fields");

    if (form.password !== form.confirmPassword)
      return setError("पासवर्ड मेल नहीं खाते / Passwords do not match");

    if (form.password.length < 6)
      return setError("पासवर्ड कम से कम 6 अक्षर का होना चाहिए");

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      setSuccess("✅ खाता बन गया! अब लॉगिन करें।");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => { if (e.key === "Enter") handleSignup(); };

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

      {/* ── COLLEGE BANNER ── */}
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
          <Link to="/login" style={{ padding: "6px 16px", borderRadius: 20, border: "1.5px solid #16a34a", color: "#15803d", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
            लॉगिन करें
          </Link>
        </div>
      </div>

      {/* ── SIGNUP CARD ── */}
      <div style={{ display: "flex", justifyContent: "center", padding: "28px 16px 40px" }}>
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
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🌾</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#15803d", marginBottom: 4 }}>
              किसान रजिस्ट्रेशन
            </h2>
            <p style={{ fontSize: 13.5, color: "#6b7280" }}>
              AgroAI से जुड़ें और स्मार्ट तरीके से बेचें 🚀
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{ marginBottom: 14, padding: "10px 14px", background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 10, fontSize: 13, color: "#dc2626", textAlign: "center" }}>
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div style={{ marginBottom: 14, padding: "10px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, fontSize: 13, color: "#15803d", textAlign: "center", fontWeight: 600 }}>
              {success}
            </div>
          )}

          {/* Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" }}>
                पूरा नाम / Full Name
              </label>
              <input name="name" value={form.name} onChange={handleChange} onKeyDown={handleKey}
                placeholder="जैसे: रमेश सिंह" className="inp-field" />
            </div>
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" }}>
                ईमेल / Email
              </label>
              <input name="email" type="email" value={form.email} onChange={handleChange} onKeyDown={handleKey}
                placeholder="aapka@email.com" className="inp-field" />
            </div>
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" }}>
                पासवर्ड / Password
              </label>
              <input name="password" type="password" value={form.password} onChange={handleChange} onKeyDown={handleKey}
                placeholder="कम से कम 6 अक्षर" className="inp-field" />
            </div>
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" }}>
                पासवर्ड दोबारा / Confirm Password
              </label>
              <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} onKeyDown={handleKey}
                placeholder="••••••••" className="inp-field" />
            </div>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
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
            {loading ? "खाता बन रहा है..." : "🌾 खाता बनाएं"}
          </button>

          {/* Login link */}
          <p style={{ textAlign: "center", marginTop: 18, fontSize: 13.5, color: "#6b7280" }}>
            पहले से खाता है?{" "}
            <Link to="/login" style={{ color: "#15803d", fontWeight: 700, textDecoration: "none" }}>
              लॉगिन करें →
            </Link>
          </p>

          {/* Benefits */}
          <div style={{ marginTop: 20, padding: "12px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: "#15803d", marginBottom: 6 }}>रजिस्ट्रेशन के फायदे:</div>
            {["💬 Chat history saved", "🌾 Personalized advice", "📊 Price alerts", "🔒 Secure account"].map((b, i) => (
              <div key={i} style={{ fontSize: 11.5, color: "#374151", marginBottom: 3 }}>{b}</div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default Signup;