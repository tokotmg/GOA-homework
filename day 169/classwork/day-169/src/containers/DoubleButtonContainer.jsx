import React, { useState } from 'react';
import DoubleButtonView from '../components/DoubleButtonView';

export default function DoubleButtonContainer() {
  const [value, setValue] = useState(1);

  const handleDouble = () => {
    setValue((prevValue) => (prevValue === 0 ? 2 : prevValue * 2));
  };

  return <DoubleButtonView value={value} onDouble={handleDouble} />;
}
