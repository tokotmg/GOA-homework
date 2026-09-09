import React, { useState } from 'react';
export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
}
