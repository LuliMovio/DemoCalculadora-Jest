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

    test('Debe eliminar un producto del carrito', () => {
        carrito.agregarProducto({  nombre: 'Remera',  precio: 1000, cantidad: 1 });
        carrito.eliminarProducto('Remera');

        expect(carrito.productos).toHaveLength(0);
    });
  
    test('Debe vaciar el carrito', () => {
        carrito.agregarProducto({  nombre: 'Remera', precio: 1000, cantidad: 1 });
        carrito.agregarProducto({  nombre: 'Pantalón', precio: 3000, cantidad: 1   });
        carrito.vaciarCarrito();

        expect(carrito.productos).toEqual([]);
    });

    test('El total de un carrito vacío debe ser 0', () => {
        expect(carrito.calcularTotal()).toBe(0);
    });

    test('Debe poder eliminar un producto que no existe sin generar errores', () => {
        carrito.eliminarProducto('Producto inexistente');

        expect(carrito.productos).toHaveLength(0);
    });   

    test('Debe agregar un producto buscándolo por su ID', () => {
        carrito.agregarProductoPorId(1, 2);

        expect(carrito.productos).toEqual([
            {
                nombre: 'Remera',
                precio: 1000,
                cantidad: 2
            }
        ]);
    });

    test('No debe agregar un producto si el ID no existe', () => {
        carrito.agregarProductoPorId(99, 1);

        expect(carrito.productos).toHaveLength(0);
    });

    test('Debe agregar un producto utilizando un mock', () => {
    const productos = require('../src/productos');

    jest.spyOn(productos, 'obtenerProductoPorId').mockReturnValue({
        id: 99,
        nombre: 'Producto Mock',
        precio: 5000
    });

    carrito.agregarProductoPorId(99, 2);

    expect(carrito.productos).toEqual([
        {
            nombre: 'Producto Mock',
            precio: 5000,
            cantidad: 2
        }
    ]);

    productos.obtenerProductoPorId.mockRestore();
    });

    test('Debe obtener un producto de forma asíncrona', async () => {
        const productos = require('../src/productos');

        const producto = await productos.obtenerProductoPorIdAsync(1);

        expect(producto).toEqual({
            id: 1,
            nombre: 'Remera',
            precio: 1000
        });
    });

});
