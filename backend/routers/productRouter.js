import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Producto from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req,res) => {
        const productos = await Producto.find({});
        res.send(productos);
}));

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    await Producto.remove({});
    const createdProducts = await Producto.insertMany(data.productos);
    res.send({ createdProducts });
})
);



productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
        res.send(producto);
    }else{
        res.status(404).send({message: 'producto no pudo encontrarse'});
    }
}));

export default productRouter;