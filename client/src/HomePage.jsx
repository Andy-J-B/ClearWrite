import React, { useState } from "react";
import "./Homepage.css";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/clearwrite-background.png";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <div className="homepage-container">
        <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="day-night-toggle">
        <button onClick={toggleTheme} className="toggle-button">
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

      <div className="essay-section">
        <img src={logo} alt="ClearWrite Logo" className="logo" />
        <textarea
          placeholder="Enter your essay here ..."
          className="essay-input"
        ></textarea>
        <button className="evaluate-button">Evaluate</button>
      </div>
    </div>
  );
};

export default HomePage;
