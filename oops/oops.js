//Encapsulate: hiding data and behaviour
//Inheritance: inherits behaviour

//OOps is a style of writing code whre concepts of objects comes into place

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function (){
        return `${this.make} car got started in the year${this.year}`
    },
};

console.log(car.start());

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John", 20);
console.log(john.name);

function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return ` ${this.type} makes some kind of sound`;
}