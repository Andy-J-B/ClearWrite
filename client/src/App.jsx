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
const App = () => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<EvaluationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
          {/* <Route path="/evaluate" element={<EvaluationPage />} /> */}
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
