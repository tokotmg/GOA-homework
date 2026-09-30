import React, { useState } from 'react';
import GreetingCard from './GreetingCard';
export default function GreetingContainer() {
  const [name, setName] = useState('დავითი');

  return (
    <div>
      {/* Pass the name state as a prop named "name" */}
      <GreetingCard name={name} />
    </div>
  );
}
