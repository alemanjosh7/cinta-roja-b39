class Animal {
    constructor(name){
        if(!name) throw new Error("Name is required");
        this.name = name;
        this.brain = true;
        this.legs = 0;
    }
    sleep(){
        return `${this.name} is sleeping... zzZ`;
    }
}
const animal_1 = new Animal("Leon");
console.log(animal_1);
//Extends sirve para heredar desd euna clase a otra clase
//hereda todos los atributos del padre, pero defines específicamente cuáles serán declarados directamente en el hijo través del super, en el caso de los métodos se heredan todos

class Human extends Animal{
    constructor(name){
        //pedir de la suparclase los atributos de la clase
        super(name);
        this.legs = 2;
    }
}
//En las clases extendidas, se debe llamar a super() antes de poder usar 'this'. El no hacerlo provocará un reference error.
//Custom Relacion Ship Manager
const human_1 = new Human("Fulanito");
console.log(human_1.sleep());

class Pet extends Animal{
    constructor(name){
        super(name);
        this.legs = 4;
        this.fleas = 0;
        //fleas -> pulgas
    }
    askForFood(){
        return `${this.name} is asking for food!`;
    }
}
const pet_1 = new Pet("Toto");
console.log(pet_1.askForFood());
console.log(pet_1.sleep());

class Dog extends Pet{
    constructor(name, breed){
        super(name);
        this.breed = breed;
        this.fleas = 0;
    }
    askForFood(){
        return `${this.name} is eating krackers`;
    }
}
class Cat extends Pet{
    constructor(name, breed){
        super(name);
        this.breed = breed;
        this.fleas = 8;
    }
    askForFood(){
        return `${this.name} is eating tuna`;
    }
}
const dog_1 = new Dog("Pipo", "Kocker");
const cat_1 = new Cat("Leopoldo", "Persium");
console.log(dog_1.breed);
console.log(dog_1.askForFood());
console.log(cat_1.breed);
console.log(cat_1.askForFood());

/* 
    Ejercicio Cinema
*/
class Largometraje{
    constructor(titulo, duracion){
        this.titulo = titulo;
        this.duracion = duracion;
    }
}
class Pelicula extends Largometraje{
    constructor(titulo, duracion){
        super(titulo, duracion);
    }
}
class Documental extends Largometraje{
    constructor(titulo, duracion){
        super(titulo, duracion);
    }
}
class Cine{
    constructor(nombre){
        this.nombre = nombre;
    }
    reproducir(largometraje){
        return `${largometraje.titulo} tiene una duracion de ${largometraje.duracion}`;
    }
}
const pelicula = new Pelicula("Titanic", 161, "James Cameron");
const documental = new Documental("Segunda Guerra Mundial", 119, "Diego Aaron");
const cine = new Cine("Cinemex")
console.log(cine.reproducir(pelicula));
console.log(cine.reproducir(documental));



