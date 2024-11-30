import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import EvaluationPage from "./components/evaluationPage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FAQ from "./components/FAQ.jsx";
import "./css/transitions.css";

const App = () => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<EvaluationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/evaluate" element={<EvaluationPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const WrappedApp = () => (
  <div>
    <App />
  </div>
);

export default WrappedApp;
