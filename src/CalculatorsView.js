import React, { useState } from "react";
import Slider from 'react-slider';
import "./calculatorView.css"

function CalculatorsView() {
    const [heightValue, setHeightValue] = useState(170);
    const [weightValue, setWeightValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [calorieValue, setCalorieValue] = useState('');

    const calculateBmiAndCalories = () => {
       if (heightValue && weightValue && ageValue) {
         const heightInMeters = heightValue / 100;
         const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
         setBmiValue(bmi);
   
         const estimatedCalories = (10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5).toFixed(0);
         setCalorieValue(estimatedCalories);
       }
    };
   

    return (
      <div id="right-panel" style={{ padding: "2%", width: "91%"}}>
        <h1>BMI and Calorie Calculator</h1>
          <div style={{ display: "flex"}}>

            <div style={{width: "30%", marginLeft: "20%"}}>
              <label htmlFor="height">Enter Your Height (cm):</label>
                <Slider
                  orientation="vertical"
                  value={heightValue}
                  onChange={(newValue) => setHeightValue(newValue)}
                  min={100}
                  max={250}
                  invert={true}
                  className="vertical-slider"
                  renderThumb={(props, state) => <div {...props}><b>{state.valueNow}</b></div>}
                />
            </div>

            <div style={{width: "30%", textAlign: "center", marginTop: "5%"}}>
                <label htmlFor="weight">Enter Your Weight (kg):</label><br/>
                <input
                type="number"
                id="weight"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                /><br/>

                <label htmlFor="age" style={{marginTop: "100px"}}>Enter Your Age (years):</label><br/>
                <input
                type="number"
                id="age"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                />
          </div>  
        </div>
        
        <button onClick={calculateBmiAndCalories}>
              Calculate BMI and Estimated Calories
        </button>

        {bmiValue && calorieValue && (
              <div>
              <p>Your BMI: <span>{bmiValue}</span></p>
              <p>Estimated Daily Calories: <span>{calorieValue}</span></p>
              </div>
          )}
      </div>
    );
}

export default CalculatorsView;
