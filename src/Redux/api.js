import axios from 'axios';

//for the clarity saparated the api call here

export const getData = () => axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1048b32b547275a61162c1da5ed72986');


export const searchData = (query) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1048b32b547275a61162c1da5ed72986&query=${query}`)