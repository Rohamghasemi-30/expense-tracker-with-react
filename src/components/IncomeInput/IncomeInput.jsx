import React from 'react';

import "./IncomeInput.css"

function IncomeInput({ value, onChange }) {
  return (
    <input
      type="number"
      placeholder="درآمد"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default IncomeInput;