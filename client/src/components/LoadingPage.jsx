import React from "react";
import { useProgress } from "./ProgressContext";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../css/LoadingPage.css"; // Import styles
import { useAbortController } from "./AbortControllerContext"; // Import the custom hook

const LoadingPage = () => {
  const { progress } = useProgress();
  const navigate = useNavigate();

  // Create the AbortController ref
  const abortControllerRef = useAbortController();

  const handleCancel = (abortControllerRef) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Abort ongoing API requests
    }
    navigate("/home"); // Redirect to the homepage
  };

  return (
    <div className="loading-page">
      <h1 className="loading-title">Loading Results</h1>
      <p className="loading-subtext">
        Please wait, loading essential features...
      </p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(progress / 6) * 100}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress}/6 Features Loaded</p>
      <div
        className="cancel-container"
        onClick={() => handleCancel(abortControllerRef)}
      >
        <FaTimes size={24} className="cancel-icon" />
        <span className="cancel-text">Go back to Main Page</span>
      </div>
    </div>
  );
};

export default LoadingPage;
