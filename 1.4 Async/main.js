//const mostrarMensaje = () => console.log("Paso un segundo!");
//console.log("Funciona");
//Funcion de orden superior
/*setTimeout(
    mostrarMensaje, // Callback
    50000
);
*/
//setTimeout es un proceso asincrono
//ES6
function sumarVanilla(a, b){
    console.log("Vamos a sumar dos numeros!");
    return a + b;
}

const sumarArrow = (a, b) => {
    console.log("Vamos a sumar dos numeros!");
    return a + b;
} 
// JS Vanilla

const esPar = (numero) => {
    if(numero % 2 === 0) return true;
    else return false;
}

const esParLaSumaDeDosNumeros = (numero1, numero2) => {
    const res = sumarArrow(numero1, numero2);
    const otroRes = esPar(res);
    return otroRes;
}

// const esPar2 = esPar(1);
// const esPar3 = esPar(3);
// if(esPar2 == esPar3) console.log("Los dos numeros son pares");
// codigo sincrono 
// codigo asincrono es cuando js deteca que cuando es un codigo asincrono lo manda a otra seccion a ejecutarse

// console.log(esParLaSumaDeDosNumeros(5, 7));
//Element.addEventLister("click", callback);

// const mensajeEnConsola = (callback, mensaje) => {
//     for(let i = 0; i < 5; i++){
//         callback(mensaje);
//     }
// }
//mensajeEnConsola(() => {console.log("Hola")});
// mensajeEnConsola(console.log, "Hola");
// const highOrder = (variable, callback) => {
//     callback(variable);
// }
// const getDatatype = (variable) => typeof(variable);

// const contentCallBack = (variable) => {
//     console.log(getDatatype(variable));
//     console.log(variable);
// }
// const miVar = {nombre: "Josue"};
// highOrder(num, contentCallBack);

//1
const sumaDeDosNumeros = (num1, num2, operacion) => {
    return operacion(num1, num2);
}
const resta = (num1, num2) => num1 - num2;
const suma = (num1, num2) => num1 + num2;
const multi = (num1, num2) => num1 * num2;

const contentCallBack = (num1, num2) => {
    console.log(resta(num1, num2));
    console.log(suma(num1, num2));
    console.log(multi(num1, num2));
}

const res1 = sumaDeDosNumeros(2,2, resta);
const res2 = sumaDeDosNumeros(2,2, suma);
const res3 = sumaDeDosNumeros(2,2, multi);
console.log(res1);
console.log(res2);
console.log(res3);

//2
const convertidorPalabras = (palabra, convertidor) => {
    convertidor(palabra);
}

const minus = (palabra) => palabra.toLowerCase();
const upper = (palabra) => palabra.toUpperCase();

const convertidor = (palabra) => {
    console.log(minus(palabra));
    console.log(upper(palabra));
}

convertidorPalabras("Hola", convertidor);
//3

const mayorADosHoras = (horas, callback) => {
    callback(horas);
}
const res = (horas) => {
    for(let i = 0; i < 4; i++){
        horas[i] /= 60;
        if(horas[i] > 2){
            console.log("Es mayor que dos horas");
        }
    }
}

mayorADosHoras([150, 130, 10, 10], res);




