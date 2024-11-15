import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./components/MainPage"; // Ensure this path matches your actual file

import EvaluationPage from "./components/evaluationPage";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}
export default App;
