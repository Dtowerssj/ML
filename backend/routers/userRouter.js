import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', 
    expressAsyncHandler(async(req, res) => {
       await User.remove({});
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
}));

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if (user) {
        if (bcrypt.compareSync(req.body.clave, user.clave)) {
            res.send({
                _id: user.id,
                nombre: user.nombre,
                email: user.email,
                token: generateToken(user),
            });
            return;
        }
    } 
    res.status(401).send({ message: 'email o clave inválida'});
}));

export default userRouter;