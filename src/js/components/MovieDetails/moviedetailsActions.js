import Axios from "axios";

export function getMovieDetails(movieID) {
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: Axios.get(`/movie/${movieID}`)
  }
}