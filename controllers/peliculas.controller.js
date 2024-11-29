const PeliculaModel = require('../models/pelicula.model');

exports.getPeliculas = (req, res) => {
    res.json(PeliculaModel.getPeliculas());
};

exports.addPelicula = (req, res) => {
    const nuevaPelicula = PeliculaModel.addPelicula(req.body);
    res.status(201).json(nuevaPelicula);
};

exports.updatePelicula = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPelicula = PeliculaModel.updatePelicula(id, req.body);
    if (updatedPelicula) {
        res.json(updatedPelicula);
    } else {
        res.status(404).json({ error: "Película no encontrada" });
    }
};

exports.deletePelicula = (req, res) => {
    const id = parseInt(req.params.id);
    PeliculaModel.deletePelicula(id);
    res.status(204).send();
};
