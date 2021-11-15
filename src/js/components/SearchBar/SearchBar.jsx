import React from 'react';
import { updateMovie, getMovieData } from './searchActions'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleMovie = this.handleMovie.bind(this)
    this.handleMovieData = this.handleMovieData.bind(this)
  }

  handleMovie(e){
    const { dispatch } = this.props;
    const movie = e.target.value;
    dispatch(updateMovie(movie));
  }

  handleMovieData(e){
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(getMovieData(this.props.movie));
  }

  render() {
  return (
    <form onSubmit={this.handleMovieData}>
      <div className='row mb-3 mt-1'>
        <div className="col-md-12">
          <div className="row inner-addon left-addon">
            <span className="material-icons glyphicon">search</span>
            <input
              type='text'
              className='form-control playFont'
              value={this.props.movie}
              placeholder='Enter Movie Name (e.g. Harry Potter)'
              onChange={(e) => this.handleMovie(e)}
              required
              maxLength='70'
            />
          </div>
          <div className="text-center mt-3">
            <button type='submit' className='btn btn-info playFont'>Find Movie!</button>
          </div>
        </div>
      </div>
    </form>
  );
 }
}