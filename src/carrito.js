const productos = require('./productos');

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    agregarProductoPorId(id, cantidad) {
        const producto = productos.obtenerProductoPorId(id);

        if (producto) {
            this.agregarProducto({
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: cantidad
            });
        }
    }

    calcularTotal() {
        let total = 0;

        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });

        return total;
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter(
            producto => producto.nombre !== nombre
            );  
    }

    vaciarCarrito() {
        this.productos = [];
    }

}
module.exports = Carrito;
