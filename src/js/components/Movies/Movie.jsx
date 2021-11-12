import React from 'react';

export default class Movies extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const id = this.props.movieData.imdbID;
    console.log(id);
  }

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
            <div className='float-right m-3'><button type='button' className='btn btn-info' onClick={() => this.handleClick()}>More Information</button></div>
          </div>
        </div>
      </div>
    );
 }
}