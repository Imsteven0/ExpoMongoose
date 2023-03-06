const Schemamovie = require('../models/movie');

exports.home = async (req, res, next) => {
    try {
        const movies = await Schemamovie.find();
        res.render("../views/pages/home.ejs", { data: movies })
    } catch (error) {
        res.status(400).json(error.message);
    }
};

exports.FormMovie = async (req, res, next) => {
    res.render("../views/pages/form.ejs")
};

exports.AddMovies = async (req, res, next) => {
    try {
        const movie = new Schemamovie(req.body);
        await movie.save();
        res.render("../views/pages/form.ejs", { message: 'La pelicula ' + req.body.Titulo + 'se ha guardado exitosamente!' })
    } catch (error) {
        res.status(400).json(error.message);
    }
};

exports.DeleteMovies = async (req, res, next) => {
    try {
        await Schemamovie.findByIdAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'La pelicula se ha eliminado' });
    } catch (error) {
        res.status(400).json(error.message)
    }


};

exports.UpdateMovies = async (req, res, next) => {
    try {
        const movie = await Schemamovie.findByIdAndUpdate({ _id: req.params.id },
            req.body, {
            new: true
        });
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).send(error.message);
    }

};