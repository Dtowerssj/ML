import jwt from 'jsonwebtoken';

export const generateToken = (user) =>{
    return jwt.sign({
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
    }, 
    process.env.JWT_SECRET, 
    {
        expiresIn: '30d',
    });
}