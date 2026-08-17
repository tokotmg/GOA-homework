import React from 'react';
import Header from './components/Header';
import TeslaModelS from './components/TeslaModelS';
import Porsche911 from './components/Porsche911';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, padding: '20px' }}>
        <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Featured Vehicles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <TeslaModelS />
          <Porsche911 />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
