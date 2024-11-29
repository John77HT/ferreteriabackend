const ClienteModel = require('../models/client.model');

exports.getClientes = (req, res) => {
    res.json(ClienteModel.getClientes());
};

exports.addCliente = (req, res) => {
    const nuevoCliente = ClienteModel.addCliente(req.body);
    res.status(201).json(nuevoCliente);
};

exports.updateCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCliente = ClienteModel.updateCliente(id, req.body);
    if (updatedCliente) {
        res.json(updatedCliente);
    } else {
        res.status(404).json({ error: "Cliente no encontrada" });
    }
};

exports.deleteCliente = (req, res) => {
    const id = parseInt(req.params.id);
    PeliculaModel.deleteCliente(id);
    res.status(204).send();
};
