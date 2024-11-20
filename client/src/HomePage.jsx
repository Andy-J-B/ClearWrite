import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`homepage-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "Day Mode" : "Night Mode"}
      </button>

      {/* Essay Section */}
      <div className="essay-section">
        <img src="/path/to/logo.png" alt="ClearWrite Logo" className="logo" />
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
