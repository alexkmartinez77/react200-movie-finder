const defaultState = {
  movieDetails: {},
};

export default function MovieDetailsReducer(state = defaultState, action){
  const { type, payload } = action

  switch(type){

    case 'GET_MOVIE_DETAILS_PENDNG': {
      return {
      ...state,
      pending: true,
      }
    }

    case 'GET_MOVIE_DETAILS_FULFILLED': {
      return {
      ...state,
      movieDetails: payload.data,
      }
    }

    default: {
      return state
    }
  }
}