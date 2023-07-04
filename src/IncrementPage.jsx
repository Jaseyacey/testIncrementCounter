import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setCount(count + parseInt(inputValue));
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <form onSubmit={handleInputSubmit}>
        <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Input value"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Counter;
