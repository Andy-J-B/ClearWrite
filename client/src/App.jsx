import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import LoadingPage from "./LoadingPage.jsx";

const App = () => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
