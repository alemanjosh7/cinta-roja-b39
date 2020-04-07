const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

//Middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Endpoint a raiz 
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/prueba', (req, res) => res.status(203).send({ message: 'this is a test'}));

// Como recibimos un body?
app.get('/ejemplo', (req, res) => {
    console.log('🍔', req.query)
    return res.send('ejemplo')
})

// Endpoints
app.get('/', (req, res) => res.status(200).send('¡Bienvendio a mi servidor!'));

app.get('/autor', (req, res) => res.send({ message: 'this is a test' }));

// ¿Cómo trabajamos con querys?
app.get('/ejemplo', (req, res) => {
  console.log('✅', req.query);
  // localhost:4200/ejemplo?price=5000-12000&marca=Toshiba&fecha=2020-04-06
  return res.send(req.query);
});

// ¿Cómo trabajamos con params?
app.put('/authors/:name/:age', (req, res) => {
  console.log(req.params);
  return res.status(200).send(req.params);
});

// ¿Cómo recibimos un body?
app.post('/profile', (req, res) => {
  console.log(req.body);
  // Aquí iríamos a la base de datos para
  // intentar crear un elemento con lo que contiene req.body
  const respuesta = { id: 57, ...req.body };
  res.status(201).json(respuesta);
});


// Ejercicio 1
app.get('/api', (req, res) => {
    console.log(req.body);
    const respuesta = { mensaje: 'hola mundo' }
    return res.status(200).json(respuesta);
})

//Ejercicio 2
app.get('/api/suma', (req, res) => {
    // const num1 = parseInt(req.query.num1);
    // const num2 = parseInt(req.query.num2);
    //Destructuracion (Desestructuring ES6)
    const {num1, num2 } = req.query;
    const resultado = parseInt(num1) + parseInt(num2);
    return res.status(200).json({resultado});
})

//Ejercicio 3
app.get('api/usuario/:nombre', (req, res) => {
    return res.status(200).json({usuario: req.params.nombre})
})

//Ejercicio 4

app.get('/api/swapi/:id', (req, ans) => {
    const { id } = req.params;
    const URL_GET = `https://swapi.co/api/people/${id}`;
    request.get(URL_GET, (err, res, body) => {
        const json = JSON.parse(body);
        if(res.statusCode === 200){
            const json = JSON.parse(body);
            ans.json({nombre: JSON.parse(body).name});
        }
        else{
            ans.json({ message: 'Character not found...' });
        }
    });
});





app.listen(port, () => console.log(`Servidor escuchando en ${port}`));