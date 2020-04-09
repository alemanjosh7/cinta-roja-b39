const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    existencias: {
        type: Number, 
        required: true,
    },
});

const Articles = mongoose.model('Articles', articleSchema);

module.exports = Articles;