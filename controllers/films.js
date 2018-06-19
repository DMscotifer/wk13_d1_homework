const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = new express.Router();

filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]});
})

filmRouter.get('/', function(req, res){
  res.json(films);
})

filmRouter.put('/:id', function(req, res){
  const index = req.params.id;
  films[index] = new Film(req.body);
  res.json({data: films});
})

filmRouter.post('/', function(req, res){
  const newFilm = new Film(req.body);
  films.push(newFilm);
  res.json({data: films});
})

filmRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  films.splice(index, 1);
  res.json({data: films});
})


module.exports = filmRouter;
