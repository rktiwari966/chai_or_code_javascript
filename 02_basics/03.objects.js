// Objects in Javascript
// Singleton
// object.create();

// object literals
const mySymbol = Symbol("Key1");
const JsUser = {
    name : "Ritin Tiwari",
    age: 24,
    "full name": "Ritin Kumar Tiwari",
    [mySymbol] : "myKey1",
    location: "Jabalpur",
    email: "ritintiwari@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
};

console.log(JsUser);
// console.log(typeof(JsUser));

// You can access the value inside an object by object_name.key
// console.log(JsUser.name); 

// You can also access the value of an object also by using the object_name["key_name"]
// console.log(JsUser["name"]);

// console.log(JsUser["full name"]);

// Access the value of mysymbol
console.log(JsUser[mySymbol]);

// Change the value of the key inside an object
JsUser.email = "ritintiwari966@gmail.com";

// console.log(JsUser);

// Object.freeze(JsUser);

// JsUser.isLoggedIn = false; // the change made may not be propogated and 

// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JsUser you are accessing greetings function");
}

// Access the key of an object inside the function declared in
JsUser.greetingsTwo = function() {
    console.log(`Hello JsUser ${this.name} you are inside the greetings function`);
}

// console.log(JsUser.greetings);
console.log(JsUser.greetings());

console.log(JsUser.greetingsTwo());