//ისევე, როგორც HTML-ში, React-იც იყენებს ფორმებს, რათა მომხმარებლებს ვებგვერდთან ურთიერთობის საშუალება მისცეს.
import React, { useState } from 'react';
export default function SimpleForm() {
  const [inputText, setInputText] = useState('');
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="text-input" style={{ display: 'block', marginBottom: '8px' }}>
          Enter Text:
        </label>
        <input
          id="text-input"
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Type something..."
          style={{ padding: '8px', width: '250px', fontSize: '16px' }}
        />
      </form>
      <p style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold' }}>
        You entered: {inputText}
      </p>
    </div>
  );
}
