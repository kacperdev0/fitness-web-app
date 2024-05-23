import React, { useEffect, useState } from "react";
import { findExercisesByIds } from "../api/exercise/ExerciseRequests";
import ExerciseView from "./ExerciseView/ExerciseView";

function ExercisesView({ ids }) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        if (ids === undefined)
            return;
        if (ids.length === 0)
        {
            setExercises([]);
            return;
        }
        findExercisesByIds(ids)
            .then(data => setExercises([...data]))
            .catch(err => console.error(err));
    }, [ids]);

    return (
        <>
            {exercises.map(exercise => 
                <ExerciseView exercise={exercise} key={`ExerciseView-${exercise.id}`}/>
            )}
        </>
    );
}
export default React.memo(ExercisesView, (prev, next) => {
    // may be the same
    if (prev.ids !== undefined && next.ids !== undefined && prev.ids.length === next.ids.length) {
        // if next misses something from prev
        if (prev.ids.some(id => !next.ids.includes(id))) {
            return false;
        }
        return true;
    }
    return false;
});