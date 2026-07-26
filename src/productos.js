const productos = [
    {
        id: 1,
        nombre: 'Remera',
        precio: 1000
    },
    {
        id: 2,
        nombre: 'Pantalón',
        precio: 3000
    }
];

function obtenerProductoPorId(id) {
    return productos.find(producto => producto.id === id);
}

function obtenerProductoPorIdAsync(id) {
    return Promise.resolve(
        productos.find(producto => producto.id === id)
    );
}

module.exports = {
    obtenerProductoPorId,
    obtenerProductoPorIdAsync
};
