import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Imports pages
import MainPage from "./components/MainPage"; // Ensure this path matches your actual file
import EvaluationPage from "./components/EvaluationPage";

function App() {
  console.log("Rendering App Component");
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<IntroPage />} /> */}
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/loading" element={<LoadingPage />} /> */}
        <Route path="/evaluation" element={<EvaluationPage />} />
      </Routes>
    </div>
  );
}
export default App;
