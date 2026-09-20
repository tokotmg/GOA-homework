import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("number changed");
  }, [count]);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>React Counter Prototype</h1>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>
        <strong>{count}</strong>
      </div>
      <div>
        <button onClick={decrement} style={{ marginRight: '10px', padding: '10px 20px' }}>
          Decrement
        </button>
        <button onClick={increment} style={{ padding: '10px 20px' }}>
          Increment
        </button>
      </div>
    </div>
  );
}
export default App;
