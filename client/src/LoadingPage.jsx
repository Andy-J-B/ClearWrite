import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0); 
  const navigate = useNavigate();


  useEffect(() => {
    const simulateAPICalls = async () => {
      for (let i = 1; i <= 6; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        setProgress(i); 
      }
    };

    simulateAPICalls();
  }, []);

  useEffect(() => {
    if (progress === 6) {
      navigate("/results");
    }
  }, [progress, navigate]);

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
