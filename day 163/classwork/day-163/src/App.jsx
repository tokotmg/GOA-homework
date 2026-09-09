import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(2);

  function doubleNumber() {
    setCount(prevCount => prevCount * 2);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Current Number: {count}</h1>
      <button onClick={doubleNumber}>Double</button>
    </div>
  );
}
