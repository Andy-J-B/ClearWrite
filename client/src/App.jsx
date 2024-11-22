import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './IntroPage';
import AboutPage from './AboutPage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
