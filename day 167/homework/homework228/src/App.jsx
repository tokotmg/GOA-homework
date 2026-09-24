import React, { useState, useEffect } from 'react';
export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Comments</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {comments.map((comment) => (
          <li key={comment.id} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <p><strong>Email:</strong> {comment.email}</p>
            <p><strong>Comment:</strong> {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
