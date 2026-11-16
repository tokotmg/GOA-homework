import React, { useRef, useState } from 'react';
function UncontrolledInputExample() {
  const inputRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const handleButtonClick = () => {
    if (inputRef.current) {
      setDisplayedText(inputRef.current.value);
    }
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
      />
      <button onClick={handleButtonClick}>
        Display Text
      </button>
      <p>{displayedText}</p>
    </div>
  );
}
export default UncontrolledInputExample;
