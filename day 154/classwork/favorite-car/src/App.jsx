import React from 'react';
import './App.css';
function App() {
  const handleLearnMore = () => {
    alert('Redirection to the official Porsche GT3 RS page!');
  };
  return (
    <div className="car-card">
      <h1>My Absolute Dream Car</h1>
      <h2>Porsche GT3 RS</h2>
      <h3>Performance Metrics</h3>
      <h4>Naturally Aspirated Engine</h4>
      <h5>Track-Focused Aerodynamics</h5>
      <h6>A Masterpiece of Engineering</h6>
      <img 
        src="Images/filters_format(avif).png" 
        alt="Porsche GT3 RS" 
        style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', margin: '15px 0' }}
      />
      <p>
        The Porsche GT3 RS represents the pinnacle of street-legal sports cars. 
        With its 4.0-liter flat-six engine producing 518 horsepower, it revs up to a 
        screaming 9,000 RPM. The massive rear wing and active aerodynamics provide 
        unmatched downforce, making it an absolute weapon on both the racetrack and 
        winding canyon roads.
      </p>
      <button onClick={handleLearnMore} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Explore Specifications
      </button>
    </div>
  );
}
export default App;