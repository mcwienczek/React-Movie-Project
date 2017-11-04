import axios from 'axios'; 

const API_KEY = 'ba97ad63d202b24bf9b8e972f25ea9f1'; 
const mainURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=[searchterm]`; 

export const FETCH_MOVIES = 'FETCH_MOVIES'; 

export function fetchMovies(movie) {
    //creating a new url suitable for query search 
    let searchTerm = movie.replace('', '+'); 
    const newURL = mainURL.replace('[searchterm]', searchTerm);
    const request = axios.get(newURL); 
    
    return {
        type: FETCH_MOVIES,
        payload: request
    }; 
}