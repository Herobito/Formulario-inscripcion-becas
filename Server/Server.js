
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const inscripcionRoutes = require('./Routes/inscripcion');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/beca_inscripcion';

mongoose.connect('mongodb://localhost:27017/beca_inscripcion')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/inscripcion', inscripcionRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
