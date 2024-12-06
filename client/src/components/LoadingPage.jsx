/*
 *** LoadingPage.jsx
 ***
 *** Description: Displays a loading screen with a progress bar while API requests are being sent.
 ***              Allows users to cancel the process and return to the homepage.
 ***
 *** Components:
 *** - LoadingPage: A full-page component providing loading feedback with a cancel option.
 ***
 *** Features:
 *** - Progress Bar: Dynamically updates to reflect loading progress using the `ProgressContext`.
 *** - Cancel Button: Lets users abort the loading process and navigate back to the home page.
 ***
 *** Functions:
 *** - handleCancel: Aborts ongoing API requests via `AbortControllerContext` and redirects to the homepage.
 ***
 *** Styling:
 *** - Custom styles defined in `LoadingPage.css`.
 *** - Includes a visually appealing progress bar and cancel button with hover effects.
 ***
 *** Hooks:
 *** - useProgress: Accesses the current progress state from `ProgressContext`.
 *** - useNavigate: Handles navigation using React Router.
 *** - useAbortController: Manages API request abortion using an `AbortController` reference.
 ***
 *** Icons:
 *** - FaTimes: Used for the cancel button icon, providing a clear visual cue for cancellation.
 ***
 *** Notes:
 *** - Ensure `ProgressContext` and `AbortControllerContext` are properly implemented and wrap the app.
 *** - Progress is calculated as a percentage of 6 API features being loaded.
 ***
 */

// Import all necessary files
import { useProgress } from "./ProgressContext";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../css/LoadingPage.css"; // Import styles
import { useAbortController } from "./AbortControllerContext"; // Import the custom hook

// LoadingPage
const LoadingPage = () => {
  // Set progress of the API requests
  const { progress } = useProgress();

  // Navigate through components
  const navigate = useNavigate();

  // Create the AbortController ref
  const abortControllerRef = useAbortController();

  // Handle cancelling evaluation
  const handleCancel = (abortControllerRef) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Abort ongoing API requests
    }
    navigate("/home"); // Redirect to the homepage
  };

  return (
    <div className="loading-page">
      {/* Loading Page */}
      <h1 className="loading-title">Loading Results</h1>
      <p className="loading-subtext">
        Please wait, loading essential features...
      </p>
      <div className="progress-bar">
        {/* Progress bar */}
        <div
          className="progress-bar-fill"
          style={{ width: `${(progress / 6) * 100}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress}/6 Features Loaded</p>
      <div
        className="cancel-container"
        onClick={() => handleCancel(abortControllerRef)}
      >
        {/* Cancel Button */}
        <FaTimes size={24} className="cancel-icon" />
        <span className="cancel-text">Go back to Main Page</span>
      </div>
    </div>
  );
};

export default LoadingPage;
