import React from 'react';
import Movie from './Movie';

export default class Movies extends React.Component {

  render() {
    const movies = this.props.movies;
    return (
      <div>
        {
          movies.map((movie, index) => {
            return(
              <Movie key={index} movieData={movie}/>
            )
          })
        }
      </div>
    );
 }
}