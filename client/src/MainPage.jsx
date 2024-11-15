import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:3000/correctGrammar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      const data = await response.json();

      // Redirect to the results page with the data
      navigate('/results', { state: { data } });
    } catch (error) {
      console.error('Error submitting essay:', error);
    }
  };

  return (
    <div>
      <header>
        <img src="/path/to/clearwrite-logo.png" alt="ClearWrite Logo" />
      </header>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your essay here ..."
        ></textarea>
        <button type="submit">Evaluate ...</button>
      </form>
    </div>
  );
};

export default MainPage;
