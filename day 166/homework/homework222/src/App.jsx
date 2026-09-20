import React, { useState, useEffect } from 'react';
export default function VisibilityToggle() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    console.log("visibility changed");
  }, [isVisible]);
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <button onClick={() => setIsVisible(prev => !prev)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && (
        <p style={{ marginTop: '10px' }}>
          This is the toggleable text!
        </p>
      )}
    </div>
  );
}
