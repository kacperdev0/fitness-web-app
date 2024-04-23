import dtoFabric from "../dto/DtoFabric";
import { BodyPart } from "./BodyPart";

const bodyPartsFabric = dtoFabric.getObjectsFabric(BodyPart.fromJson, "body-part");
const bodyPartFabric = dtoFabric.getObjectFabric(BodyPart.fromJson, "body-part");

/**
 * Fetches all body parts from the API.
 * @returns {Promise<BodyPart[]>} A promise that resolves to an array of BodyPart objects representing all body parts.
 */
export function findAllBodyParts() {
    return bodyPartsFabric();
}

/**
 * Fetches a body part by its name from the API.
 * @param {string} name - The name of the body part to retrieve.
 * @returns {Promise<BodyPart>} A promise that resolves to a BodyPart object representing the body part with the given name.
 */
export function findBodyPartByName(name) {
    return bodyPartFabric(`/name/${name}`);
}

/**
 * Fetches a body part by its ID from the API.
 * @param {number} id - The ID of the body part to retrieve.
 * @returns {Promise<BodyPart>} A promise that resolves to a BodyPart object representing the body part with the given ID.
 */
export function findBodyPartById(id) {
    return bodyPartFabric(`/id/${id}`);
}