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
