import React, { useState, useEffect } from 'react';
function PostTitles() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>Post Titles</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default PostTitles;