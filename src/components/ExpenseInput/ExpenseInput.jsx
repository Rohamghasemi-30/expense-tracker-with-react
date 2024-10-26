import React from 'react';

import "./ExpenseInput.css"

function ExpenseInput({ value, onChange }) {
  return (
    <input
    className='expense'
      type="number"
      placeholder="هزینه"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default ExpenseInput;