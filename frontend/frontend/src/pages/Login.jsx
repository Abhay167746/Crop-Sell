import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import loginBg from "../assets/loginback.avif"; // newly added

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");

    if (!form.email.trim() || !form.password.trim()) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      navigate("/chatbot");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
    
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
         background: "#070F07" }}
      remove it for get old look
    //   style={{
    // backgroundImage: `url(${loginBg})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
  // }}
    >
      <button
  onClick={() => navigate("/")}
  className="absolute top-6 left-6 z-50 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-green-300 hover:text-[#BBEC6C] hover:border-[#BBEC6C]/30 transition text-sm backdrop-blur-md cursor-pointer"
>
  ← Home
</button>

      {/* 🔥 GLOW BACKGROUND */}
      <div className="absolute w-[600px] h-[600px] bg-green-500 opacity-10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[400px] h-[400px] bg-lime-400 opacity-10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #ffffff08, #ffffff04)",
          border: "1px solid rgba(187,236,108,0.15)",
          backdropFilter: "blur(14px)",
        }}
      >

        {/* TITLE */}
        <h2
          className="text-4xl font-black text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          🌾 <span style={{ color: "#BBEC6C" }}>Welcome Farmers</span>
        </h2>

        <p className="text-center text-green-300 text-sm mb-6">
          Login to continue your smart farming journey
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/20 border border-red-500/30 p-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* EMAIL */}
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full p-3 rounded-xl font-semibold transition-all ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#BBEC6C] text-[#0D2B0E] hover:bg-[#d4f77a]"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* GUEST */}
        <button
          onClick={() => navigate("/chatbot")}
          className="w-full mt-3 p-3 rounded-xl border border-[#BBEC6C]/30 text-[#BBEC6C] hover:bg-[#BBEC6C]/10 transition"
        >
          Continue as Guest →
        </button>

        {/* SIGNUP */}
        <p className="text-center mt-5 text-green-300 text-sm">
          New user?{" "}
          <Link to="/signup" className="text-[#BBEC6C] font-semibold">
            Sign Up
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default Login;