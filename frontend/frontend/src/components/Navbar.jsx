
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { LanguageContext } from "../context/LanguageContext";
// import collegeLogo from "../assets/cot.jpg";

// function Navbar() {

//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const { toggleLanguage } = useContext(LanguageContext);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     setMenuOpen(false);
//     navigate("/");
//   };

//   const navLinkStyle = ({ isActive }) =>
//     `relative px-4 py-2 text-lg transition-all
//      ${
//        isActive
//          ? "text-green-800 font-semibold"
//          : "text-green-700 hover:text-green-900"
//      }
//      after:absolute after:left-0 after:-bottom-1
//      after:h-[2px] after:bg-green-600
//      after:transition-all after:duration-300
//      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
//     `;

//   return (

//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="
//         fixed top-0 left-0 w-full z-50
//         bg-green-50/80 backdrop-blur-xl
//         border-b border-green-200
//         shadow-md
//       "
//     >

//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

//         {/* LOGO + BRAND */}

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           onClick={() => navigate("/")}
//           className="flex items-center gap-3 cursor-pointer"
//         >

//           <img
//             src={collegeLogo}
//             alt="AgroAI Logo"
//             className="h-11 w-11 rounded-full bg-white p-1 shadow"
//           />

//           {/* <span className="text-xl font-bold text-green-800">
//             AgroAI
//           </span> */}

//         </motion.div>


//         {/* DESKTOP MENU */}

//         <div className="hidden md:flex items-center gap-6">

//           <NavLink to="/" className={navLinkStyle}>
//             Home
//           </NavLink>

//           <NavLink to="/about" className={navLinkStyle}>
//             About
//           </NavLink>

//           {!isLoggedIn && (
//             <>
//               <NavLink to="/login" className={navLinkStyle}>
//                 Login
//               </NavLink>

//               <NavLink to="/signup" className={navLinkStyle}>
//                 Signup
//               </NavLink>
//             </>
//           )}

//           {isLoggedIn && (
//             <button
//               onClick={handleLogout}
//               className="
//                 px-4 py-2 rounded-full
//                 bg-red-500 text-white
//                 hover:bg-red-600 transition
//               "
//             >
//               Logout
//             </button>
//           )}

//           {/* LANGUAGE BUTTON */}

//           <button
//             onClick={toggleLanguage}
//             className="
//               px-3 py-1 rounded-full
//               border border-green-600
//               text-green-800
//               hover:bg-green-700 hover:text-white
//               transition
//             "
//           >
//             🌐
//           </button>

//         </div>


//         {/* HAMBURGER MENU */}

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-3xl text-green-800"
//         >
//           ☰
//         </button>

//       </div>


//       {/* MOBILE MENU */}

//       <AnimatePresence>

//         {menuOpen && (

//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="
//               md:hidden
//               bg-green-50/95 backdrop-blur-lg
//               px-6 py-4 space-y-4
//             "
//           >

//             <NavLink
//               onClick={() => setMenuOpen(false)}
//               to="/"
//               className={navLinkStyle}
//             >
//               Home
//             </NavLink>

//             <NavLink
//               onClick={() => setMenuOpen(false)}
//               to="/about"
//               className={navLinkStyle}
//             >
//               About
//             </NavLink>

//             {!isLoggedIn && (
//               <>
//                 <NavLink
//                   onClick={() => setMenuOpen(false)}
//                   to="/login"
//                   className={navLinkStyle}
//                 >
//                   Login
//                 </NavLink>

//                 <NavLink
//                   onClick={() => setMenuOpen(false)}
//                   to="/signup"
//                   className={navLinkStyle}
//                 >
//                   Signup
//                 </NavLink>
//               </>
//             )}

//             {isLoggedIn && (
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-left text-red-600 px-4 py-2"
//               >
//                 Logout
//               </button>
//             )}

