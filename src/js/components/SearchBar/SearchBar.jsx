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

  handleMovieData(){
    const { dispatch } = this.props;
    dispatch(getMovieData(this.props.movie));
  }

  render() {
  return (
    <form>
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
            />
          </div>
          <div className="text-center mt-3">
            <button type='button' className='btn btn-info playFont' onClick={() => this.handleMovieData()}>Find Movie!</button>
          </div>

        </div>
      </div>
    </form>
  );
 }
}