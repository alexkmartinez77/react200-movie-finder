/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
import 'regenerator-runtime/runtime'
require('dotenv').config();


let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

app.get('/movieInfo/:inputValue', async(req, res) => {
  axios({
    url: `http://omdbapi.com/?s=${req.params.inputValue}&apikey=${process.env.OMDB_API_KEY}`,
    method: 'get'
  })
  .then((response) => {
    let moviesArray = response.data.Search
    const movies = Promise.all(moviesArray.map( async movie => {
      const movieData = await axios({
          url: `http://omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.OMDB_API_KEY}`,
          method: 'get'
        })
      return movieData.data;
    }))
    return movies;
    })
  .then(response => res.send(response));
});
////////////////////////////////////////////// TESTS //////////////////////////////////////////////
describe('express', async function() {

  this.timeout(30000);

  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('title').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('should have an movieSearch input', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('input').name)
      .end()
      .then((name) => {
        expect(name).to.equal('movieSearch');
      })
  );

  it('should have a submit button', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('button').type)
      .end()
      .then((type) => {
        expect(type).to.equal('submit');
      })
  );

  it('button name should be findMovie', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('button').name)
      .end()
      .then((name) => {
        expect(name).to.equal('findMovie');
      })
  );

  it('returns the correct status code', () => axios.get(url)
  .then(response => expect(response.status === 200)));

  it('call to proxy server /movieInfo/:inputValue returns an array', async () => {
    const movie = 'Top Gun';
    const movieArray = await axios.get(`${url}/movieInfo/${movie}`);
    expect(movieArray.data).to.be.an('array');
  })

  it('returned array should have 10 objects representing 10 movies', async () => {
    const movie = 'Top Gun';
    const movieArray = await axios.get(`${url}/movieInfo/${movie}`);
    expect(movieArray.data).to.have.lengthOf(10);
  })

  it('returned objects should have required key/value pairs', async () => {
    const movie = 'Top Gun';
    const movieArray = await axios.get(`${url}/movieInfo/${movie}`);
    expect(movieArray.data[0]).to.have.property('Title');
    expect(movieArray.data[0]).to.have.property('Poster');
    expect(movieArray.data[0]).to.have.property('Year');
    expect(movieArray.data[0]).to.have.property('Plot');
    expect(movieArray.data[0]).to.have.property('imdbID');
    expect(movieArray.data[0]).to.have.property('Runtime');
    expect(movieArray.data[0]).to.have.property('Rated');
  })

  it('"Top Gun" search returns results with titles including Top Gun', async () => {
    const movie = 'Top Gun';
    const movieArray = await axios.get(`${url}/movieInfo/${movie}`);
    expect(movieArray.data[0].Title).to.include('Top Gun');
  })

  it('"Harry Potter" search returns results with titles including Top Gun', async () => {
    const movie = 'Harry Potter';
    const movieArray = await axios.get(`${url}/movieInfo/${movie}`);
    expect(movieArray.data[0].Title).to.include('Harry Potter');
  })

});
