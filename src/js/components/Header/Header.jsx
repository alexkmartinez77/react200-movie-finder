import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    <h1 className='display-3 text-center'>
      <span class="material-icons  align-bottom movieIcon">local_movies</span>
      Movie Finder
    </h1>  
    );
  }
}