import React, { useState, useEffect } from 'react';
export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    console.log("quantity changed", quantity);
  }, [quantity]);
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Prevents going below 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px' }}>
      <button onClick={decrement} style={{ padding: '5px 10px', fontSize: '16px' }}>-</button>
      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{quantity}</span>
      <button onClick={increment} style={{ padding: '5px 10px', fontSize: '16px' }}>+</button>
    </div>
  );
}
