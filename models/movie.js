const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Titulo: {
        type: String,
        trim: true,
        required: true
    },
    Director: {
        type: String,
        trim: true,
        required: true
    },
    Duracion: {
        type: String,
        trim: true,
        required: true
    },
    Precio: {
        type: String,
        trim: true,
        required: true
    },
    TotalVentas: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    Calificacion: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('Pelicula', movieSchema);