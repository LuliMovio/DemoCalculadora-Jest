const Carrito = require('../src/carrito');

describe('Pruebas unitarias para Carrito de Compras', () => {
    let carrito;

    beforeEach(() => {
        carrito = new Carrito();
    });

    test('Debe agregar un producto correctamente y calcular el total (Unitaria + Assertions)', () => {
        carrito.agregarProducto({ nombre: 'Remera', precio: 1000, cantidad: 2 });
        
        expect(carrito.productos).toHaveLength(1);
        expect(carrito.calcularTotal()).toBe(2000);
    });

    test('Debe calcular el total con múltiples productos', () => {
        carrito.agregarProducto({ nombre: 'Remera', precio: 1000, cantidad: 1 });
        carrito.agregarProducto({ nombre: 'Pantalón', precio: 3000, cantidad: 2 });

        expect(carrito.calcularTotal()).toBe(7000);
    });
});
