import React from 'react';
import './DoubleButtonView.css';

export default function DoubleButtonView({ value, onDouble }) {
  return (
    <div className="card">
      <h2>Number Doubler</h2>
      <p className="value-display">Current Value: <span>{value}</span></p>
      <button className="double-btn" onClick={onDouble}>
        Double It
      </button>
    </div>
  );
}
