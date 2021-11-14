import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    <h1 className='display-3 text-center oleoFont'>
      <span className="material-icons  align-bottom movieIcon">local_movies</span>
      <span className="lightSeaGreen">Movie</span>
      <span className="slateGrey">Finder</span>
    </h1>  
    );
  }
}