const express = require('express');
const router = express.Router();

// require the Drone model here
const Movie = require("../models/Movie.model");
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//ITERATION 4
router.get("/movies/:id", (req, res, next) => {
    const id= req.params.id
      Movie.findById(id)
      .then((movie) =>{
        res.render("movies-details", movie);
      })
  });


router.get("/movies", (req, res, next) => {
    Movie.find()
    .then(movies =>{
      console.log(`Listed ${movies.length} movies from the DB`)
      res.render("movies", {movies})
    })
    .catch((err)=> console.log ("DB error reading '/movies"));
  });


module.exports = router;
