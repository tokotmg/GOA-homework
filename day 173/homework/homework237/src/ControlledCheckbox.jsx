import React, { useState } from 'react';
function ControlledCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleChange} 
        />
        <span>{isChecked ? 'Checked' : 'Unchecked'}</span>
      </label>
    </div>
  );
}
export default ControlledCheckbox;
