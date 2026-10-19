// CounterContainer.jsx
import React, { useState } from 'react';
import CounterView from './CounterView';
function CounterContainer() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);
  return (
    <CounterView
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
    />
  );
}
export default CounterContainer;
