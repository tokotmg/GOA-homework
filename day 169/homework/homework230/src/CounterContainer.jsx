import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <CounterDisplay 
      count={count} 
      onIncrement={incrementCount} 
    />
  );
};

export default CounterContainer;
