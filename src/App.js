// src/App.js
import React, { useState } from 'react';
import './App.css';

// Child Component for Dynamic Addition
function Child({ id }) {
  return <div>Child Component {id}</div>;
}

function App() {
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState('');
  const [children, setChildren] = useState([]);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0); // State for the counter

  const addChild = () => {
    setChildren([...children, children.length + 1]);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with input value: ${inputValue}`);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsDisabled(value === '');
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      {/* Task 1 Sections */}
      <section className="section">
        <h2>Simple JSX</h2>
        <h1>Hello, World!</h1>
        <p>This is a simple JSX example.</p>
      </section>

      <section className="section">
        <h2>Records List</h2>
        <ul>
          {[
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
            { id: 3, name: 'Michael Johnson' }
          ].map(record => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Show/Hide Element</h2>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'} Element
        </button>
        {show && <div>This is a toggleable element.</div>}
      </section>

      <section className="section">
        <h2>Enable/Disable Form Submission</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type to enable submit button"
          />
          <button type="submit" disabled={isDisabled}>Submit</button>
        </form>
        <button onClick={() => setIsDisabled(!isDisabled)}>
          Toggle Submit Button
        </button>
      </section>

      <section className="section">
        <h2>Two-Way Data Binding</h2>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type something"
        />
        <p>{text}</p>
      </section>

      <section className="section">
        <h2>Dynamic Child Components</h2>
        <button onClick={addChild}>Add Child Component</button>
        <div>
          {children.map(id => (
            <Child key={id} id={id} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Sum of Two Numbers</h2>
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <button onClick={handleSum}>Calculate Sum</button>
        {sum !== null && <p>Sum: {sum}</p>}
      </section>

      {/* Task 2: Counter */}
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
