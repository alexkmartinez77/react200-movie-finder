import { connect } from 'react-redux';
import Movies from './Movies';

function mapStoreToProps(store) {
  return {
    movies: store.search.movies,
  };
}
export default connect(mapStoreToProps)(Movies);