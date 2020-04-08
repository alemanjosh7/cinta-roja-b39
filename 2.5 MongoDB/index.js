const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //VARIABLES DE ENTORNO

// Middlewares: Funciones que se ejecutan previo a que se haga una conexion con un endpoint
app.use(express.json()); // Habilita el req.body
app.use(express.urlencoded({extended: true}));

// Endpoint
app.get('/', (req, res) => res.json('Bienvenido!'));

//Encender el servidor
app.listen(PORT, () => console.log(`Servidor en el puerto: ${PORT}`))