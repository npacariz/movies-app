import axios from 'axios'

export default class Movies {
    constructor() {
        axios.defaults.baseURL = "http://localhost:8000/api/";
    }

    getAll() {
       return axios.get('movies');
    }

    add(newMovie) {
        return axios.post('movies', newMovie)
    }
} 

export const movies = new Movies()