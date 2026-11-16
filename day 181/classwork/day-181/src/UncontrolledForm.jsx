import { useRef } from 'react';
function UncontrolledForm() {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textInput">Enter Text: </label>
      <input 
        id="textInput" 
        type="text" 
        ref={inputRef} 
        placeholder="Type something..." 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledForm;
