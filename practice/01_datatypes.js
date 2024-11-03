// Javascript consist of 8 Datatypes
// 1. string
// 2. boolean
// 3. Number
// 4. BigInt
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. object

// Numbers In javascript
let length = 16;
let weight = 7.5;

console.log(length,typeof(length));
console.log(weight,typeof(weight));

// string in javascript

let color = 'black';
let lastName = 'Ritin Tiwari';

console.log(color,typeof(color));
console.log(lastName,typeof(lastName));

// boolean datatype in javascript
let x = true;
let y = false;

console.log(x,typeof(x));
console.log(y,typeof(y));

// objects in javascript
const person = {name: "Ritin Tiwari",profile: 'web developer',companyName: "codeholic IT Services Pvt lt" ,salary: "8000"}
console.log(person,typeof(person));

// Array Object In Javascript
const cars = ['bmw','nissan','tata','mahindra'];
console.log(cars,typeof(cars));

// Date object In Javascript
const date = new Date('2000-08-30');
console.log(date,typeof(date));

// Concept of Datatypes
let string1 = 30 + 'Volvo';
console.log(string1,typeof(string1));

let x1 = 16 + 4 + "Javascript";
console.log(x1);

let x2 = "Volvo" + 16;
console.log(x2);

let x3;
x = 5;
x = "John";

let CarName1 = "Tata Safari";
let CarName2 = 'Tata Altroz';
console.log(CarName1,typeof(CarName1));
console.log(CarName2,typeof(CarName2));

let a1 = 34.00;
let a2 = 34;
console.log(a1,typeof(a1));
console.log(a2,typeof(a2));

let x5 = BigInt(123457890123374576);
console.log(x5);

let x7 = 5;
let y7 = 5;
let z7 = 6;

console.log(x7==y7);
console.log(x7==z7);