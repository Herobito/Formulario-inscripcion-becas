const mongoose = require('mongoose');

const InscripcionSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    carrera: { type: String, required: true },
    materias_aprobadas: { type: String, required: true }
});

module.exports = mongoose.model('Inscripcion', InscripcionSchema);

