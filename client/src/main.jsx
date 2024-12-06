import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ProgressProvider } from "./components/ProgressContext.jsx";
import { AbortControllerProvider } from "./components/AbortControllerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProgressProvider>
      {/* Progress provider for loadingPage */}
      <AbortControllerProvider>
        {/* Abort controller for loadingPage */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AbortControllerProvider>
    </ProgressProvider>
  </React.StrictMode>
);
