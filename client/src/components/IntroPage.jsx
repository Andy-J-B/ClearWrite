/*
 *** IntroPage.jsx
 ***
 *** Description: 
 *** This component serves as the introduction page of the application.
 ***
 *** Features:
 *** - Introduces users to ClearWrite and its purpose.
 *** - Highlights the educational focus of the tool and its affordability.
 *** - Guides users to the main HomePage for starting their journey.
 *** - Implements a clean, minimalistic design to set the tone of the application.
 */

 import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/IntroPage.css";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="intro-container">
        <h1>Hello! Welcome to ClearWrite!</h1>
        <p>
          "<strong>Your Guide to Better Writing</strong> – This tool empowers
          you to enhance your writing skills without doing the work for you".
        </p>

        <div className="intro-content">
          <p className="intro-description">
            Unlike costly grammar checkers or AI writing assistants, ClearWrite
            provides real-time feedback and suggestions to guide students to
            better essays. It’s a tool made for students who want to learn and
            improve but can’t afford premium services, and for teachers who aim
            to foster learning, not shortcuts and AI usage.
          </p>
        </div>
        <button className="evaluate-button" onClick={() => navigate("/home")}>
          Continue to ClearWrite
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
