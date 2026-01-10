function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello, name is ${this.name}`);
}

let sp = new Person("sans");
sp.greet();
