import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';

const AboutPage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <div className="aboutpage-container">

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

      <div className="introduction-page">
      <h1>ClearWrite</h1>
        <p>
            <strong>Your Guide to Better Writing</strong> – This tool empowers you to enhance your
            writing skills without doing the work for you.
        </p>
      </div>

      <div className="about-content">

        <h1 className="about-title">About</h1>
        <p className="about-description">
          Unlike costly grammar checkers or AI writing assistants, ClearWrite provides real-time
          feedback and suggestions to guide students to better essays. It’s a tool made for students
          who want to learn and improve but can’t afford premium services, and for teachers who aim to
          foster learning, not shortcuts and AI usage.
        </p>

        <h2 className="section-title">How to Use It</h2>
        <p className="section-description">
          ClearWrite is designed to help you become a better writer through real-time feedback and
          suggestions. Here's how to use it:
        </p>
        <div className="how-to-use">
          <ul className="how-to-use-list">
            <li>
              <strong>Type Your Text:</strong> Enter your essay, paragraph, or sentence in the
              provided text box on the main page.
            </li>
            <li>
              <strong>Evaluate Your Writing:</strong> Click the "Evaluate" button. The system will
              analyze your text using advanced grammar and readability tools.
            </li>
            <li>
              <strong>APIs at Work:</strong>
              <ul className="nested-list">
                <li>
                  <strong>TextGears API:</strong> Checks for grammatical errors, suggests
                  corrections, and evaluates readability.
                </li>
                <li>
                  <strong>Sapling API:</strong> Enhances suggestions by providing deeper insights
                  into your writing and context-based improvements.
                </li>
              </ul>
            </li>
            <li>
              <strong>View Feedback:</strong> ClearWrite will highlight grammatical issues, suggest
              corrections, and provide a readability rating to guide your improvements.
            </li>
            <li>
              <strong>Revise and Improve:</strong> Use the feedback to refine your writing until it
              meets your expectations.
            </li>
          </ul>
        </div>

        <button className="evaluate-button" onClick={() => navigate('/home')}>
          Continue to ClearWrite
        </button>
            <div className="about-section">
            <h2>About Us</h2>
            <div className="group-members">
            <div className="member-card">
                <h3>Armaan Singh Chahal</h3>
                <p>Student ID: 301559489</p>
            </div>
            <div className="member-card">
                <h3>Andy Junhyuk Bae</h3>
                <p>Student ID: 301578862</p>
            </div>
            <div className="member-card">
                <h3>Adityapal Singh Waraich</h3>
                <p>Student ID:</p>
            </div>
            <div className="member-card">
                <h3>Gordon</h3>
                <p>Student ID:</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
