// 1) Variable
//Vanilla JS
var numero = 10;
//test1
//Tipos de datos
const string = "Este es un texto";
const boolean = true;
const number = 10;
const array = [1,2,3];
const object = {};
//Falsy
const indefinido = undefined;
const nulo = null;
const noEsUnNumero = NaN;
//Estructura de control
let res = "";
for(let i = 0; i < array.length; i++){
    res = res + " " + array[i];
}
console.log(res);
function name(params){
    let myVariable // CamelCase
}
const objeto = {
    uno: 1,
    dos: 2,
    tres: 3,
};
function sumar(num1, num2){
    return num1 + num2;
}
const restar = (num1, num2) => {
    return num1 - num2
};
//Entrada
//Salida
//Entrada
function esMayorDeEdad(persona){
    const nombre = persona.nombre;
    const edad = persona.edad;
    if(typeof edad !== 'number'){
        return "Debes introducir un numero en la edad";
    }
    if(edad >= 18){
        return (nombre + " Eres mayor de edad");
    }
    else if(edad <= 18){
        return (nombre + " No eres mayor de edad");
    }
}
