import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import ProfileCard from './ProfileCard';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <ProfileCard 
          username="JaneDoe" 
          biography="Frontend developer and open-source enthusiast." 
          profilePicture="https://placeholder.com" 
        />
        <Dashboard />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
