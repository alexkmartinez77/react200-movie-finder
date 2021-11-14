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
        <div className="col-md-12 input-group">
          <span className="input-group-text" id="basic-addon1">
            <span class="material-icons">search</span>
          </span>
          <input
            type='text'
            className='form-control'
            value={this.props.movie}
            onChange={(e) => this.handleMovie(e)}
          />
          <button type='button' className='btn btn-outline-secondary' onClick={() => this.handleMovieData()}>Go!</button>
        </div>
      </div>
    </form>
  );
 }
}