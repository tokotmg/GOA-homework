import React from 'react';
const CounterDisplay = ({ count, onIncrement }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};
export default CounterDisplay;
