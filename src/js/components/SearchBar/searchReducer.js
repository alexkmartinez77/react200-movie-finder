const defaultState = {
  movie: '',
  movies: [],
};

export default function SearchReducer(state = defaultState, action){
  const { type, payload } = action

  switch(type){

    case 'UPDATE_MOVIE': {
      return {
      ...state,
      movie: payload.movie,
      }
    };

    case 'GET_MOVIE_DATA_PENDNG': {
      return {
      ...state,
      pending: true,
      }
    }

    case 'GET_MOVIE_DATA_FULFILLED': {
      return {
      ...state,
      movies: payload.data,
      }
    }

    default: {
      return state
    }
  }
}