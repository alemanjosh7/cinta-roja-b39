var dimensiones = {
    altura: 34,
    anchura: 455
};
//console.log(dimensiones.altura);

const objetoLiterao = {
    nombre: "Josue",
    apellido: "Aleman"
};

const json = {
    "nombre": "Josue",
    "apellido": "Aleman"
};
/*
    Programacion Orientada a Objetos:
    Clases
*/
//
// Molde de objetos
class Mascota {
    //Constructor - Es quien recibe y asigna atributos
    constructor(nombre, tipo, raza, edad){
        //para asignarle algo a los atributos tenemos que usar la palabra reservada this
        this.name = nombre;
        this.type = tipo;
        this.breed = raza;
        this.age = edad;
    }
    comer(comida){
        return `${this.name} esta comiendo ${comida}`;
    }
    //Ejemplo de "indicadores de acceso"
    getName(){
        return this.name;
    }
    setName(name){
        //Null / Undefined / NaN --> Falsy
        //if(name === undefined)
        if(!name) throw new Error("Debes introducir un nombre!");
        return this.name = name;
    }
}

//const perro = new Mascota("Firulais", "Perro");

    

const perro = new Mascota(
    "Ayudante",
    "Perro",
    "Galgo",
    7,
);
const gato = new Mascota(
    "Gizmo",
    "Perro",
    "Persa",
    7,
);
/*Pilares del POO
1. Anstraccion
2. Polimorfismo
3. Encapsulamiento
4. Herencia 
*/


//Ejercicios:
class Persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.name = nombre;
        this.age = edad;
        this.sex = sexo;
        this.weight = peso;
        this.height = altura;
    }
    rfc(nombre, edad, sexo){
        return `${nombre} tiene ${edad} y su sexo es ${sexo}`
    }
    calcularIMC(peso, altura){
        return peso / altura;
    }
    esMayorDeEdad(){
        if(this.age >= 18){
            return "Eres mayor de edad";
        }      
        return "Eres menor de edad";
    }
}
const persona = new Persona("Josue", 16, "masculino", 100, 16);


class Cuenta{
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }
    getTitular(titular){
        return this.titular;
    }
    setTitular(titular){
        return this.titular = titular;
    }
    getCantidad(cantidad){
        return  this.cantidad;
    }
    setCantidad(cantidad){
        return this.cantidad = cantidad;
    }
    ingresar(dinero){
        const cantidadFinal = this.cantidad + dinero;
        if(cantidadFinal > 900) throw new Error("No puedes tener mas de $900 en la cuenta");
        else return this.cantidad = cantidadFinal;
    }
    retirar(dinero){
        const cantidadFinal = this.cantidad - dinero;
        if(cantidadFinal < 10) throw new Error("No puedes tener menos de $10");
        else return `Su cuenta ahora tiene: ${this.cantidad = cantidadFinal}`
    }
}
const cuenta = new Cuenta(
    "Josue",
    0
);
//2