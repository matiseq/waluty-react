import React from 'react';
import './Input.css';

function Input({ id, label, type, value, onChangeValue }) {
  const handleChange = (event) => {
    onChangeValue(event.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;
