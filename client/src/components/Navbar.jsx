// src/components/Navbar.jsx

import "../css/Homepage.css";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDarkMode } from "./DarkModeContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigating between pages
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className="navbar">
      {/* Navbar */}
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft size={20} />
      </button>

      {/* Navbar Links and Day-Night Toggle */}
      <div className="navbar-right">
        <ul className="navbar-links">
          {/* Navigation to Home */}
          <li>
            <button onClick={() => navigate("/home")}>Home</button>
          </li>
          {/* Navigation to About Us */}
          <li>
            <button onClick={() => navigate("/about-us")}>About Us</button>
          </li>
          {/* Navigation to FAQ */}
          <li>
            <button onClick={() => navigate("/faq")}>FAQ</button>
          </li>
        </ul>
        <div className="day-night-toggle">
          <button onClick={toggleDarkMode} className="toggle-button">
            {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
