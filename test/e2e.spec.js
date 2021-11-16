/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

describe('express', function() {
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
    
});