//             <button
//               onClick={toggleLanguage}
//               className="text-lg flex items-center gap-2 cursor-pointer"
//             >
//               🌐 Change Language
//             </button>

//           </motion.div>

//         )}

//       </AnimatePresence>

//     </motion.nav>
//   );
// }

// export default Navbar;

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import collegeLogo from "../assets/cot.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleLanguage, language } = useContext(LanguageContext);

  // Detect scroll to apply solid bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        .nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          padding: 6px 2px;
          transition: color 0.25s;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1.5px;
          background: #BBEC6C;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #BBEC6C; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { color: #BBEC6C; }
        .nav-link.active::after { width: 100%; }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          background: scrolled ? "rgba(7,15,7,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(187,236,108,0.1)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* ── LOGO ── */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0"
              style={{ border: "1.5px solid rgba(187,236,108,0.4)", boxShadow: "0 0 12px rgba(187,236,108,0.2)" }}
            >
              <img src={collegeLogo} alt="AgroAI" className="w-full h-full object-cover" />
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#BBEC6C",
                letterSpacing: "-0.02em",
              }}
            >
              AgroAI
            </span>
          </motion.div>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* ── DESKTOP ACTIONS ── */}
          <div className="hidden md:flex items-center gap-3">

            {/* Language toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                border: "1px solid rgba(187,236,108,0.25)",
                color: "rgba(187,236,108,0.8)",
                background: "rgba(187,236,108,0.05)",
              }}
            >
              🌐 {language === "en" ? "हिंदी" : "EN"}
            </motion.button>

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#BBEC6C"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
                >
                  Login
                </NavLink>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <NavLink
                    to="/signup"
                    className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all"
                    style={{
                      background: "#BBEC6C",
                      color: "#0D2B0E",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#d4f77a"}
                    onMouseLeave={e => e.currentTarget.style.background = "#BBEC6C"}
                  >
                    🌾 Get Started
                  </NavLink>
                </motion.div>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium rounded-full transition-all"
                style={{
                  border: "1px solid rgba(239,68,68,0.35)",
                  color: "rgba(252,165,165,0.9)",
                  background: "rgba(239,68,68,0.07)",
                }}
              >
                Logout
              </motion.button>
            )}
          </div>

          {/* ── HAMBURGER ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className="block w-5 h-[1.5px] origin-center"
              style={{ background: "#BBEC6C" }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              className="block w-5 h-[1.5px]"
              style={{ background: "#BBEC6C" }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className="block w-5 h-[1.5px] origin-center"
              style={{ background: "#BBEC6C" }}
            />
          </motion.button>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                background: "rgba(7,15,7,0.97)",
                borderTop: "1px solid rgba(187,236,108,0.1)",
                backdropFilter: "blur(20px)",
                overflow: "hidden",
              }}
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) => `nav-link text-base${isActive ? " active" : ""}`}
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="w-full h-[1px]" style={{ background: "rgba(187,236,108,0.1)" }} />

                <div className="flex flex-col gap-3">
                  {!isLoggedIn ? (
                    <>
                      <NavLink
                        to="/login"
                        className="text-center py-3 rounded-full text-sm font-medium transition-all"
                        style={{ border: "1px solid rgba(187,236,108,0.2)", color: "rgba(187,236,108,0.8)" }}
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/signup"
                        className="text-center py-3 rounded-full text-sm font-bold"
                        style={{ background: "#BBEC6C", color: "#0D2B0E" }}
                      >
                        🌾 Get Started
                      </NavLink>
                    </>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="text-center py-3 rounded-full text-sm font-medium"
                      style={{ border: "1px solid rgba(239,68,68,0.3)", color: "rgba(252,165,165,0.9)" }}
                    >
                      Logout
                    </button>
                  )}

                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center gap-2 py-2 text-sm"
                    style={{ color: "rgba(187,236,108,0.6)" }}
                  >
                    🌐 Switch to {language === "en" ? "हिंदी" : "English"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}