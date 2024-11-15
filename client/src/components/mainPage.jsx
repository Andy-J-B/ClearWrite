import React, { useState } from "react";
import "../styles.css"; // Ensure the CSS is correctly linked
import logo from "../images/clearWritebg.png"; // Adjust this path to your actual image location

const MainPage = () => {
  const [text, setText] = useState(""); // This state will hold the essay text

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Here we make a POST request to the API endpoint
      const response = await fetch("http://localhost:3000/correctGrammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }), // Send the text state in the request body
      });
      const data = await response.json();
      console.log(data); // Log or handle the response data
      // Optionally, handle navigation or state updates based on the response
    } catch (error) {
      console.error("Error submitting essay:", error);
    }
  };

  return (
    <div className="container">
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
