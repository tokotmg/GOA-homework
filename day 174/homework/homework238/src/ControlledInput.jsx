import React, { useState } from 'react';
function ControlledInput() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Controlled Component Example</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..." 
        style={{ padding: '8px', fontSize: '16px', width: '250px' }}
      />
      <p style={{ marginTop: '15px', fontSize: '18px' }}>
        <strong>You typed:</strong> {text}
      </p>
    </div>
  );
}
export default ControlledInput;
