import React, { useState } from "react";
import "../styles.css"; // Ensure the CSS is correctly linked
import logo from "../images/clearWritebg.png"; // Adjust this path to your actual image location
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";

const MainPage = () => {
  // Implement progress for loadingPage
  const [progress, setProgress] = useState(0);

  // Implement when to show modal
  const [modalShow, setModalShow] = React.useState(false);

  // Use navigate to navigate between routers
  const navigate = useNavigate();

  // This state will hold the essay text
  const [text, setText] = useState("");

  // handleSubmit Function to get text, send to apis,
  // recieve json, and send to EvaluationPage
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate text character limit
    if (text.length > 4000 || text.length < 50) {
      // Send error is character limit is exceeded or too little
      setModalShow(true);
    } else {
      // If good, send api requests
      try {
        // List of endpoints
        const apiEndpoints = [
          "correctGrammar",
          "readability",
          "summarize",
          "rephrase",
          "aidetect",
          "tone",
        ];
        const results = [];
        for (let i = 0; i < 6; i++) {
          // Here we make a POST request to the API endpoint
          const response = await fetch(
            `http://localhost:3000/${apiEndpoints[i]}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ text }), // Send the text state in the request body
            }
          );
          const data = await response.json();
          results.push(data);
          setProgress((prev) => prev + 1); // Increment progress

          console.log(data); // Log or handle the response data
        }

        // Optionally, handle navigation or state updates based on the response

        // Navigate to the Evaluation page and pass data
        navigate("/evaluation", { state: { evaluationData: data } });
      } catch (error) {
        console.error("Error submitting essay:", error);
      }
    }
  };

  return (
    <div className="container">
      <ErrorModal show={modalShow} onHide={() => setModalShow(false)} />
      <header>
        <img src={logo} alt="ClearWrite Logo" className="logo" />
      </header>
      <form onSubmit={handleSubmit}>
        <textarea
          id="essayInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your essay here ..."
        ></textarea>
        <button type="submit">Evaluate</button>
      </form>
    </div>
  );
};

export default MainPage;
