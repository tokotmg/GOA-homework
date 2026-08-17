import React from 'react';

// UserProfile Component
function UserProfile() {
  return (
    <div>
      <h1>John Doe</h1>
      <h2>Status: Online</h2>
      <p>Software engineer passionate about building clean, accessible user interfaces and learning new technologies.</p>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <main>
      <UserProfile />
    </main>
  );
}
