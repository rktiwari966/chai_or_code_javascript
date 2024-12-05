// Arrow Function in Javascript
class ArithmeticOperation {
    constructor(operand1,operand2,operator) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = operator;
    }

    performOperation = () => {
        let that = this;
        if(that.operator === "+") {
            return that.operand1 + that.operand2
        }
        else if(that.operator === "-") {
            return that.operand1 - that.operand2
        }
        else if(that.operator === "*") {
            return that.operand1 * that.operand2
        }
        else if(that.operator === "/") {
            return that.operand1 / that.operand2
        }
        else if(that.operator === "%") {
            return that.operand1 % that.operand2
        }
        else {
            return "Invalid Operator"
        }
    }
}

let operand1 = 20;
let operand2 = 47;
let operator = "+";

const calculation = new ArithmeticOperation(operand1,operand2,operator)
// console.log(calculation.performOperation());


// Arrow functions in javascript and this keyword
const user = {
    username: "tiwariritin",
    instructor: "hitesh chaudhary",
    courseName: "chai or code javascript",
    price: 999,
    welcomeMessage: function () {
        let that = this;
        console.log(`Hello ${that.username} your payment of ${that.price} is successfully , Welcome this amazing course ${that.courseName} by one of our most experienced faculty ${that.instructor}`);
    }
}

// user.welcomeMessage();

console.log(this);


function chai_or_code() {
    let username = "ritin_tiwari_offical";
    console.log(this.username)
}

chai_or_code();

// declaring a arrow function in javascript
const createUsername = (firstName,lastName,dateOfBirth,luckyDay) => {
    console.log(`The username is _${lastName}_${firstName}_${luckyDay}_${dateOfBirth}`);
}

createUsername("ritin","tiwari","30082000","01");


// Basics of arrow function

// Syntax 1 - arrow function using curly braces
// const addTwoNumbers = (numb1,numb2) => {
//     return numb1 + numb2;
// }

// Syntax 2 - arrow function implicite return in single line

// const addTwoNumbers = (numb1,numb2) => numb1 + numb2;

// syntax 3 - arrow function without return statement

// const addTwoNumbers = (numb1,numb2) => numb1 + numb2;

// syntax 4 - arrow function without return statement inside round braces

// const addTwoNumbers = (numb1,numb2) => (numb1 + numb2);

// returning object inside arrow function
const addTwoNumbers = (numb1,numb2) => ({"username": "Ritin Tiwari"});

console.log(addTwoNumbers(23,42));
