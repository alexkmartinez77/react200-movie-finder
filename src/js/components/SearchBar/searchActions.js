import Axios from "axios";

export function updateMovie(movie) {
  return {
    type: 'UPDATE_MOVIE',
    payload: { movie }
  }
}

export function getMovieData(movie) {
  return {
    type: 'GET_MOVIE_DATA',
    payload: Axios.get(`/movieInfo/${movie}`)
  }
}