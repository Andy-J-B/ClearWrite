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

  // handleSubmit Function to get text, send to apis,
  // recieve json, and send to EvaluationPage
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate text character limit
    if (text.length > 4000 || text.length < 50) {
      // Send error is character limit is exceeded or too little
      setModalShow(true);
    } else {
      setProgress(0);
      navigate("/loading");
      // If good, send api requests
      try {
        for (let i = 1; i <= 6; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setProgress((prev) => prev + 1);
        }
        // // List of endpoints
        // // const apiEndpoints = [
        // //   "correctGrammar",
        // //   "readability",
        // //   "summarize",
        // //   "rephrase",
        // //   "aidetect",
        // //   "tone",
        // // ];
        // // Comment out for now
        // const results = [];
        // for (let i = 0; i < 6; i++) {
        //   // Here we make a POST request to the API endpoint
        //   const response = await fetch(
        //     `http://localhost:3000/${apiEndpoints[i]}`,
        //     {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: text, // Send the text state in the request body
        //     }
        //   );
        //   const data = await response.json();
        //   results.push(data);
        //   setProgress((prev) => prev + 1); // Increment progress

        //   console.log(data); // Log or handle the response data
        // }

        // Optionally, handle navigation or state updates based on the response

        const results = [0, 1, 2, 3, 4, 5, 5];

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
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft size={20} />
      </button>

      <div className="day-night-toggle">
        <button onClick={toggleTheme} className="toggle-button">
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

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
