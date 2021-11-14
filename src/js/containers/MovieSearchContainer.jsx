import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar';
import Movies from '../components/Movies';

class MovieSearchContainer extends React.Component {

	render() {
		return (
			<div className="container">
				<Header />
				<SearchBar />
				<Movies />
			</div>
		)
	}
}

export default MovieSearchContainer;