const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: Number,
        default: -1    
    },
    timestamps: {
        type: Date, 
        default: Date.now()
    }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);