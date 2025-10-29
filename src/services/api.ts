import axios from 'axios';
//import 'dotenv/config';

const API_KEY = import.meta.env.VITE_API_KEY ;// Substitua pela sua chaveconst BASE_URL = 'https://www.omdbapi.com/';
const BASE_URL = import.meta.env.VITE_BASE_API ;// Substitua pela URL base da API

export const searchMovies = async (query:string) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  return response.data.Search || [];
};

export const getMovieDetails = async (id:string) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return response.data;
};

//Pra fazer buscas na API do OMDB
//http://www.omdbapi.com/?apikey=177d31b4&s=batman