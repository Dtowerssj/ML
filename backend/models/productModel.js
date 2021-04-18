import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    nombre: {type: String, required: true, unique: true},
    imagen: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
},
    {
    timestamps: true,
    }
);

const Producto = mongoose.model('Producto', productSchema);

export default Producto;