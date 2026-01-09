//making blueprint
function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

//creating object
//when creatin object you have to have a new keyword
let myCar = new Car("Toyota", "Camry");
console.log(myCar);