import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true, default: ''},
    email: {type: String, required: true, unique: true, default: ''},
    clave: {type: String, required: true, default: ''},
},{
    timestamps: true,
});

userSchema.methods.generateHash = function(clave) {
    return bcrypt.hashSync(clave, bcrypt.genSaltSync(8), null);
  };

userSchema.methods.validPassword = function(clave) {
    return bcrypt.compareSync(clave, this.clave);
  };

const User = mongoose.model('User', userSchema);
export default User;