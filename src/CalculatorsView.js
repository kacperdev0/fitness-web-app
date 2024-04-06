import React, { useState } from "react";

function CalculatorsView() {
    const [heightValue, setHeightValue] = useState('');
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
   
    const styles = {
       container: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         marginTop: '50px',
       },
       inputContainer: {
         marginBottom: '20px',
       },
       input: {
         marginTop: '10px',
         padding: '10px',
         fontSize: '16px',
       },
       calculateBtn: {
         padding: '10px 20px',
         fontSize: '16px',
         cursor: 'pointer',
         backgroundColor: '#007bff',
         color: 'white',
         border: 'none',
         borderRadius: '5px',
       },
       result: {
         marginTop: '20px',
         fontSize: '18px',
       },
    };
   

    return (
        <div id="right-panel" style={{ padding: "2%", width: "91%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={styles.container}>
                <h1>BMI and Calorie Calculator</h1>
                <div style={styles.inputContainer}>
                    <label htmlFor="height">Enter Your Height (cm):</label>
                    <input
                    type="number"
                    id="height"
                    value={heightValue}
                    onChange={(e) => setHeightValue(e.target.value)}
                    style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="weight">Enter Your Weight (kg):</label>
                    <input
                    type="number"
                    id="weight"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                    style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="age">Enter Your Age (years):</label>
                    <input
                    type="number"
                    id="age"
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                    style={styles.input}
                    />
                </div>
                <button style={styles.calculateBtn} onClick={calculateBmiAndCalories}>
                    Calculate BMI and Estimated Calories
                </button>
                {bmiValue && calorieValue && (
                    <div style={styles.result}>
                    <p>Your BMI: <span>{bmiValue}</span></p>
                    <p>Estimated Daily Calories: <span>{calorieValue}</span></p>
                    </div>
                )}
                </div>
        </div>
    );
}

export default CalculatorsView;
