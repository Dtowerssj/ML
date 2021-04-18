import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
        nombre: 'Diego',
        email: 'diego@gmail.com',
        clave: bcrypt.hashSync('1234', 8)
        }
    ],  

    productos: [
        {
        nombre: 'Carrito de supermercado',
        imagen: 'imagenes/producto-1.jpg',
        precio: 45,
        descripcion: 'Carrito de supermercado azul'
        },
        {
        nombre: 'Se vende perro',
        imagen: 'imagenes/producto-2.jpg',
        precio: 5,
        descripcion: 'Perro golden retriever'
        },
        {
        nombre: 'Excavadora nueva',
        imagen: 'imagenes/producto-3.jpg',
        precio: 25000,
        descripcion: 'Excavadora nueva sin uso'
        },
        {
        nombre: 'Helados',
        imagen: 'imagenes/producto-4.jpg',
        precio: 1,
        descripcion: 'Deliciosos helados'
        },
        {
        nombre: 'Libro para dietas',
        imagen: 'imagenes/producto-5.jpg',
        precio: 15,
        descripcion: 'Libro de 12 errores al hacer dieta'
        },
        {
        nombre: 'Coche para gemelos nuevo',
        imagen: 'imagenes/producto-6.jpg',
        precio: 150,
        descripcion: 'Coche doble para bebés gemelos'
        },
        {
        nombre: 'Batimovil a control remoto',
        imagen: 'imagenes/producto-7.jpg',
        precio: 50,
        descripcion: 'Carrito de juguete, batimovil RC, nuevo'
        },
        {
        nombre: 'Adorno de Creeper',
        imagen: 'imagenes/producto-8.jpg',
        precio: 30,
        descripcion: 'Adorno de creeper de minecraft para jardin'
        },
        {
        nombre: 'Juguete',
        imagen: 'imagenes/producto-9.jpg',
        precio: 15,
        descripcion: 'Juguete de transformers'
        },
        {
        nombre: 'Lego de Batman princesa',
        imagen: 'imagenes/producto-10.jpg',
        precio: 10,
        descripcion: 'muñeco lego de batman princesa'
        },
        {
        nombre: 'RX 5700XT',
        imagen: 'imagenes/producto-11.jpg',
        precio: 1000,
        descripcion: 'GPU usada para minar'
        },
        {
        nombre: 'Se vende arte digital',
        imagen: 'imagenes/producto-12.jpg',
        precio: 5,
        descripcion: 'Dibujos personalizados'
        },
        {
        nombre: 'Cómic Batman Damned',
        imagen: 'imagenes/producto-13.jpg',
        precio: 10,
        descripcion: 'Comic usado'
        },
        {
        nombre: 'Cuadro del Golden Gate',
        imagen: 'imagenes/producto-14.jpg',
        precio: 35,
        descripcion: 'Pintura del puente golden gate'
        },
        {
        nombre: 'Minecraft Story Mode PC',
        imagen: 'imagenes/producto-15.jpg',
        precio: 20,
        descripcion: 'Videojuego de minecraft story mode para pc'
        },
        {
        nombre: 'Tacones para dama',
        imagen: 'imagenes/producto-16.jpg',
        precio: 16,
        descripcion: 'tacones para dama'
        }

    ]
}

export default data;