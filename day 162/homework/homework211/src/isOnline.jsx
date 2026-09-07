import React from 'react';

function StatusMessage({ isOnline }) {
  return (
    <p>
      სტატუსი: {isOnline ? 'ონლაინშია' : 'ოფლაინშია'}
    </p>
  );
}

export default StatusMessage;
