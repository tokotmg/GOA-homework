import React, { useState } from 'react';
export default function ScoreTracker() {
  const [score, setScore] = useState(0);
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '20px' }}>
      <h2>Score: {score}</h2>
      <button 
        onClick={() => setScore(score + 10)} 
        style={{ marginRight: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        +10 points
      </button>
      <button 
        onClick={() => setScore(0)} 
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}
