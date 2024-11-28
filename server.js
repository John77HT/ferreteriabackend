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

// Base de datos simulada (puedes usar una base de datos real como MongoDB, MySQL, etc.)
let generos = [
    { id_genero: '1', nombre: 'Acción' },
    { id_genero: '2', nombre: 'Comedia' }
];

// Rutas para géneros
// Obtener todos los géneros
app.get('/api/genero', (req, res) => {
    res.status(200).json(generos);
});

// Crear un nuevo género
app.post('/api/genero', (req, res) => {
    const nuevoGenero = req.body;
    nuevoGenero.id_genero = (generos.length + 1).toString(); // Generar ID automáticamente
    generos.push(nuevoGenero);
    res.status(201).json(nuevoGenero);
});

// Actualizar un género existente
app.put('/api/genero/:id_genero', (req, res) => {
    const { id_genero } = req.params;
    const generoActualizado = req.body;
    const index = generos.findIndex(g => g.id_genero === id_genero);

    if (index !== -1) {
        generos[index] = { ...generos[index], ...generoActualizado };
        res.status(200).json(generos[index]);
    } else {
        res.status(404).json({ message: 'Género no encontrado' });
    }
});

// Eliminar un género
app.delete('/api/genero/:id_genero', (req, res) => {
    const { id_genero } = req.params;
    const index = generos.findIndex(g => g.id_genero === id_genero);

    if (index !== -1) {
        const generoEliminado = generos.splice(index, 1);
        res.status(200).json(generoEliminado);
    } else {
        res.status(404).json({ message: 'Género no encontrado' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
