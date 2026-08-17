import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '15px', backgroundColor: '#1a1a1a', color: '#888', textAlign: 'center', marginTop: '40px' }}>
      <p>&copy; {new Date().getFullYear()} Ultimate Garage. Built with React.</p>
    </footer>
  );
}
