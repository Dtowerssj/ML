import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ml', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

/*app.get('/api/productos/:id', (req, res) => {
    const producto = data.productos.find((x) => x._id === req.params.id);
    if(producto){
        res.send(producto);
    }else{
        res.status(404).send({message: 'el producto no pudo ser encontrado'});
    }
})*/

/* Para retornar data estática
app.get('/api/productos', (req, res) => {res.send(data.productos);});*/
app.use('/api/users', userRouter);
app.use('/api/productos', productRouter);
app.use('/api/productos/:id', productRouter);

app.get('/', (req, res) => {
    res.send('El server está listo');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const puerto = process.env.PORT || 5000;
app.listen(puerto, () => {
    console.log(`Serve at http://localhost:${puerto}`);
});