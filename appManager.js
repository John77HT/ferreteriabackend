// Dependencias

const generoModel = require('../models/genero.model');
const clienteModel = require('../models/client.model');
const generosController = require('../controllers/generos.controller');
const clientesController = require('../controllers/cliente.controller');

class AppManager {
    #models;
    #controllers;

    constructor() {
        this.#models = {

            generoModel,
            clienteModel,
        };
        this.#controllers = {

            generosController,
            clientesController,
        };
        Object.preventExtensions(this); // Evita añadir nuevas propiedades
    }

    // Obtener los modelos
    getModels() {
        return this.#models;
    }

    // Obtener los controladores
    getControllers() {
        return this.#controllers;
    }
}

module.exports = AppManager;
