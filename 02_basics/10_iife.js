// Immediately Invoked Function Expression (IIFE)

// function declaration
function connect_db1() {
    console.log("db connected successfully");
}

connect_db1(); // function call


// Modifying the above code functionality

// syntax => ()() // first parenthesis is for function declaration and second parenthesis is for function call

// syntax - 1

(function greetings(){
    console.log(`Immediately Invoked function expression`);
})();

// syntax - 2

(function db_connect() {
    console.log(`db connected successfully`);
})();

// using arrow function for immediately invoked function
( () => {
    console.log(`db disconnected successfully`);
})();


// passing arguments in IIFE
let firstName = "Ritin";
let lastName = "Tiwari";

((firstName,lastName) => {
    console.log(`Hello Mr/Mrs ${firstName} ${lastName} Welcome to Vanilla Javascript`);
})(firstName,lastName);