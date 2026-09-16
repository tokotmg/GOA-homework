import React, { useState, useEffect } from 'react';
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'dark'));
  };
  useEffect(() => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#333333';
    } else {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';
    }
  }, [theme]);
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>The current theme is: <strong>{theme}</strong></h1>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid',
          backgroundColor: theme === 'light' ? '#333333' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#333333',
          transition: 'all 0.3s ease'
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
