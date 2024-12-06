/*
 *** HomePage.jsx
 ***
 *** Description:
 *** This component represents the main landing page where users can input their essays for evaluation.
 ***
 *** Features:
 *** - Provides a text area for users to input their essays.
 *** - Validates input for minimum and maximum character limits.
 *** - Sends essays to multiple APIs for analysis (grammar correction, readability, etc.).
 *** - Displays a progress modal for incomplete input.
 *** - Implements Light/Dark mode toggling and navigation links.
 *** - Progress updates are managed via a ProgressContext.
 */

// Import all necessary files
import React, { useState } from "react";
import "../css/Homepage.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/image/clearwrite-background.png";
import ErrorModal from "./ErrorModal";
import { useProgress } from "./ProgressContext";
import { useAbortController } from "./AbortControllerContext";
import { Navbar } from "./Navbar";

const HomePage = () => {
  // Implement progress for loadingPage
  const { setProgress } = useProgress();

  // Create the AbortController ref
  const abortControllerRef = useAbortController();

  // This state will hold the essay text
  const [text, setText] = useState("");

  // Implement when to show modal
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

  // handleSubmit Function to get text, send to APIs,
  // receive JSON, and send to EvaluationPage
  const handleSubmit = async (event, abortControllerRef) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate text character limit
    if (text.length > 4000 || text.length < 50) {
      // Send error if character limit is exceeded or too little
      setModalShow(true);
    } else {
      setProgress(0);
      navigate("/loading");
      // If good, send API requests

      const abortController = new AbortController();
      abortControllerRef.current = abortController; // Save the controller in the context

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

          const response = await fetch(
            `${routerURL}/${apiEndpoints[i]}`,

            {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Inform the server of JSON format
              },
              body: JSON.stringify({ text: text }), // Send the text state in the request body
              signal: abortController.signal,
            }
          );

          const data = await response.json();

          results[apiEndpoints[i]] = data;
          setProgress((prev) => prev + 1); // Increment progress
        }

        // Optionally, handle navigation or state updates based on the response

        // const results = [0, 1, 2, 3, 4, 5, 5];

        // Navigate to the Evaluation page and pass data
        navigate("/evaluate", {
          state: { originalText: text, evaluationData: results },
        });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("API requests were cancelled.");
        } else {
          console.error("Error submitting essay:", error);
        }
      }
    }
  };

  return (
    <div className="homepage-container">
      <ErrorModal show={modalShow} onHide={() => setModalShow(false)} />

      {/* Navbar */}
      <Navbar />

      {/* Essay Section */}
      <div className="essay-section">
        <img src={logo} alt="ClearWrite Logo" className="logo" />
        <form onSubmit={(event) => handleSubmit(event, abortControllerRef)}>
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
