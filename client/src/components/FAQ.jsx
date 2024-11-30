// src/components/FAQ.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Homepage.css'; // Ensure the path is correct based on your project structure
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import faqOverview from '../assets/image/faq-clearwrite-overview.png';
import faqGettingStarted from '../assets/image/faq-getting-started.png';
import faqFeatures from '../assets/image/faq-features.png';
import { FaEnvelope } from 'react-icons/fa';
import ContactSection from './ContactSection';

const FAQ = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = React.useState(false);

  // Toggle theme logic
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <div className="aboutpage-container">
           {/* Navbar */}
           <nav className="navbar">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
        </button>

        {/* Navbar Links and Day-Night Toggle */}
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <button onClick={() => navigate("/home")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/about-us")}>About Us</button>
            </li>
            <li>
              <button onClick={() => navigate("/faq")}>FAQ</button>
            </li>
          </ul>
          <div className="day-night-toggle">
            <button onClick={toggleTheme} className="toggle-button">
              {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="about-content">
        {/* FAQ Section */}
        <h1 className="about-title">Frequently Asked Questions</h1>

        {/* Question 1 */}
        <div className="faq-item">
          <h2 className="section-title">1. What is ClearWrite?</h2>
          <p className="section-description">
            ClearWrite is a free, real-time writing assistant designed to help students improve their essays by providing instant feedback on grammar, readability, and overall writing quality.
          </p>
          {/* Image Placeholder */}
          <img
            src={faqOverview}
            alt="ClearWrite Overview Screenshot"
            className="faq-image"
            loading="lazy"
          />
        </div>

        {/* Question 2 */}
        <div className="faq-item">
          <h2 className="section-title">2. How do I get started with ClearWrite?</h2>
          <p className="section-description">
            Getting started is easy! Follow these simple steps:
          </p>
          {/* Image Placeholder */}
          <img
            src={faqGettingStarted}
            alt="Getting Started with ClearWrite Screenshot"
            className="faq-image"
            loading="lazy"
          />
          <ol className="how-to-use-list">
            <li>
              <strong>Visit the Home Page:</strong> Navigate to the ClearWrite home page where you can access the essay input section.
            </li>
            <li>
              <strong>Enter Your Essay:</strong> Type or paste your essay, paragraph, or sentence into the provided text box.
            </li>
            <li>
              <strong>Click "Evaluate":</strong> Press the "Evaluate" button to start the analysis.
            </li>
            <li>
              <strong>View Feedback:</strong> Review the grammatical corrections, readability scores, and other suggestions provided by ClearWrite.
            </li>
            <li>
              <strong>Revise Your Writing:</strong> Use the feedback to make improvements to your essay.
            </li>
          </ol>
        </div>

        {/* Question 3 */}
        <div className="faq-item">
          <h2 className="section-title">3. What features does ClearWrite offer?</h2>
          <p className="section-description">
            ClearWrite offers a range of features to enhance your writing:
          </p>
          {/* Image Placeholder */}
          <img
            src={faqFeatures}
            alt="ClearWrite Features Screenshot"
            className="faq-image"
            loading="lazy"
          />
          <ul className="how-to-use-list">
            <li>
              <strong>Grammar Correction:</strong> Identifies and suggests corrections for grammatical errors.
            </li>
            <li>
              <strong>Readability Analysis:</strong> Provides readability scores to help you gauge the clarity of your writing.
            </li>
            <li>
              <strong>Real-time Suggestions:</strong> Offers instant feedback as you type, enabling continuous improvement.
            </li>
            <li>
              <strong>API Integrations:</strong> Utilizes TextGears and Sapling APIs for advanced grammar checking and contextual suggestions.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Designed with a clean and intuitive layout for easy navigation.
            </li>
          </ul>
        </div>

        {/* Question 4 */}
        <div className="faq-item">
          <h2 className="section-title">4. Is ClearWrite free to use?</h2>
          <p className="section-description">
            Yes, ClearWrite is completely free for students and educators. We believe in providing accessible tools to aid in the learning and teaching process without any cost.
          </p>
        </div>

        {/* Question 5 */}
        <div className="faq-item">
          <h2 className="section-title">5. How does ClearWrite ensure data privacy?</h2>
          <p className="section-description">
            At ClearWrite, we prioritize your privacy. All essays and personal data are securely processed through our APIs without being stored or shared. Your writing remains confidential and is solely used to provide you with feedback.
          </p>
        </div>

        {/* Add more FAQ items as needed */}
        <ContactSection />
      </div>
    </div>
  );
};

export default FAQ;
