import React, { useState } from "react";
import "./Homepage.css";
import { FaSun, FaMoon } from "react-icons/fa"; 

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  };

  return (
    <div className="homepage-container">
      <div className="day-night-toggle">
        <button onClick={toggleTheme} className="toggle-button">
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

      <div className="essay-section">
        <img src="client/src/image/clearwrite-background.png" alt="ClearWrite Logo" className="logo" />
        <textarea
          placeholder="Enter your essay here ..."
          className="essay-input"
        ></textarea>
        <button className="evaluate-button">Evaluate</button>
      </div>
     
      <div className="about-section">
        <h2>About Us</h2>
        <div className="group-members">
          <div className="member-card">
            <h3>Armaan Singh Chahal</h3>
            <p>student id: 301559489</p>
          </div>
          <div className="member-card">
            <h3>Andy Bae</h3>
            <p>student id: </p>
          </div>
          <div className="member-card">
            <h3>Adityapal Singh Waraich</h3>
            <p>student id:</p>
          </div>
          <div className="member-card">
            <h3>Gordon</h3>
            <p>student id: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
