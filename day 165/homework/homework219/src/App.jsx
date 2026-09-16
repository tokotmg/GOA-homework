import React, { useState } from 'react';
function ColorList() {
  const [colors, setColors] = useState(['Blue', 'Green', 'Yellow']);
  const addColor = () => {
    setColors([...colors, 'Red']);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h3>Color List</h3>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
      <button onClick={addColor}>
        Add Color
      </button>
    </div>
  );
}
export default ColorList;
