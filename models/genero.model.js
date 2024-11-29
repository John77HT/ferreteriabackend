let generos = [
    { id_genero: '1', nombre: 'Acción' },
    { id_genero: '2', nombre: 'Comedia' }
];

const generarId = () => (generos.length ? Math.max(...generos.map(g => g.id_genero)) + 1 : 1);

module.exports = {
    getGeneros: () => generos,
    addGenero: (genero) => {
        const nuevoGenero = { ...genero, id_genero: (generos.length + 1).toString() };
        generos.push(nuevoGenero);
        return nuevoGenero;
    },
    updateGenero: (id, data) => {
        const index = generos.findIndex(g => g.id_genero === id);
        if (index >= 0) {
            generos[index] = { ...generos[index], ...data };
            return generos[index];
        }
        return null;
    },
    deleteGenero: (id) => {
        generos = generos.filter(g => g.id_genero !== id);
    }
};
