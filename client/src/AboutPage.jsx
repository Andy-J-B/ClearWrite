import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Reuse the same CSS
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const AboutPage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme logic
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <div className="homepage-container">
      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Navigate to the previous page
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Day-Night Toggle */}
      <div className="day-night-toggle">
        <button onClick={toggleTheme} className="toggle-button">
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

      {/* About Section */}
      <h1>About</h1>
      <p>
        Unlike costly grammar checkers or AI writing assistants, ClearWrite provides real-time
        feedback and suggestions to guide students to better essays. It’s a tool made for students
        who want to learn and improve but can’t afford premium services, and for teachers who aim to
        foster learning, not shortcuts and AI usage.
      </p>

      {/* How to Use Section */}
      <h2>How to use it</h2>
      <p>ClearWrite is designed to help you become a better writer through real-time feedback and suggestions. Here's how to use it:</p>
      <ul>
        <li><strong>Type Your Text:</strong> Enter your essay, paragraph, or sentence in the provided text box on the main page.</li>
        <li><strong>Evaluate Your Writing:</strong> Click the "Evaluate" button. The system will analyze your text using advanced grammar and readability tools.</li>
        <li><strong>APIs at Work:</strong>
          <ul>
            <li><strong>TextGears API:</strong> Checks for grammatical errors, suggests corrections, and evaluates readability.</li>
            <li><strong>Sapling API:</strong> Enhances suggestions by providing deeper insights into your writing and context-based improvements.</li>
          </ul>
        </li>
        <li><strong>View Feedback:</strong> ClearWrite will highlight grammatical issues, suggest corrections, and provide a readability rating to guide your improvements.</li>
        <li><strong>Revise and Improve:</strong> Use the feedback to refine your writing until it meets your expectations.</li>
      </ul>

      {/* Button to Navigate to Home */}
      <button
        className="evaluate-button"
        onClick={() => navigate('/home')}
      >
        Continue to ClearWrite
      </button>
    </div>
  );
};

export default AboutPage;
