import React from 'react';
import { Link }  from 'react-router-dom';

export default class Movies extends React.Component {
  render() {
    const { Title, Poster, Year, Plot, imdbID, Runtime, Rated} = this.props.movieData;
    const index = this.props.index;
    return (
      <div className='card my-3'>
        <div className='row'>
          <div style={{width: '300px'}} className='text-center'>
            <img src={ Poster }></img>
          </div>
          <div className="container" style={{width: '350px'}}>
            <h1 id={`movieTitle${index}`} className='display-6 text-center playFont'>{ Title }</h1>
            <div className='row'>
              <div className='col text-center font-weight-bold playFont lightSeaGreen'>Released</div>
              <div className='col text-center font-weight-bold playFont lightSeaGreen'>Duration</div>
              <div className='col text-center font-weight-bold playFont lightSeaGreen'>Rated</div>
            </div>
            <div className='row mb-2'>
              <div className='col text-center'><span className="material-icons align-bottom mr-1">event</span><span className="slateGrey">{ Year }</span></div>
              <div className='col text-center'><span className="material-icons align-bottom mr-1">timer</span><span className="slateGrey">{ Runtime }</span></div>
              <div className='col text-center'><span className="material-icons align-bottom mr-1">movie</span><span className="slateGrey">{ Rated }</span></div>
            </div>
            <hr></hr>
            <div className='row mb-2'>
              <div className='col'>
                <span>
                  <span className="material-icons align-bottom mr-1">auto_stories</span>
                  <span className="font-weight-bold mr-1 lightSeaGreen">Plot:</span>
                  <span className="slateGrey">{ Plot }</span>
                </span>
              </div>
            </div>
            <div className='float-right m-3'>
              <Link to={`/movie/${imdbID}`}>
                <button type='button' className='btn btn-info playFont'>
                  <span className="material-icons align-top">zoom_in</span> More Information
                </button>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    );
 }
}