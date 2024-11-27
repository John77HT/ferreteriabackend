const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Datos simulados para las películas
let peliculas = [
    { id_pelicula: 1, genero: 'Acción', titulo: 'Mad Max', duracion: '120 min', clasificacion: 'R', estreno: 2015, sinopsis: 'Un guerrero en el desierto lucha por la libertad.' },
    { id_pelicula: 2, genero: 'Comedia', titulo: 'Superbad', duracion: '113 min', clasificacion: 'PG-13', estreno: 2007, sinopsis: 'Dos adolescentes intentan conseguir alcohol para una fiesta.' }
];

// Rutas para obtener todas las películas
app.get('/api/peliculas', (req, res) => {
    res.json(peliculas);
});

// Ruta para obtener una película por ID
app.get('/api/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pelicula = peliculas.find(p => p.id_pelicula === id);
    if (!pelicula) {
        return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.json(pelicula);
});

// Ruta para agregar una nueva película
app.post('/api/peliculas', (req, res) => {
    const nuevaPelicula = req.body;
    nuevaPelicula.id_pelicula = peliculas.length + 1;
    peliculas.push(nuevaPelicula);
    res.status(201).json(nuevaPelicula);
});

// Ruta para actualizar una película
app.put('/api/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = peliculas.findIndex(p => p.id_pelicula === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Película no encontrada' });
    }
    peliculas[index] = { ...peliculas[index], ...req.body };
    res.json(peliculas[index]);
});

// Ruta para eliminar una película
app.delete('/api/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = peliculas.findIndex(p => p.id_pelicula === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Película no encontrada' });
    }
    const eliminada = peliculas.splice(index, 1);
    res.json(eliminada);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
