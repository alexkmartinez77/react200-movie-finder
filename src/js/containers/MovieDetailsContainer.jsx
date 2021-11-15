import React from 'react';
import MovieDetails from '../components/MovieDetails';

class MovieDetailsContainer extends React.Component {
  render() {
    return (
      <div>
        <MovieDetails movieID={this.props.match.params.id}/>
      </div>
    )
  }
}

export default MovieDetailsContainer;