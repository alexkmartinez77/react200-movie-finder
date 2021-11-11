import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    movie: store.search.movie,
  };
}
export default connect(mapStoreToProps)(SearchBar);