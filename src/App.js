import React, { useState } from 'react';
import Cards from './components/Cards';

function App() 
{
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {!gameStarted ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <Cards />
      )}
    </div>
  );
}

export default App;
