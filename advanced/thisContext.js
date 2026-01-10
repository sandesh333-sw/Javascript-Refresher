const person = {
    name: "Sandesh",
    greet(){
        console.log(`Hi i am ${
            this.name
        }`);
    }
}

person.greet();

//bind,call and apply