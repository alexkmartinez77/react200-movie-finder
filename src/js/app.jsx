import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container' style={{width: '700px'}}> 
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailsContainer } />
        </div>
      </Router>
    )
  }
}
