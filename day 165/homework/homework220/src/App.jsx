import React, { useState } from 'react';
function ItemList() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const handleClearList = () => {
    setItems([]);
  };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
}
export default ItemList;
