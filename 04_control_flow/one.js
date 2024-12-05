// if statement

const isUserLoggedIn = true;
const temperature = 51;

// if(temperature <= 50 ) {
//     console.info("Temperature is less that 50");
// }
// else {
//     console.info("Temperature is more than 50");
// }

// if(isUserLoggedIn) {
//     console.info("User is Logged In");
// }


// const gamePoint = 200;
// let power = undefined;

// if(gamePoint >=100) {
//     let power = "fly";
//     console.info(`User power: ${power}`);
// }

// console.info(`User Power: ${power}`);


const balance = 1000;

if(balance > 500) console.info(`Your balance is ${balance}`);


// Check the account balance of user 
const customerBalance = 1000;

if(customerBalance > 300) {
    console.info("user balance is grater than 300")
}
if(customerBalance > 600) {
    console.info("user balance is grater than 600");
}
if(customerBalance > 900) {
    console.info("user balance is grater than 900");
}
else {
    console.log("user balance is less than 1200");
}


const paymentStatus = "success";

if(isUserLoggedIn && paymentStatus == "success") {
    console.log("Course Successfully Purchased")
}else {
    console.error("Something went wrong , course purchase failed");
}


// Switch Case syntax is javascript

switch(expression) {
    case x: 
        // execute this code block
        break;
    case y: 
        // execute this code block
        break;
}