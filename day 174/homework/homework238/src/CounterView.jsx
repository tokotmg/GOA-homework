import React from 'react';
function CounterView({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div style={{ textAlign: 'center', margin: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Counter App</h1>
      <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>{count}</h2>
      <div>
        <button onClick={onDecrement} style={{ margin: '0 5px', padding: '8px 16px' }}>
          Decrement
        </button>
        <button onClick={onReset} style={{ margin: '0 5px', padding: '8px 16px' }}>
          Reset
        </button>
        <button onClick={onIncrement} style={{ margin: '0 5px', padding: '8px 16px' }}>
          Increment
        </button>
      </div>
    </div>
  );
}
export default CounterView;
