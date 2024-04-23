import React from "react";

function ExerciseView({ exercise }) {
    if (exercise === undefined)
        return;
    return (
        <>
            <h2>{exercise.title}</h2>
            <p>{exercise.difficulty}</p>
            <ol>
                {exercise.instructions.map(instruction => {
                    return (<><li>{instruction}</li><br></br></>)
                })}
            </ol>
        </>
    );
}

export default ExerciseView;