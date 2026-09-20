import React, { useState, useEffect } from 'react';
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    if (likes > 0) {
      console.log('liked');
    }
  }, [likes]);
  return (
    <button 
      onClick={() => setLikes(prevLikes => prevLikes + 1)}
      style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
    >
      👍 Like ({likes})
    </button>
  );
}
