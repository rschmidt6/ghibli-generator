// src/lib/api.ts
import axios from "axios";

// Create an axios instance with common configuration
const api = axios.create({
  baseURL: "https://ghibli.rest",
  timeout: 5000, // Requests will fail if they take longer than 5 seconds
});

// Return type for our fetch functions
type ApiResponse<T> = Promise<T>;

// Define our response types based on the API structure
export interface GhibliFilm {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: string;
}

// Function to fetch all films
export const fetchFilms = async (): ApiResponse<GhibliFilm[]> => {
  const { data } = await api.get<GhibliFilm[]>("/films");
  return data;
};

// Function to get a random film from the array
export const getRandomFilm = (films: GhibliFilm[]): GhibliFilm => {
  return films[Math.floor(Math.random() * films.length)];
};
