import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-card">
      <h2>Interactive Counter</h2>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button 
          className="btn btn-danger" 
          onClick={() => setCount((prev) => prev - 1)}
        >
          - Decrement
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button 
          className="btn btn-primary" 
          onClick={() => setCount((prev) => prev + 1)}
        >
          + Increment
        </button>
      </div>
    </div>
  );
}
export default Counter;
