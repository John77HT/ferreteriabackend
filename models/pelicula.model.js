let peliculas = [
    { id_pelicula: 1, genero: 'Acción', titulo: 'Mad Max', duracion: '120 min', clasificacion: 'R', estreno: 2015, sinopsis: 'Un guerrero en el desierto lucha por la libertad.' },
    { id_pelicula: 2, genero: 'Comedia', titulo: 'Superbad', duracion: '113 min', clasificacion: 'PG-13', estreno: 2007, sinopsis: 'Dos adolescentes intentan conseguir alcohol para una fiesta.' }
];

const generarId = () => (peliculas.length ? Math.max(...peliculas.map(p => p.id_pelicula)) + 1 : 1);

module.exports = {
    getPeliculas: () => peliculas,
    addPelicula: (pelicula) => {
        const nuevaPelicula = { ...pelicula, id_pelicula: generarId() };
        peliculas.push(nuevaPelicula);
        return nuevaPelicula;
    },
    updatePelicula: (id, data) => {
        const index = peliculas.findIndex(p => p.id_pelicula === id);
        if (index >= 0) {
            peliculas[index] = { ...peliculas[index], ...data };
            return peliculas[index];
        }
        return null;
    },
    deletePelicula: (id) => {
        peliculas = peliculas.filter(p => p.id_pelicula !== id);
    }
};
