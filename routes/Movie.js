const express = require('express');
const router = express.Router();
const controllerMovie = require('../controller/controllerMovies');

module.exports = function () {

    router.get('/', controllerMovie.home);

    router.get('/AddMovies', controllerMovie.FormMovie);

    router.post('/movies', controllerMovie.AddMovies)

    router.put('/movies:id', controllerMovie.UpdateMovies)

    router.delete('/movies', controllerMovie.DeleteMovies)
    return router;
}