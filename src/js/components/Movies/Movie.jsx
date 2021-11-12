import React from 'react';

export default class Movies extends React.Component {

  render() {
    const { Title, Poster, Year, Plot} = this.props.movieData;
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
            <div className='float-right m-3'><button className='btn btn-info'>More Information</button></div>
          </div>
        </div>
      </div>
    );
 }
}