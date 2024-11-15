
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainPage from './MainPage';  // Ensure this path matches your actual file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EvaluationPage from './components/evaluationPage';


function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <div>
                            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                                <img src={viteLogo} className="logo" alt="Vite logo" />
                            </a>
                            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                        </div>
                        <h1>Vite + React</h1>
                        <div className="card">
                            <button onClick={() => setCount((count) => count + 1)}>
                                count is {count}
                            </button>
                            <p>Edit <code>src/App.jsx</code> and save to test HMR updates</p>
                        </div>
                        <p className="read-the-docs">
                            Click on the Vite and React logos to learn more
                        </p>
                        <MainPage />  {/* This uses the imported MainPage component */}
                    </>
                } />
            </Routes>
        </Router>
    );

}

export default App;
