const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //VARIABLES DE ENTORNO
require('./database/index.js');
const mongoose = require('mongoose');
const Tickets = require('./models/Tickets');
const Articles = require('./models/Articles');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.json('Bienvenido!'));

// Puente de articulo a ticket


app.post('/api/v1/articles', (req, res) => {
      return Articles.create(body)
      .then(newArticle => res.status(201).json(newArticle))
      .catch(err => {
        console.log('🚫' ,err);
        res.status(400).json(err)
      })
  });
app.get('/api/v1/articles', (req, res) => {
    Articles.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json(err));
})
app.get('/api/v1/articles/:id', (req, res) => {
  const { id } = req.params;
  Articles.findById(id)
    .then(article => {
      if (!article) res.status(404).json('Article not found');
      res.json(article)
    })
    .catch(err => res.status(404).json(err));
});
app.patch('/api/v1/articles/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  Articles.findByIdAndUpdate(id, body, {new: true})
      .then(updatedArticle => res.json(updatedArticle))
      .catch(err => res.status(400).json(err));
})


app.delete('/api/v1/articles/:id', (req, res) => {
  const { id } = req.params;
  Articles.findByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});


// Tickets
app.post('/api/v1/tickets', (req, res) => {
  const { body } = req;
  return Tickets.create(body)
      .then(newTicket => res.status(201).json(newTicket))
      .catch(err => {
          console.log('😞', err);
          res.status(400).json(err)
      })
});

app.get('/api/v1/tickets', (req, res) => {
  Tickets.find()
      .populate('articles')
      .then(tickets => res.json(tickets))
      .catch(err => res.status(400).json(err));
})

app.get('/api/v1/tickets', (req, res) => {
  Tickets.find()
      .populate('articles')
      .then(tickets => res.json(tickets))
      .catch(err => res.status(400).json(err));
})


app.listen(PORT, () => console.log(`Servidor en el puerto: ${PORT}`))