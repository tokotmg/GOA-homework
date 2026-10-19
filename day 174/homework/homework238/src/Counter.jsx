import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Counter App</h1>
      <h2 style={{ fontSize: '3rem', margin: '20px 0' }}>{count}</h2>
      <div>
        <button onClick={decrement} style={buttonStyle}>- Decrement</button>
        <button onClick={reset} style={buttonStyle}>Reset</button>
        <button onClick={increment} style={buttonStyle}>+ Increment</button>
      </div>
    </div>
  );
}
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  margin: '0 5px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc'
};
export default Counter;