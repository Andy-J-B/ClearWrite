// src/components/HomePage.jsx

import React, { useState } from "react";
import "../css/Homepage.css";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/image/clearwrite-background.png";
import ErrorModal from "./ErrorModal";
import { useProgress } from "./ProgressContext";

const HomePage = () => {
  // Implement progress for loadingPage
  const { setProgress } = useProgress();

  // This state will hold the essay text
  const [text, setText] = useState("");

  // Implement when to show modal
  const [modalShow, setModalShow] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  // handleSubmit Function to get text, send to APIs,
  // receive JSON, and send to EvaluationPage
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate text character limit
    if (text.length > 4000 || text.length < 50) {
      // Send error if character limit is exceeded or too little
      setModalShow(true);
    } else {
      setProgress(0);
      navigate("/loading");
      // If good, send API requests
      try {
        const apiEndpoints = [
          "correctGrammar",
          "readability",
          "summarize",
          "rephrase",
          "aidetect",
          "tone",
        ];
        let results = {};
        const routerURL = import.meta.env.VITE_ROUTER_URL;
        for (let i = 0; i < 6; i++) {

          // Here we make a POST request to the API endpoint

          const response = await fetch(`${routerURL}/${apiEndpoints[i]}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Inform the server of JSON format
            },
            body: JSON.stringify({ text: text }), // Send the text state in the request body
          });

          const data = await response.json();

          results[apiEndpoints[i]] = data;
          setProgress((prev) => prev + 1); // Increment progress
        }

        // Optionally, handle navigation or state updates based on the response

        // const results = [0, 1, 2, 3, 4, 5, 5];

        // Navigate to the Evaluation page and pass data
        navigate("/evaluate", { state: { evaluationData: results } });
      } catch (error) {
        console.error("Error submitting essay:", error);
      }
    }
  };

  return (
    <div className="homepage-container">
      <ErrorModal show={modalShow} onHide={() => setModalShow(false)} />

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

      {/* Essay Section */}
      <div className="essay-section">
        <img src={logo} alt="ClearWrite Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="textarea-container">
            <textarea
              id="essayInput"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your essay here ..."
            ></textarea>
            <div className="character-count">{text.length} / 4000</div>
          </div>
          <button className="evaluate-button" type="submit">
            Evaluate
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
