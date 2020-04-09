const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Articles = require('./Articles');

const ticketSchema = new Schema({
    articles: [{ type: Schema.Types.ObjectId, ref: 'Articles' }],
    subtotal: {
        type: Number,
        required: true,
    },
    iva: {
        type: Number,
        required: true,
    },
    total: {
        type: Number, 
        required: true,
    },
    
});

const Tickets = mongoose.model('Tickets', ticketSchema);

Tickets.findOne({})
    .populate('articles')
    .exec((err, articles) => {
        if (err) return handleError(err);
        console.log(articles);
    });
module.exports = Tickets;