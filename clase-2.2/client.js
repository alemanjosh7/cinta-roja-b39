/*
    CRUD OPERATIONS
*/

/*
    CREATE
    READ
    UPDATE
    DELETE
*/

// Modulo empleado para hacer las peticiones http
const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';



const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
    const URL_AUTHORS = `${URL_BASE}/api/v1/authors/`;
    const jsonSend = {
          "name": name,
          "last_name": last_name,
          "nacionalidad": nacionalidad,
          "biography": biography,
          "gender": gender,
          "age": age
    }
    request.post(URL_AUTHORS, { form: jsonSend} ,(err, res, body) => {
        console.log(res.statusCode);
        console.log(JSON.parse(body));
    })
}
// createAuthor("Gabriel", "Garcia", "MX", "Escritor de realismo magico", "M", 90);

//Ejercicio 1
// const URL_GET_AUTHORS = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
//     request.get(URL_GET_AUTHORS, (err, res, body) => {
//         if(res.statusCode === 200){
//             const json = JSON.parse(body);
//             json.forEach((info) => {
//                 console.log(info);
//             })
//         } else{
//             console.log(res.statusCode);
//         }
//     });

const getAuthors = (id) => {
    const URL_GET = `${URL_BASE}/api/v1/authors/${id}/`;
    request.get(URL_GET, (err, res, body) => {
        if(res.statusCode === 200){
            const json = JSON.parse(body);
            console.log(json);
        } else{
            console.log(res.statusCode);
        }
    });
}
// getAuthors(3987);

const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
    const URL_GET = `${URL_BASE}/api/v1/authors/${id}/`
    const jsonSend = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
  }
    request.put(URL_GET, {form: jsonSend}, (err, res, body) => {
        if(res.statusCode === 200){
            const json = JSON.parse(body);
            console.log(json);
        } else{
            console.log(res.statusCode);
        }
    })
}
// updateAuthor(3987,"Gabriel", "Garcia", "MX", "Escritor de realismo magico", "M", 90);

const deleteAuthor = (id) => {
    const URL_GET = `${URL_BASE}/api/v1/authors/${id}/`
    request.delete(URL_GET, (err, res, body) => {
        if(res.statusCode === 200){
            const json = JSON.parse(body);
            console.log(json);
        } else{
            console.log(res.statusCode);
        }
    })
}
// deleteAuthor(3987);

// createAuthor("Gabriel", "Garcia", "MX", "Escritor de realismo magico", "M", 90);
// updateAuthor(4215,"Josue", "Aleman", "MX", "Me gusta programar y ver series de netflix", "M", 16);
// getAuthors(4215);
// deleteAuthor(4215);

