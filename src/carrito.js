class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;

        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });

        return total;
    }
}

module.exports = Carrito;
