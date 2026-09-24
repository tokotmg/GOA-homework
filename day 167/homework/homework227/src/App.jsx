import React, { useState, useEffect } from 'react';
function CompletedTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const completedTasks = data.filter(task => task.completed === true);
        setTasks(completedTasks);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading completed tasks...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: '8px 0', color: 'green' }}>
            <strong>✓</strong> {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompletedTasks;
