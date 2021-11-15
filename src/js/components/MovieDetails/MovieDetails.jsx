import React from 'react';
import { getMovieDetails } from './moviedetailsActions';

export default class MovieDetails extends React.Component {
  constructor(props){
    super(props);
    this.handleMovieDetails = this.handleMovieDetails.bind(this)
  }

  handleMovieDetails(movieID){
    const { dispatch } = this.props;
    dispatch(getMovieDetails(movieID));
  }

  UNSAFE_componentWillMount(){
    this.handleMovieDetails(this.props.movieID)
  }

  render() {
    const { Title, Plot, Year, Runtime, Rated, Poster, Awards, Metascore, imdbRating, BoxOffice, Actors, Director } = this.props.movieDetails
  return (
    <div>
      <div className='text-center my-5'>
        <img className='posterBorder' src={ Poster }></img>
      </div>
      <div className='container' style={{width: '350px', backgroundColor: 'white'}}>
        <h1 className='display-6 text-center'>{ Title }</h1>
        <hr></hr>
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
        <div className='row mb-2'>
          <div className='col'>
            <span>
              <span className="material-icons align-bottom mr-1">auto_stories</span>
              <span className="font-weight-bold mr-1 playFont lightSeaGreen">Plot:</span>
              <span className="slateGrey">{ Plot }</span>
            </span>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <span>
              <span className="material-icons align-bottom mr-1">video_camera_front</span>
              <span className="font-weight-bold mr-1 playFont lightSeaGreen">Director:</span>
              <span className="slateGrey"> { Director }</span>
            </span>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <span>
              <span className="material-icons align-bottom mr-1">people_alt</span>
              <span className="font-weight-bold mr-1 playFont lightSeaGreen">Actors:</span>
              <span className="slateGrey">{ Actors }</span>
            </span>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <span>
              <span className="material-icons align-bottom mr-1">emoji_events</span>
              <span className="font-weight-bold mr-1 playFont lightSeaGreen">Awards:</span>
              <span className="slateGrey">{ Awards }</span>
            </span>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <span>
              <span className="material-icons align-bottom mr-1">percent</span>
              <span className="font-weight-bold mr-1 playFont lightSeaGreen">Metascore:</span> { Metascore }
            </span>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <span>
              <span className="material-icons align-bottom mr-1">thumbs_up_down</span>
                <span className="font-weight-bold mr-1 playFont lightSeaGreen">IMDB:</span> { imdbRating }
            </span>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <span>
            <span className="material-icons align-bottom mr-1">paid</span>
              <span className="font-weight-bold mr-1 playFont lightSeaGreen">Box Office:</span> { BoxOffice }
            </span>
          </div>
        </div>
    </div>
  </div>
  );
 }
}