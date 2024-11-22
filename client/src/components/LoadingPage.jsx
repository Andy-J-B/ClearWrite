import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Homepage.css";
import { useProgress } from "./ProgressContext";

const LoadingPage = () => {
  const { progress } = useProgress();
  return (
    <div className="loading-container">
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
