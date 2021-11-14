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
    const { Title, Plot, Year, Runtime, Rated } = this.props.movieDetails
  return (
    <div className='row'>
    <div className='col-sm-6 col-md-6 col-lg-4 text-center p-3'>
      <img style={{height: '400px', width: '333px', backgroundColor:'white'}}></img>
    </div>
    <div className='col-sm-6 col-md-6 col-lg-8'>
      <h1 className='display-6 text-center'>{ Title }</h1>
      <hr></hr>
      <div className='row'>
        <div className='col font-weight-bold'>Released</div>
        <div className='col font-weight-bold'>Duration</div>
        <div className='col font-weight-bold'>Rated</div>
      </div>
      <div className='row mb-2'>
        <div className='col'><span className="material-icons align-bottom mr-1">event</span>{ Year }</div>
        <div className='col'><span className="material-icons align-bottom mr-1">timer</span>{ Runtime }</div>
        <div className='col'><span className="material-icons align-bottom mr-1">movie</span>{ Rated }</div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <span>
            <span className="material-icons align-bottom mr-1">auto_stories</span>
            <span className="font-weight-bold mr-1">Plot:</span>
            { Plot }
          </span>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <span>
            <span className="material-icons align-bottom mr-1">emoji_events</span>Nominated for 7 oscars. Another 19 wins. & 30 nominations
            </span>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <span>
            <span className="material-icons align-bottom mr-1">thumbs_up_down</span>
              <span className="font-weight-bold mr-1">Metascore:</span> 80/100
          </span>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <span>
            <span className="material-icons align-bottom mr-1">thumbs_up_down</span>
              <span className="font-weight-bold mr-1">IMDB:</span> 9.3
          </span>
        </div>
      </div>
    </div>
  </div>
  );
 }
}