require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movieInfo/:inputValue', async(req, res) => {
    var promises = [];

    axios({
      url: `http://omdbapi.com/?s=${req.params.inputValue}&apikey=${process.env.OMDB_API_KEY}`,
      method: 'get'
    })
    .then((response) => {
      /*let moviesArray = response.data.Search

      const movies = Promise.all(moviesArray.map( async movie => {
        const movieData = await axios({
            url: `http://omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.OMDB_API_KEY}`,
            method: 'get'
          })

        return movieData;
      }))
      console.log(movies);*/
      res.send(response.data.Search);
      })
    });

app.get('/movie/:id', (req, res) => {
    axios({
        url: `http://omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`,
        method: 'get'
    })
    .then((response) => {
        res.send(response.data);
    });
});

module.exports = app;
