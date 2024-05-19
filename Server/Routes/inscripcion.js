const express = require('express');
const router = express.Router();
const Inscripcion = require('../Models/inscripcion');




router.post('/',  (req, res) => {
    const nuevaInscripcion = new Inscripcion(req.body);
    try {
        
        res.status(201).send('Inscripción guardada correctamente');
    } catch (error) {
        res.status(400).send('Error al guardar la inscripción');
    }
});

module.exports = router;
