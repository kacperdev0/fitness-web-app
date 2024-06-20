import React from "react";
import { ImageList, ImageListItem, Chip } from "@mui/material";

function getChipType(content) {
    if (content === "EASY")
        return 'success';
    if (content === "MEDIUM")
        return 'warning';
    if (content === "HARD")
        return 'error';
    return 'primary';
}

function ExerciseView({ exercise }) {
    if (exercise === undefined)
        return;

    return (
        <>
            <h2>{exercise.title}</h2>
            <Chip color={getChipType(exercise.difficulty)} label={exercise.difficulty}></Chip>
            {exercise.mediaLinks ? 
                <ImageList sx={{ width: 500, height: 200 }} cols={2} rowHeight={200}>
                    <ImageListItem key={exercise.mediaLinks.first}>
                        <img src={exercise.mediaLinks.first} alt="exercise media 1" loading="lazy"></img>
                    </ImageListItem>
                    <ImageListItem key={exercise.mediaLinks.second}>
                        <img src={exercise.mediaLinks.second} alt="exercise media 2" loading="lazy"></img>
                    </ImageListItem>
                </ImageList>
            : <></>}
            <ol>
                {exercise.instructions.map((instruction, i) => {
                    return (<li key={`instruction-${exercise.id}-${i}`}>{instruction}<br></br></li>)
                })}
            </ol>
        </>
    );
}

export default ExerciseView;