import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';
import SearchReducer from './components/SearchBar/searchReducer';
import MovieDetailsReducer from './components/MovieDetails/movieDetailsReducer';

/*Need promiseMiddleware for api call to OMDB API*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
	search: SearchReducer,
	details: MovieDetailsReducer
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware)));

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);
