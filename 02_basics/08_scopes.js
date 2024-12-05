// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


// Basic example of scope
// var c = 330;

// if(true) {
    // let a = 10;
    // const b = 20;
    // var c = 30; // the problem with var is it has a global scope and can be access outside the scope in this case (outside the if statement) the problem lies if other developer initialize this value at the start it will be overided by the inside scope means if statement and the developer have to debug the code which is a pain for the developer when multiple developer are working on the same project and code base is too large that why most of the developer don't recommend to use (var) because of the absence of scope in it.
// }

// console.log(a);  // result - a is not defined
// console.log(b);     // result - b is not defined
// console.log(c);     // result - 30 


// correct way to initialize local and global scope variable

let c = 300;

if(true) {
    let a = 10;
    let b = 20;
    let c = 30;

    console.log(`Value of c inside the scope is ${c}`);
}

console.log(`Value of c outside the scope is ${c}`);