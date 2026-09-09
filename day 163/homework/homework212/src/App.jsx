import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
        Decrease
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
