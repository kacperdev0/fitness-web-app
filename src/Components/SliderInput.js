import React from 'react';
import Slider from '@mui/material/Slider';


const SliderInput = ({ label, value, onChange, marks, ...props }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        marks={marks}
        orientation="vertical"
        sx={{
            marginTop: "25px",
            color: '#1976d2',
            '& .MuiSlider-thumb': {
              backgroundColor: '#1976d2',
            },
            '& .MuiSlider-valueLabel': {
              color: 'white',
              backgroundColor: "#1976d2"
            },
            '& .MuiSlider-markLabel': {
              color: 'black',
            }
          }}
        {...props}
      />
  );
};

export default SliderInput;