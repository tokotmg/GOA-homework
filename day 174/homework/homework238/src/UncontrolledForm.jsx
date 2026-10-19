import React, { useRef } from 'react';
function UncontrolledForm() {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredValue = inputRef.current.value;
    console.log("Submitted Value:", enteredValue);
    alert(`Form submitted with value: ${enteredValue}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input 
        id="username"
        type="text" 
        ref={inputRef} 
        defaultValue=""
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledForm;
