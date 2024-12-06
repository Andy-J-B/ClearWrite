/*
 *** App.jsx
 ***
 *** Description : This is the main application component responsible for routing and page transitions.
 ***               It utilizes React Router for navigation and React Transition Group for smooth transitions.
 ***
 *** Components:
 *** - Router: Sets up the routing for the application.
 *** - Routes: Contains all the route definitions.
 *** - CSSTransition: Manages page transitions with animations.
 ***
 *** Features:
 *** - Introductory Page: Displayed at the root path ("/").
 *** - Home Page: Accessed at "/home".
 *** - Loading Page: Displays progress during API interactions at "/loading".
 *** - Evaluation Page: Shows results and feedback at "/evaluate".
 *** - About Us Page: Provides team details and project information at "/about-us".
 *** - FAQ Page: Answers frequently asked questions at "/FAQ".
 ***
 *** Styling:
 *** - Uses Bootstrap for consistent component styling.
 *** - Includes custom CSS for page transitions defined in `transitions.css`.
 ***
 *** Key Functions:
 *** - Smooth page transitions using CSSTransition and SwitchTransition.
 *** - Dynamic routing with React Router.
 ***
 *** Notes:
 *** - The application's location is managed using the `useLocation` hook to track the current route.
 *** - Ensure that the CSS for transitions (`transitions.css`) is properly configured for fade effects.
 ***
 */

import {
  Routes, // Container for all route definitions
  Route, // Defines individual routes
  useLocation, // Provides information about the current location
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group"; // Used for handling smooth page transitions
import "./App.css"; // General styling for the app
import HomePage from "./components/HomePage.jsx"; // Home Page Component
import LoadingPage from "./components/LoadingPage.jsx"; // Loading Page Component
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for consistent styling
import EvaluationPage from "./components/evaluationPage.jsx"; // Evaluation Page Component
import AboutUs from "./components/AboutUs.jsx"; // About Us Page Component
import FAQ from "./components/FAQ.jsx"; // FAQ Page Component
import IntroPage from "./components/IntroPage.jsx"; // Introductory Page Component
import "./css/transitions.css"; // Custom CSS for page transitions

const App = () => {
  const location = useLocation(); // Retrieve the current location for transition handling

  return (
    // Handles smooth transitions between routes
    <SwitchTransition>
      <CSSTransition
        key={location.key} // Ensures transitions are triggered on route changes
        timeout={300} // Duration of the transition in milliseconds
        classNames="fade" // The name of the transition defined in transitions.css
      >
        {/* Define the application's routes */}
        <Routes location={location}>
          {/* Introductory page displayed at the root path */}
          <Route path="/" element={<IntroPage />} />
          {/* Home page */}
          <Route path="/home" element={<HomePage />} />
          {/* Loading page */}
          <Route path="/loading" element={<LoadingPage />} />
          {/* Evaluation page */}
          <Route path="/evaluate" element={<EvaluationPage />} />
          {/* About Us page */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* FAQ page */}
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

// Wrapper for the application to provide additional flexibility or styling
const WrappedApp = () => (
  <div>
    <App />
  </div>
);

export default WrappedApp;
