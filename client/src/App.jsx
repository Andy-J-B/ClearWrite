import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainPage() {
    const [essay, setEssay] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/correctGrammar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: essay })
            });
            const data = await response.json();
            alert('Essay evaluated! Check the console for results.');
            console.log(data);
        } catch (error) {
            console.error('Error submitting essay:', error);
            alert('Error sending essay for evaluation.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                placeholder="Enter your essay here ..."
            />
            <button type="submit">Evaluate</button>
        </form>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <div>
                            <a href="https://vite.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo" />
                            </a>
                            <a href="https://react.dev" target="_blank">
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
                        <MainPage />
                    </>
                } />
            </Routes>
        </Router>
    );
}

export default App;
