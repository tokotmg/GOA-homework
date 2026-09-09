import React, { useState } from 'react';
export default function DiceRoller() {
  const [diceNumber, setDiceNumber] = useState(1);
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Dice Roll: {diceNumber}</h1>
      <button 
        onClick={rollDice} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Roll
      </button>
    </div>
  );
}
