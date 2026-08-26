function App() {
  const userName = "Assistant";
  const isLoggedIn = true; 
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
  <div className="container">
    <img src="image-url-here.jpg" alt="Description" />
    <h1>{userName}</h1>
    <h1>{isLoggedIn ? "Welcome" : "Please log in"}</h1>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  </div>
  )
}

export default App