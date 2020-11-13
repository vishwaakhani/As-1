/*

  File name : server.js
  Student name :Vishwa Akhani
  StudentID :300913898
  Date:26 October 2020

*/

  const express = require('express');
  const request = require('request');
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  require('dotenv').config();

  const app = express();

  const PORT = process.env.PORT || 3000;

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/static', express.static('public'));

  app.set('views', './views');

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/project', (req, res) => {
    res.render('project');
  });
  app.get('/services', (req, res) => {
    res.render('services');
  });
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  app.get('/resume', (req, res) => {
    console.log('called');
    res.render('resume');
  });



app.listen(PORT, () => {
    console.log(`The server listening at http://localhost:${PORT}`);
});

module.exports = app;
