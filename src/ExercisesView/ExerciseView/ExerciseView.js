import React from "react";
import Grid from "@mui/material/Grid";

function ExerciseView({ exercise }) {
    if (exercise === undefined)
        return;
    return (
        <>
            <h2>{exercise.title}</h2>
            <p>{exercise.difficulty}</p>
            {exercise.mediaLinks ? 
                <Grid container spacing={2}>
                    <img src={exercise.mediaLinks.first} alt="exercise media 1"></img>
                    <img src={exercise.mediaLinks.second} alt="exercise media 1"></img>
                </Grid>
            : <></>}
            <ol>
                {exercise.instructions.map(instruction => {
                    return (<><li>{instruction}</li><br></br></>)
                })}
            </ol>
        </>
    );
}

export default ExerciseView;