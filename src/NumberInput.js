import React from 'react';
import TextField from '@mui/material/TextField';

const NumberInput = ({ label, value, onChange, ...props }) => {
  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^\d]/g, ''); // Allow only digits
    onChange(newValue);
  };

  return (
    <TextField
      label={label}
      type="text"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default NumberInput;
