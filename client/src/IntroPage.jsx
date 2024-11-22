import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Reuse the same CSS

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="day-night-toggle">
        <button className="toggle-button">
          {/* Add the day-night toggle logic */}
        </button>
      </div>
      <div className="introduction-page">
      <h1>ClearWrite</h1>
      <p>
        <strong>Your Guide to Better Writing</strong> – This tool empowers you to enhance your
        writing skills without doing the work for you.
      </p>
      <button
        className="evaluate-button"
        onClick={() => navigate('/about')}
      >
        Start
      </button>
      </div>
    </div>
  );
};

export default IntroPage;
