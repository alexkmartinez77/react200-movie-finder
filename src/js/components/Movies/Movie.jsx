import React from 'react';

export default class Movies extends React.Component {

  render() {
    const { Title, Poster, Year} = this.props.movieData;
    return (
      <div>
        { Title } { Poster } { Year }
      </div>
    );
 }
}