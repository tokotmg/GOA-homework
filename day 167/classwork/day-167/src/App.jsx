import React, { useState, useEffect } from 'react';
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  return (
    <div>
      <h2>User Directory</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ margin: '10px 0', listStyleType: 'none' }}>
            <strong>{user.name}</strong> — {user.email} <br />
            <small>Company: {user.company.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
