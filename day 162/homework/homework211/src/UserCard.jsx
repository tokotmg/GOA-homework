import React from 'react';

function UserCard({ username, age }) {
  return (
    <div className="user-card">
      <h2>მომხმარებლის ინფორმაცია</h2>
      <p>სახელი: {username}</p>
      <p>ასაკი: {age}</p>
    </div>
  );
}

export default UserCard;
