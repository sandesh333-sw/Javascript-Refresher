let computer = {cpu: 10};
let lenovo = {screen: "HD"};
let tommy = {};

console.log(computer.__proto__);


let car = {tyres:4};

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, car);

// console.log(`tesla`, tesla);
// console.log(car);


//good way of accessing prototype
console.log(`tesla`, Object.getPrototypeOf(tesla));