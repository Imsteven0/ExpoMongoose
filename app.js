const express = require('express')
require('dotenv').config();
const Movies = require('./routes/Movie.js')
const mongoose = require('./db/mongoose')
//creamos una constante que esta llamando a express
const app = express();
mongoose.Database();

//recibe y envia datos json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//llamo a la ruta movies en app.js
app.use('/', Movies());

app.use("/public", express.static("public"));
app.use("/assets", express.static("./public/assets"));
app.use("/css", express.static("./public"));
app.use("/js", express.static("./public/js"));

app.set("views", "./views");
app.set("view engine", "ejs");

//para que el servidor se levante en el puerto 2002
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
})