import axios from 'axios'


/**
 * Create the API requester in a isolated form. 
 */
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export default api;

