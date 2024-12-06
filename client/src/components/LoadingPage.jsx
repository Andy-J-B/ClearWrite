/*
 *** LoadingPage.jsx
 ***
 *** Description: 
 *** This component is a transitional page that displays a loading screen while API calls are being processed.
 ***
 *** Features:
 *** - Shows a progress bar with real-time updates based on API responses.
 *** - Includes a cancel option to navigate back to the HomePage.
 *** - Enhances user experience with responsive and dynamic progress indicators.
 */

 import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Homepage.css";
import { useProgress } from "./ProgressContext";
import { FaTimes } from "react-icons/fa"; // Importing the X icon

const LoadingPage = () => {
  const { progress } = useProgress();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/home"); // Redirect to the homepage when cancel is clicked
  };

  return (
    <div className="loading-container">
      <div className="cancel-icon" onClick={handleCancel}>
        <FaTimes size={20} />
      </div>
      <h1>Loading Results...</h1>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(progress / 6) * 100}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress}/6 Features Loaded</p>
    </div>
  );
};

export default LoadingPage;
