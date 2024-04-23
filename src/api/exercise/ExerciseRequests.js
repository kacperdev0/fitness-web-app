import dtoFabric from "../dto/DtoFabric";
import { Exercise } from "./Exercise";


const exercisesFabric = dtoFabric.getObjectsFabric(Exercise.fromJson, "exercise");
const exerciseFabric = dtoFabric.getObjectFabric(Exercise.fromJson, "exercise");

/**
 * Fetches an exercise by its ID from the API.
 * @param {number} id - The ID of the exercise to retrieve.
 * @returns {Promise<Exercise>} A promise that resolves to an Exercise object representing the exercise with the given ID.
 */
export function findExerciseById(id) {
    return exerciseFabric(`/id/${id}`);
}

/**
 * Fetches exercises by their IDs from the API.
 * @param {number[]} ids - An array of exercise IDs to retrieve.
 * @returns {Promise<Exercise[]>} A promise that resolves to an array of Exercise objects representing the exercises with the given IDs.
 */
export function findExercisesByIds(ids) {
    if (ids.length === 0)
        return [];
    const path = ids.join(',');
    return exercisesFabric(`/ids/${path}`);
}

/**
 * Fetches all exercises from the API.
 * @returns {Promise<Exercise[]>} A promise that resolves to an array of Exercise objects representing all exercises.
 */
export function findAllExercises() {
    return exercisesFabric();
}

/**
 * Fetches exercises by body part ID from the API.
 * @param {number} id - The ID of the body part to filter exercises by.
 * @returns {Promise<Exercise[]>} A promise that resolves to an array of Exercise objects representing exercises filtered by body part ID.
 */
export function findExercisesByBodyPartId(id) {
    return exercisesFabric(`/body-part/${id}`);
}
