// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Chatbot from "./pages/Chatbot";

// /* Layout Controller */

// function Layout() {

//   const location = useLocation();

//   // Hide navbar & footer on chatbot page
//   const hideLayout = location.pathname === "/chatbot";

//   return (
//     <>

//       {!hideLayout && <Navbar />}

//       {/* Page Content */}
//       <div className={!hideLayout ? "pt-16" : ""}>

//         <Routes>

//           <Route path="/" element={<Home />} />

//           <Route path="/about" element={<About />} />

//           <Route path="/login" element={<Login />} />

//           <Route path="/signup" element={<Signup />} />

//           <Route path="/chatbot" element={<Chatbot />} />

//         </Routes>

//       </div>

//       {!hideLayout && <Footer />}

//     </>
//   );
// }

// function App() {

//   return (
//     <BrowserRouter>

//       <Layout />

//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chatbot from "./pages/Chatbot";

/* Layout Controller */
// function Layout() {

//   const location = useLocation();

//   const hideNavbarRoutes = ["/login", "/signup"];
  

//   // Hide navbar & footer on chatbot page
//   const hideLayout = location.pathname === "/chatbot";

//   return (
//     <>
//      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
//       {!hideLayout && <Navbar />}

//       <div className={!hideLayout ? "pt-0" : ""}>
//         <Routes>

//           {/* 🔥 CHANGE: chatbot is now default */}
//           <Route path="/" element={<Home />} />

//           {/* keep all existing routes */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/chatbot" element={<Chatbot />} />

//         </Routes>
//       </div>

//       {!hideLayout }
//     </>
//   );
// }
function Layout() {
  const location = useLocation();

  // Pages where navbar should NOT appear
  const hideNavbarRoutes = ["/login", "/signup", "/chatbot"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;