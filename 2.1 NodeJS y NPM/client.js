
const request = require('request');

// console.log("Vamos a hacer una peticion!");
// request.get('http://www.google.com', (error, response, body) => {
//   // console.error('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   console.log('🚀 Cuerpo de la respuesta', body);
//   console.log('🚀 Código de estado', response.statusCode);
// });
// console.log("Ha terminado la peticion...");

const SWAPI_URL = "https://pokeapi.co/api/v2/pokemon/1"; //endpoint
// request.get(SWAPI_URL, (err, res, body) => {
//     console.log(res.statusCode);
//     const json = JSON.parse(body);
//     console.log(json);
// })
//const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/1";
const OPENLIBRARY_URL = "http://openlibrary.org/search.json?q=i+robot";
const AUTHOR_URL = "http://openlibrary.org/search.json?author=asimov";

//1

// request.get(POKEAPI_URL, (err, res, body) => {
//     if(res.statusCode === 200){
//         const json = JSON.parse(body);
//         console.log(`${json.name} has the next types:`)
//         json.types.forEach(type => {
//             console.log(type.type.name);
//         });
//     } else{
//         console.log(res.statusCode);
//     }
// });

    //2
// request.get(OPENLIBRARY_URL, (err, res, body) => {
//     if(res.statusCode === 200){
//         const json = JSON.parse(body);
//         const doc = json.docs[0];
//             console.log(`${doc.title_suggest} is the name of the book`);
//             if(doc.author_name){
//                 console.log(`${doc.author_name[0]} is the author`);
//             }
//     } else{
//         console.log(res.statusCode);
//     }
// });

    //3

// request.get(AUTHOR_URL, (err, res, body) => {
//     if(res.statusCode === 200){
//         const json = JSON.parse(body);
//         const doc = json.docs[0];
//         if(doc.author_name[0]){
//             console.log(`The author is ${doc.author_name[0]}`);
//         }
//         json.docs.forEach(doc => {
//             if(doc.author_name[0] == doc.author_name){
//                 console.log(doc.title_suggest);
//             }
//         });
//     } else{
//         console.log(res.statusCode);
//     }
// });

    // 4

// const AUDIO_URL = " http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse";
// request.get(AUDIO_URL, (err, res, body) => {
//     if(res.statusCode === 200){
//         const json = JSON.parse(body);
//         const band = json.artists;
//             console.log(`${band[0].strArtist} is the name of the band`);
//             if(band[0].strStyle){
//                 console.log(`${band[0].strGenre} is the genre`);
//             }
//     } else{
//         console.log(res.statusCode);
//     }
// });

    //5

const NAME_URL = "https://swapi.co/api/people/13/"
//         json.docs.forEach(doc => {
//             if(doc.author_name[0] == doc.author_name){
//                 console.log(doc.title_suggest);
//             }
//         });
// request.get(NAME_URL, (err, res, body) => {
//     if(res.statusCode === 200){
//         const json = JSON.parse(body);
//             console.log(`The author is ${json.name}`);
//             json.films.forEach((film) =>{
//                 request.get(film, (err, res, body) => {
//                     const jsonFilmes = JSON.parse(body);
//                     console.log(jsonFilmes.title);
//                 })
//             })
//     } else{
//         console.log(res.statusCode);
//     }
// });
//https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=tPwgiDUJ0CbmxQraXVvuMjrgZN3WFRw1x3CJZhAr
    //6
const START_DATE = '2020-03-31';
const END_DATE = '2020-03-24';
const API_KEY = 'tPwgiDUJ0CbmxQraXVvuMjrgZN3WFRw1x3CJZhAr'
const NASA_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=tPwgiDUJ0CbmxQraXVvuMjrgZN3WFRw1x3CJZhAr`;
request.get(NASA_URL, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      // console.log(json.near_earth_objects.2020-03-029);
      const dates = (Object.values(json.near_earth_objects));
      dates.forEach((date) => {
          const meteorite = Object.values(date);
          meteorite.forEach((name) => {
              if(name.is_potentially_hazardous_asteroid == true){
                console.log(name.name);
              }
          })
      })
    } 
  });

  const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

   request.get(POKEAPI_URL, (err, res, body) => {
      const respuesta = JSON.parse(body).results;
      // Prueba el código con i<=2 
      for(let i=0; i<=30; i++){
          request.get(respuesta[i].url, (err, res, body) => {
              
              const respuesta = JSON.parse(body);
              
              let pokemon = {
                  nombre: respuesta.name,
                  movimientos: respuesta.moves,
                  tipos: respuesta.types,
                  altura: respuesta.height,
                  peso: respuesta.weight
              }
              console.log(pokemon);
          });
      }
  }); 




