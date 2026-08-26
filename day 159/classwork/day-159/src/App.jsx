import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Input to prompt the user for their name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: '0.5rem', fontSize: '1rem', marginRight: '1rem' }}
      />
      {/* Render h1 header element that greets the user */}
      <h1>Hello, {name ? name : 'Guest'}!</h1>
    </div>
  );
}

export default App;
