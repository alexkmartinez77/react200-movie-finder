import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar';

class MovieSearchContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<SearchBar />
			</div>
		)
	}
}

export default MovieSearchContainer;