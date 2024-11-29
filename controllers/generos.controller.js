const GeneroModel = require('../models/genero.model');

exports.getGeneros = (req, res) => {
    res.json(GeneroModel.getGeneros());
};

exports.addGenero = (req, res) => {
    const nuevoGenero = GeneroModel.addGenero(req.body);
    res.status(201).json(nuevoGenero);
};

exports.updateGenero = (req, res) => {
    const id = req.params.id_genero;
    const updatedGenero = GeneroModel.updateGenero(id, req.body);
    if (updatedGenero) {
        res.json(updatedGenero);
    } else {
        res.status(404).json({ error: "Género no encontrado" });
    }
};

exports.deleteGenero = (req, res) => {
    const id = req.params.id_genero;
    GeneroModel.deleteGenero(id);
    res.status(204).send();
};
