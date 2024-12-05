// Functions with object and array in javascript

// function calculateCartPrice(numb1) {
//     return numb1;
// }


// function calculateCartPrice(...numb1) {
//     return numb1;
// }


function calculateCartPrice(val1,val2,...numb1) {
    return numb1
}

// console.log(calculateCartPrice(200,400,600,2000));


const userDetails = {
    username: "Hitesh Chaudhary",
    email: "hiteshchaudhary@gmail.com",
    courseName: "ChaiorcodeJavascript",
    price: "999"
}

function handleObject(userDetails) {
   console.log(`Username is ${userDetails.username} and user email is ${userDetails.email}`);
}

// handleObject(userDetails);

// You can also directly pass the object in the function
handleObject({
    username: "ritintiwari469",
    email: "tiwariritin444@gmail.com"
})

arrayData = [20,10,30,80,50,70,60,90,40,100]
function handleArrayData(arrayData) {
    return arrayData[1];
}
// console.log(handleArrayData(arrayData));

console.log(handleArrayData([20,10,30,80,50,70,60,90,40,100]))