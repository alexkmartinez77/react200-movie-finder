import React from 'react';

export default class Movies extends React.Component {

  render() {
    const movies = this.props.movies;
    return (
      <div>
        {
          movies.map((movie, index) => {
            const { Title, Poster, Year} = movie;
            return(
              <div key={index}>
                { Title } { Poster } { Year }
              </div>
            )
          })
        }
      </div>
    );
 }
}