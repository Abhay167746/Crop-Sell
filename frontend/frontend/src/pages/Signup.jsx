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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      return setError("Please fill all fields");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Signup failed");

      navigate("/login");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "#070F07" }}
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
          className="text-4xl font-black text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          🌾 <span style={{ color: "#BBEC6C" }}>Create Account</span>
        </h2>

        <p className="text-center text-green-300 text-sm mb-6">
          Join AgroAI and start selling smarter 🚀
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/20 border border-red-500/30 p-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* NAME */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
        />

        {/* EMAIL */}
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
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

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full p-3 mb-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#BBEC6C] focus:ring-1 focus:ring-[#BBEC6C]"
        />

        {/* BUTTON */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className={`w-full p-3 rounded-xl font-semibold transition-all ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#BBEC6C] text-[#0D2B0E] hover:bg-[#d4f77a]"
          }`}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* LOGIN LINK */}
        <p className="text-center mt-5 text-green-300 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#BBEC6C] font-semibold">
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default Signup;