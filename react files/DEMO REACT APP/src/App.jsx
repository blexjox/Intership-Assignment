// import React, { useState, Suspense, lazy } from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// // Lazy-loaded screens
// const Home = lazy(() => import("./screens/Home"));
// const About = lazy(() => import("./screens/About"));
// const Contact = lazy(() => import("./screens/Contact"));
// const ReactConcepts = lazy(() => import("./screens/ReactConcepts"));
// const Skills = lazy(() => import("./screens/Skills"));
// const Projects = lazy(() => import("./screens/Projects"));

// function Apple() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Link styling
//   const navLinkStyles = ({ isActive }) => ({
//     color: isActive ? "#007bff" : "#333",
//     fontWeight: isActive ? "bold" : "normal",
//     padding: "10px",
//     display: "block",
//     textDecoration: "none",
//   });

//   return (
//     <BrowserRouter>
//       {/* NAVBAR */}
//       <nav
//         style={{
//           width: "100%",
//           background: "#f8f9fa",
//           borderBottom: "1px solid #ddd",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             padding: "10px 20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {/* Logo */}
//           <div style={{ fontSize: "22px", fontWeight: "bold" }}>
//             MyPortfolio
//           </div>

//           {/* Desktop Menu */}
//           <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
//             <NavLink to="/" style={navLinkStyles}>
//               Home
//             </NavLink>
//             <NavLink to="/about" style={navLinkStyles}>
//               About
//             </NavLink>
//             <NavLink to="/contact" style={navLinkStyles}>
//               Contact
//             </NavLink>
//             <NavLink to="/skills" style={navLinkStyles}>
//               Skills
//             </NavLink>
//             <NavLink to="/projects" style={navLinkStyles}>
//               Projects
//             </NavLink>
//             <NavLink to="/concepts" style={navLinkStyles}>
//               React
//             </NavLink>
//           </div>

//           {/* Hamburger (Mobile) */}
//           <div
//             onClick={toggleMenu}
//             style={{
//               display: "none",
//               fontSize: "26px",
//               cursor: "pointer",
//             }}
//             className="hamburger"
//           >
//             ☰
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             background: "#ffffff",
//             padding: "10px 20px",
//             borderBottom: "1px solid #ddd",
//           }}
//           className="mobile-menu"
//         >
//           <NavLink to="/" onClick={toggleMenu} style={navLinkStyles}>
//             Home
//           </NavLink>
//           <NavLink to="/about" onClick={toggleMenu} style={navLinkStyles}>
//             About
//           </NavLink>

//           <NavLink to="/skills" onClick={toggleMenu} style={navLinkStyles}>
//             Skills
//           </NavLink>
//           <NavLink to="/projects" onClick={toggleMenu} style={navLinkStyles}>
//             Projects
//           </NavLink>
//           <NavLink to="/concepts" onClick={toggleMenu} style={navLinkStyles}>
//             React
//           </NavLink>
//           <NavLink to="/contact" onClick={toggleMenu} style={navLinkStyles}>
//             Contact
//           </NavLink>
//         </div>
//       )}

//       {/* ROUTES with Suspense */}
//       <Suspense fallback={<p style={{ padding: "20px" }}>Loading...</p>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/concepts" element={<ReactConcepts />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Suspense>

//       {/* RESPONSIVE CSS */}
//       <style>{`
//         @media (max-width: 768px) {
//           .hamburger {
//             display: block !important;
//           }
//           .nav-links {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </BrowserRouter>
//   );
// }

// export default Apple;


import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Crud from "./screens/Crud";

// Lazy-loaded screens
const Home = lazy(() => import("./screens/Home"));
const About = lazy(() => import("./screens/About"));
const Contact = lazy(() => import("./screens/Contact"));
const ReactConcepts = lazy(() => import("./screens/ReactConcepts"));
const Skills = lazy(() => import("./screens/Skills"));
const Projects = lazy(() => import("./screens/Projects"));
const Todo = lazy(() => import("./screens/Todo"));

function Apple() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize darkMode from localStorage to avoid setState in effect
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true" // lazy initial state
  );

  // Toggle menu for mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev); // persist immediately
      return !prev;
    });
  };

  // NavLink style
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? (darkMode ? "#ffd700" : "#007bff") : darkMode ? "#ddd" : "#333",
    fontWeight: isActive ? "bold" : "normal",
    padding: "10px",
    display: "block",
    textDecoration: "none",
  });

  return (
    <BrowserRouter>
      <div
        style={{
          background: darkMode ? "#121212" : "#f8f9fa",
          color: darkMode ? "#ddd" : "#000",
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        {/* NAVBAR */}
        <nav
          style={{
            width: "100%",
            background: darkMode ? "#1f1f1f" : "#f8f9fa",
            borderBottom: "1px solid",
            borderColor: darkMode ? "#333" : "#ddd",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <div style={{ fontSize: "22px", fontWeight: "bold" }}>MyPortfolio</div>

            {/* Desktop Menu */}
            <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
              <NavLink to="/" style={navLinkStyles}>
                Home
              </NavLink>
              <NavLink to="/about" style={navLinkStyles}>
                About
              </NavLink>
              <NavLink to="/contact" style={navLinkStyles}>
                Contact
              </NavLink>
              <NavLink to="/skills" style={navLinkStyles}>
                Skills
              </NavLink>
              <NavLink to="/projects" style={navLinkStyles}>
                Projects
              </NavLink>
              <NavLink to="/todo" style={navLinkStyles}>
                TodoApp
              </NavLink>
              <NavLink to="/concepts" style={navLinkStyles}>
                React
              </NavLink>
              <NavLink to="/crud" style={navLinkStyles}>
                CRUD
              </NavLink>
            </div>

            {/* Dark Mode Toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>{darkMode ? "🌙" : "☀️"}</span>
              <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>

              {/* Hamburger (Mobile) */}
              <div
                onClick={toggleMenu}
                style={{
                  display: "none",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                className="hamburger"
              >
                ☰
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: darkMode ? "#1f1f1f" : "#ffffff",
              padding: "10px 20px",
              borderBottom: "1px solid",
              borderColor: darkMode ? "#333" : "#ddd",
            }}
            className="mobile-menu"
          >
            <NavLink to="/" onClick={toggleMenu} style={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} style={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/skills" onClick={toggleMenu} style={navLinkStyles}>
              Skills
            </NavLink>
            <NavLink to="/projects" onClick={toggleMenu} style={navLinkStyles}>
              Projects
            </NavLink>
            <NavLink to="/concepts" onClick={toggleMenu} style={navLinkStyles}>
              React
            </NavLink>
            <NavLink to="/todo" onClick={toggleMenu} style={navLinkStyles}>
              TodoApp
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu} style={navLinkStyles}>
              Contact
            </NavLink>
            <NavLink to="/crud" onClick={toggleMenu} style={navLinkStyles}>
              Crud
            </NavLink>
          </div>
        )}

        {/* ROUTES with Suspense */}
        <Suspense fallback={<p style={{ padding: "20px" }}>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/concepts" element={<ReactConcepts />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crud" element={<Crud />} />
          </Routes>
        </Suspense>

        {/* CSS */}
        <style>{`
          @media (max-width: 768px) {
            .hamburger {
              display: block !important;
            }
            .nav-links {
              display: none !important;
            }
          }

          /* Fancy toggle switch */
          .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
          }
*7
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.4s;
            border-radius: 24px;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 18px;
 *           width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
          }

          input:checked + .slider {
            background-color: #007bff;
          }

          input:checked + .slider:before {
            transform: translateX(26px);
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default Apple;

