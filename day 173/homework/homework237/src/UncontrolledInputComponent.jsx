import React, { useRef } from 'react';
function UncontrolledInputComponent() {
  const inputRef = useRef(null);
  const handleClick = () => {
    alert(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}
export default UncontrolledInputComponent;
