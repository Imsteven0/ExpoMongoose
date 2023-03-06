const Schemamovie = require('../models/movie');

exports.home = async (req, res, next) => {
    res.render("../views/pages/home.ejs")
};

exports.FormMovie = async (req, res, next) => {
    res.render("../views/pages/form.ejs")
};


exports.listMovies = async (req, res, next) => {
    try {
        await Schemamovie.find()
        .then(objetos => res.render("../views/pages/list.ejs", { data: objetos }))
        .catch(err => console.error('No se pudo recuperar los objetos', err));
    } catch (error) {
        res.status(400).json(error.message);
    }
};


//insertOne
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