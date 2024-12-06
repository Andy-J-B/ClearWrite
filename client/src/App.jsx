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
