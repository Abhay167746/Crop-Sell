// import { motion } from "framer-motion";

// function About() {
//   return (
//     <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen px-6 py-16">

//       {/* HERO SECTION */}
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-bold text-green-800 mb-6 leading-tight"
//         >
//           🌾 Transforming Agriculture with AI
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
//         >
//           AgroAI empowers farmers to make smarter crop selling decisions by providing real-time market insights, reducing dependency on middlemen, and maximizing profits.
//         </motion.p>
//       </div>

//       {/* MAIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-10 border border-gray-100"
//       >

//         {/* DESCRIPTION */}
//         <p className="text-lg text-gray-700 leading-relaxed text-center">
//           <span className="font-semibold text-green-700">AgroAI</span> is an AI-powered Crop Selling Assistant designed for farmers in Uttarakhand (starting with Haldwani). It helps farmers discover the best markets, optimal selling time, and price insights through a simple conversational interface.
//         </p>

//         {/* FEATURES */}
//         <div className="grid md:grid-cols-2 gap-8 mt-10">

//           {[
//             {
//               title: "📍 Smart Market Discovery",
//               desc: "Find nearby mandis and buyers instantly based on crop and location.",
//             },
//             {
//               title: "💰 Price Intelligence",
//               desc: "Get expected price ranges to maximize profit and avoid losses.",
//             },
//             {
//               title: "🤖 AI-Powered Chat",
//               desc: "Ask questions in natural language and receive structured insights.",
//             },
//             {
//               title: "⚡ Fast & Secure",
//               desc: "Powered by high-speed AI APIs ensuring reliable responses.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ scale: 1.06 }}
//               className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
//             >
//               <h3 className="text-lg font-semibold text-green-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </motion.div>
//           ))}

//         </div>
//       </motion.div>

//       {/* STATS SECTION */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
//       >
//         {[
//           { value: "100%", label: "Farmer Focused" },
//           { value: "AI", label: "Powered Insights" },
//           { value: "24/7", label: "Availability" },
//           { value: "1+", label: "Cities (Expanding)" },
//         ].map((stat, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
//           >
//             <h2 className="text-2xl font-bold text-green-700">
//               {stat.value}
//             </h2>
//             <p className="text-gray-600 text-sm">{stat.label}</p>
//           </div>
//         ))}
//       </motion.div>

//       {/* MISSION SECTION */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//         className="max-w-3xl mx-auto mt-16 text-center"
//       >
//         <h2 className="text-3xl font-bold text-green-800 mb-4">
//           🚀 Our Mission
//         </h2>
//         <p className="text-gray-700 text-lg leading-relaxed">
//           To digitally empower farmers by providing intelligent tools that enhance decision-making, increase income, and bring transparency to agricultural markets.
//         </p>
//       </motion.div>

//     </div>
//   );
// }

// export default About;

import { motion } from "framer-motion";

function About() {
  return (
    <div
      className="pt-20 relative overflow-hidden"
      style={{
        background: "#070F07",
        fontFamily: "'DM Sans', sans-serif",
        color: "#fff",
      }}
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[600px] h-[600px] bg-green-500 opacity-10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[400px] h-[400px] bg-lime-400 opacity-10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center px-6 py-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Not Just an App.
          <br />
          <span style={{ color: "#BBEC6C" }}>A Farmer’s Advantage.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-green-200 max-w-2xl mx-auto"
        >
          AgroAI gives farmers real-time mandi insights, smart selling strategies,
          and AI-powered guidance — so they earn more with confidence.
        </motion.p>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-5xl mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-10"
          style={{
            background: "linear-gradient(135deg, #ffffff08, #ffffff04)",
            border: "1px solid rgba(187,236,108,0.15)",
            backdropFilter: "blur(14px)",
          }}
        >
          <p className="text-green-200 text-lg leading-relaxed text-center">
            <span className="text-[#BBEC6C] font-semibold">AgroAI</span> was built
            with one goal — eliminate middlemen and empower farmers with the right
            information at the right time. From mandi prices to buyer insights,
            everything is just one message away.
          </p>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 relative z-10">

        {[
          {
            icon: "📍",
            title: "Hyper-Local Intelligence",
            desc: "Get mandi data and buyer info specific to your exact location.",
          },
          {
            icon: "💰",
            title: "Profit Optimization",
            desc: "Know where and when to sell for maximum earnings.",
          },
          {
            icon: "🤖",
            title: "AI Assistant",
            desc: "Ask in Hindi or English — AgroAI understands everything.",
          },
          {
            icon: "⚡",
            title: "Instant Insights",
            desc: "No waiting, no complexity — results in seconds.",
          },
          {
            icon: "🌐",
            title: "Multi-language",
            desc: "Supports Hindi, English, and Roman Hindi seamlessly.",
          },
          {
            icon: "🚜",
            title: "Farmer-Centric",
            desc: "Built specifically for real farmers, not tech experts.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-6 rounded-3xl cursor-pointer"
            style={{
              background: "rgba(187,236,108,0.05)",
              border: "1px solid rgba(187,236,108,0.15)",
            }}
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
            <p className="text-green-300 text-sm">{f.desc}</p>
          </motion.div>
        ))}

      </div>

      {/* TRUST / STATS */}
      <div className="max-w-5xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
        {[
          { value: "100%", label: "Farmer Focused" },
          { value: "AI", label: "Powered" },
          { value: "24/7", label: "Available" },
          { value: "Growing", label: "Across India" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl p-6"
            style={{
              background: "rgba(187,236,108,0.05)",
              border: "1px solid rgba(187,236,108,0.1)",
            }}
          >
            <h2 className="text-2xl font-bold text-[#BBEC6C]">
              {stat.value}
            </h2>
            <p className="text-green-300 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* MISSION */}
      <div className="max-w-3xl mx-auto px-6 mt-24 text-center pb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Mission
          <br />
          <span style={{ color: "#BBEC6C" }}>Empower Every Farmer.</span>
        </motion.h2>

        <p className="text-green-200 text-lg leading-relaxed">
          We believe farmers deserve transparency, fair pricing, and smart tools.
          AgroAI is here to bridge the gap between effort and earnings.
        </p>
      </div>

    </div>
  );
}

export default About;