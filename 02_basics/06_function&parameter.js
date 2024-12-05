// functions in Javascript

// function defination
function PrintMyName() {
  console.log("R");
  console.log("I");
  console.log("T");
  console.log("I");
  console.log("N");
}

PrintMyName(); // function call

function AddTwoNumber(n1, n2) {
  return n1 + n2;
}

const result = AddTwoNumber(17, 19);
console.log(result);

// function logInUserMessage(username) {
//     console.log(`Welcome ${username} To Javascript Language`);
// }

// logInUserMessage("Ritika");

// function logInUserMessage(username) {
//   if (username === undefined) {
//     console.log("Please Provide a valid username");
//   } else {
//     console.log(`Welcome ${username} To Javascript Language`);
//   }
// }

// logInUserMessage("Ritin Tiwari");
// logInUserMessage();


// function logInUserMessage(username) {
//     if (username === undefined) {
//       console.log("Please Provide a valid username");
//       return;
//     }
//     console.log(`Welcome ${username} To Javascript Language`);
//   }
  
//   logInUserMessage();


function logInUserMessage(username="Ritika Sharma") {
    if (username === undefined) {
      console.log("Please Provide a valid username");
      return;
    }
    console.log(`Welcome ${username} To Javascript Language`);
  }
  
  logInUserMessage();

// function calculateCartPrice(...numb1) {
//   return numb1;
// }
// console.log(calculateCartPrice(200,400,500))

function calculateCartPrice(val1,val2,...val3) {
  return val3;
}

console.log(calculateCartPrice(200,300,400,500,600,700));

let testUserName = {
  name: "Ritin Tiwari",
  username: "tiwariritin469",
  designation: "web developer",
  age: 25,
  address : {
    houseNo: "P-71/B",
    line1: "Professor Colony Garden",
    landMark: "Karmeta",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    pincode: "482002",
    country: "India"
  },
  company: "Codeholic It Sevices pvt ltd",
}
function handleObject(anyobject) {
  console.log(`Hello ${anyobject.name} your age is ${anyobject.age} and your username is ${anyobject.username} and your designation is ${anyobject.designation} at ${anyobject.company} your full address ${anyobject.address.houseNo} ${anyobject.address.line1} ${anyobject.address.landMark} ${anyobject.address.city} ${anyobject.address.state} ${anyobject.address.pincode} ${anyobject.address.country}`);
}

// handleObject(testUserName);
// You Can Also Pass the object directly
handleObject({
  name: "Ritin Tiwari",
  username: "tiwariritin469",
  designation: "web developer",
  age: 25,
  address : {
    houseNo: "P-71/B",
    line1: "Professor Colony Garden",
    landMark: "Karmeta",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    pincode: "482002",
    country: "India"
  },
  company: "Codeholic It Sevices pvt ltd",
});

const myArray = ["100","200","300","400","500"]

function handleArray(getArray) {
  return getArray[2];
}

// console.log(handleArray(myArray));
// console.log(handleArray(["100","200","300","400","500"]));