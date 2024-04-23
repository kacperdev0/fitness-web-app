class DtoFabric {
    #apiUrl;

    constructor(apiUrl) {
        this.#apiUrl = apiUrl;
    }

    /**
     * Returns a function that fetches a single object from the API.
     * @param {function} fromJson - Function to convert JSON data to object.
     * @param {string} basePath - The base path of the API endpoint.
     * @returns {function} A function that fetches a single object from the API.
     */
    getObjectFabric(fromJson, basePath) {
        return (path = "") => {
            const url = this.#apiUrl + basePath + path;
            return new Promise((resolve, reject) => {
                fetch(this.#apiUrl + basePath + path)
                    .then(response => {
                        if (response.ok)
                            return response.json();
                        reject(`Error status: ${response.status} while making request to ${url}`);
                    }).then(data => resolve(fromJson(data)))
                    .catch(err => reject(err));
            });
        }

    }

    /**
     * Returns a function that fetches an array of objects from the API.
     * @param {function} fromJson - Function to convert JSON data to object.
     * @param {string} basePath - The base path of the API endpoint.
     * @returns {function} A function that fetches an array of objects from the API.
     */
    getObjectsFabric(fromJson, basePath) {
        return (path = "") => {
            const url = this.#apiUrl + basePath + path;
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => {
                        if (response.ok)
                            return response.json();
                        reject(`Error status: ${response.status} while making request to ${url}`);
                    }).then(arr => resolve(arr.map(data => fromJson(data))))
                    .catch(err => reject(err));
            });
        }
    }
}

const dtoFabric = Object.freeze(new DtoFabric(process.env.REACT_APP_API));

export default dtoFabric;