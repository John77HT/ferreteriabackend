// Dependencias
const peliculaModel = require('../models/pelicula.model');
const generoModel = require('../models/genero.model');
const clienteModel = require('../models/client.model');
const peliculasController = require('../controllers/peliculas.controller');
const generosController = require('../controllers/generos.controller');
const clientesController = require('../controllers/cliente.controller'); 

class AppManager {
    #models;
    #controllers;

    constructor() {
        this.#models = {
            peliculaModel,
            generoModel,
            clienteModel,
        };
        this.#controllers = {
            peliculasController,
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
