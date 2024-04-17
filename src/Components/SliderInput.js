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
            color: '#d85f19',
            '& .MuiSlider-thumb': {
              backgroundColor: '#d85f19',
            },
            '& .MuiSlider-valueLabel': {
              color: 'white',
              backgroundColor: "#d85f19"
            },
            '& .MuiSlider-markLabel': {
              color: 'white',
            }
          }}
        {...props}
      />
  );
};

export default SliderInput;