import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); // State for the counter

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Basic Counter</h1>
      <section className="section">
        <h2>Counter</h2>
        <div>
          <button onClick={decreaseCounter}>Decrease</button>
          <span> {counter} </span>
          <button onClick={increaseCounter}>Increase</button>
        </div>
      </section>
    </div>
  );
}

export default App;
