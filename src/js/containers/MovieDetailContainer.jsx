import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 text-center p-3'>
            <img style={{height: '400px', width: '333px', backgroundColor:'white'}}></img>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-8'>
            <h1 className='display-6 text-center'>The Shawshank Redemption</h1>
            <h1 className='display-6 text-center'>Year</h1>
            <hr></hr>
            <div className='row'>
              <div className='col font-weight-bold'>Released</div>
              <div className='col font-weight-bold'>Duration</div>
              <div className='col font-weight-bold'>Genre</div>
            </div>
            <div className='row mb-2'>
              <div className='col'><span class="material-icons align-bottom">event</span> 1994</div>
              <div className='col'><span class="material-icons align-bottom">timer</span> 142 min</div>
              <div className='col'><span class="material-icons align-bottom">movie</span>Crime</div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <span>
                  <span class="material-icons align-bottom mr-1">auto_stories</span>
                  <span className="font-weight-bold mr-1">Plot:</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <span>
                  <span class="material-icons align-bottom mr-1">emoji_events</span>Nominated for 7 oscars. Another 19 wins. & 30 nominations
                  </span>
              </div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <span>
                  <span class="material-icons align-bottom mr-1">thumbs_up_down</span>
                    <span className="font-weight-bold mr-1">Metascore:</span> 80/100
                </span>
              </div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <span>
                  <span class="material-icons align-bottom mr-1">thumbs_up_down</span>
                    <span className="font-weight-bold mr-1">IMDB:</span> 9.3
                </span>
              </div>
            </div>
            <p>Viewing movie {this.props.match.params.id}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;