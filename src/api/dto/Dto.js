export default class Dto {
    /**
    * Creates a Dto object from a JSON representation.
    * @param {Object} json - The JSON object representing dto object.
    * @returns {Dto} An dto object created from the JSON representation.
    */
    static fromJson(json) {
        const dto = new Dto();
        Object.assign(dto, json);
        return dto;
    }
}