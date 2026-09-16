import React, { useState } from 'react';
export default function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);
  const generateRandomNumber = () => {
    const rand = Math.floor(Math.random() * 10) + 1;
    setNumber(rand);
  };
  return (
    <div>
      <p>Current Number: {number !== null ? number : 'None'}</p>
      <button onClick={generateRandomNumber}>Generate Number</button>
    </div>
  );
}
