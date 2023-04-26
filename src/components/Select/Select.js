import React from 'react';

function Select({ items, id, onChangeValue }) {
  return (
    <select id={id} onChange={(event) => onChangeValue(event.target.value)}>
      {items.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
