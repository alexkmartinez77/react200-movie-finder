import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';

function mapStoreToProps(store) {
  return {
    movieDetails: store.details.movieDetails,
  };
}
export default connect(mapStoreToProps)(MovieDetails);