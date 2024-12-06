/*
 *** IntroPage.jsx
 ***
 *** Description: The introductory page for ClearWrite, welcoming users and
 ***              providing options to explore the application or learn more about it.
 ***
 *** Components:
 *** - IntroPage: A introduction page with a brief description of ClearWrite and navigation buttons.
 ***
 *** Features:
 *** - Welcome Message: Engages users with a friendly introduction and mission statement.
 *** - Navigation Buttons: Direct users to either start using the app or learn more through the FAQ page.
 ***
 *** Functions:
 *** - `navigate`: Utilized via `useNavigate` for seamless routing between pages.
 ***
 *** Styling:
 *** - Custom styles are defined in `IntroPage.css`.
 *** - Uses Bootstrap classes for consistent button styling (`btn`, `btn-primary`, `btn-secondary`).
 *** - Layout optimized for readability and user engagement.
 ***
 *** Notes:
 *** - The page structure emphasizes user accessibility and clean navigation options.
 *** - Consider adding responsive design adjustments for optimal viewing on smaller screens.
 ***
 */

import { useNavigate } from "react-router-dom";
import "../css/IntroPage.css";

// IntroPage
const IntroPage = () => {
  // Navigate between pages
  const navigate = useNavigate();

  return (
    <div className="intro">
      {/* Intro Page */}
      <div className="intro-container">
        <h1>Hello! Welcome to ClearWrite!</h1>
        <p>
          &quot;<strong>Your Guide to Better Writing</strong> &ndash; This tool
          empowers you to enhance your writing skills without doing the work for
          you&quot;.
        </p>

        <div className="intro-content">
          <p className="intro-description">
            Unlike costly grammar checkers or AI writing assistants, ClearWrite
            provides real-time feedback and suggestions to guide students to
            better essays. It&rsquo;s a tool made for students who want to learn
            and improve but can&rsquo;t afford premium services, and for
            teachers who aim to foster learning, not shortcuts and AI usage.
          </p>
        </div>

        <div className="button-group">
          {/* Buttons to start */}
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            Get Started
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/FAQ")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Export component
export default IntroPage;
