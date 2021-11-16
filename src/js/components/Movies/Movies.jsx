import React from 'react';
import Movie from './Movie';

export default class Movies extends React.Component {

  render() {
    const movies = this.props.movies;
    return (
      <div id='movies' name='test'>
        {
          movies.map((movie, index) => {
            return(
              <Movie key={index} movieData={movie} index={index}/>
            )
          })
        }
      </div>
    );
 }
}