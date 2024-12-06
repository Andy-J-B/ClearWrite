/*
 *** Navbar.jsx
 ***
 *** Description: Defines a responsive and functional navigation bar for the application,
 ***              incorporating navigation buttons, a dark mode toggle, and a back button.
 ***
 *** Components:
 *** - Navbar: The main navigation bar component containing links, a back button, and a dark mode toggle.
 ***
 *** Features:
 *** - Back Button: Allows users to navigate to the previous page.
 *** - Navigation Links: Provides buttons to access the Home, About Us, and FAQ pages.
 *** - Day-Night Toggle: Switches between light and dark themes dynamically using the `DarkModeContext`.
 ***
 *** Functions:
 *** - toggleDarkMode: Toggles the dark mode and updates the `isDarkMode` state.
 ***
 *** Styling:
 *** - Custom styles imported from `Homepage.css`.
 *** - Utilizes Bootstrap for consistent layout and responsiveness.
 ***
 *** Hooks:
 *** - useNavigate: Manages navigation between pages using React Router.
 *** - useDarkMode: Accesses and modifies the application's dark mode state via context.
 ***
 *** Notes:
 *** - Ensure that `DarkModeContext` is implemented and wraps the app to provide `isDarkMode` and `setIsDarkMode`.
 *** - React-icons (`FaArrowLeft`, `FaSun`, `FaMoon`) provide visual indicators for navigation and theme toggling.
 ***
 */

// Import all necessary files
import "../css/Homepage.css";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDarkMode } from "./DarkModeContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigating between pages
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  // Toggle for dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className="navbar">
      {/* Navbar */}
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft size={20} />
      </button>

      {/* Navbar Links and Day-Night Toggle */}
      <div className="navbar-right">
        <ul className="navbar-links">
          {/* Navigation to Home */}
          <li>
            <button onClick={() => navigate("/home")}>Home</button>
          </li>
          {/* Navigation to About Us */}
          <li>
            <button onClick={() => navigate("/about-us")}>About Us</button>
          </li>
          {/* Navigation to FAQ */}
          <li>
            <button onClick={() => navigate("/faq")}>FAQ</button>
          </li>
        </ul>
        <div className="day-night-toggle">
          <button onClick={toggleDarkMode} className="toggle-button">
            {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
