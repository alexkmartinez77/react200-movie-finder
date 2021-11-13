import Axios from "axios";

export function getMovieDataByID(movie) {
  return {
    type: 'GET_MOVIE_DATA',
    payload: Axios.get(`/movieInfo/${movie}`)
  }
}