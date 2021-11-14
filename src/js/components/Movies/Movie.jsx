import React from 'react';
import { Link }  from 'react-router-dom';
import getMovieDataByID from './searchIDActions';

export default class Movies extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ID){
    console.log(ID);
  }
  render() {
    const { Title, Poster, Year, Plot, imdbID} = this.props.movieData;
    return (
      <div className='card my-3'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 text-center p-3'>
            <img src={ Poster }></img>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-8'>
            <h1 className='display-6 text-center'>{ Title }</h1>
            <h1 className='display-6 text-center'>{ Year }</h1>
            <hr></hr>
            <div>{ Plot }</div>
            <div className='float-right m-3'>
              <Link to={`/movie/${imdbID}`}>
                <button type='button' className='btn btn-info' onClick={() => this.handleClick(imdbID)}>
                  <span class="material-icons align-top">zoom_in</span> More Information
                </button>
              </Link></div>
          </div>
        </div>
      </div>
    );
 }
}