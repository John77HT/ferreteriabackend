let clientes = [
    { id_cliente: 1, nombre: 'Juan', apellido: 'Pérez', edad: 28, estado: 'Activo' },
    { id_cliente: 2, nombre: 'Ana', apellido: 'Gómez', edad: 34, estado: 'Inactivo' }
];

const generarId = () => (clientes.length ? Math.max(...clientes.map(c => c.id_cliente)) + 1 : 1);

module.exports = {
    getClientes: () => clientes,
    addCliente: (cliente) => {
        const nuevoCliente = { ...cliente, id_cliente: generarId() };
        clientes.push(nuevoCliente);
        return nuevoCliente;
    },
    updateCliente: (id, data) => {
        const index = clientes.findIndex(c => c.id_cliente === id);
        if (index >= 0) {
            clientes[index] = { ...clientes[index], ...data };
            return clientes[index];
        }
        return null;
    },
    deleteCliente: (id) => {
        clientes = clientes.filter(c => c.id_cliente !== id);
    }
};
