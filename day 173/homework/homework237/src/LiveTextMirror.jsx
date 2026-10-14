import React, { useState } from 'react';
function LiveTextMirror() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        style={{ padding: '8px', fontSize: '16px', width: '250px' }}
      />
      <p style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
        {text}
      </p>
    </div>
  );
}

export default LiveTextMirror;
