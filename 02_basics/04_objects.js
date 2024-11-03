// Object Parts 2

// const tinderUser = new Object();  // this is a single ton object

const tinderUser = {}  // this is non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Roy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "roy966@gmail.com",
    fullName: {
        firstName: "Raja Ram Mohan",
        lastName: "Roy"
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.firstName);

// Combine two objects

let obj_1 = {1: "One", 2: "Two", 3: "Three", 4: "Four"}
let obj_2 = {5: "five", 6: "Six", 7: "Seven", 8: "Eight"}

// let obj_3 = { obj_1, obj_2}  // this addition of object result in the object nesting

// let obj_3 = Object.assign({},obj_1,obj_2);
// console.log(obj_3);

// let obj_3 = {...obj_1, ...obj_2}
// console.log(obj_3);

// You will get to see the below expression when accessing the data from the database
let Users = [
    {
        name: "ritin tiwari",
        age: 24
    },
    {
        name: "ritin tiwari",
        age: 24
    },
    {
        name: "ritin tiwari",
        age: 24
    }
]

// console.log(Users[0].name);  

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));