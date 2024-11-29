const express = require('express');
const router = express.Router();

// Controladores

const GenerosController = require('../controllers/generos.controller');
const ClientesController = require('../controllers/cliente.controller');





// Rutas para géneros
router.get('/api/genero', GenerosController.getGeneros);
router.post('/api/genero', GenerosController.addGenero);
router.put('/api/genero/:id_genero', GenerosController.updateGenero);
router.delete('/api/genero/:id_genero', GenerosController.deleteGenero);

// Rutas para clientes
router.get('/api/clientes', ClientesController.getClientes);
router.post('/api/clientes', ClientesController.addCliente);
router.put('/api/clientes/:id', ClientesController.updateCliente);
router.delete('/api/clientes/:id', ClientesController.deleteCliente);



module.exports = router;
