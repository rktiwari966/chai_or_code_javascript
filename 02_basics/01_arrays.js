// Arrays In Javascipt

// const myArray = [0,1,2,3,4,5,true,"Hitesh"];
// console.log(typeof(myArray))

// const myHeros = ["Shaktiman","naagraj"]
// console.log(myHeros[1]);

// const myArray2 = new Array(1,2,3,4);
// console.log(myArray2[2]);

// const myArray = new Array(19,15,11,9,10,18,14);

// Methods in Javascript

// myArray.push(70);   // push the value at the last index
// myArray.push(7);
// myArray.pop();    // pop the value from the last index
// console.log(myArray);
// myArray.unshift(9); // Adds 9 in the starting of the array
// console.log(myArray);
// myArray.shift(); // Removes the value from the zero index
// console.log(myArray);

// console.log(myArray2.includes(9));
// console.log(myArray2.indexOf(9))  // Returns -1 if the value is not in the array
// console.log(myArray2.indexOf(3)); // Returns the index position of the value

// const newArray = myArray.join();
// console.log(newArray);
// console.log(typeof(myArray));

// slice and splice

const myArray3 = [10,50,90,70,80,60,40,30,100,20]
console.log("A",myArray3);

const myn1 = myArray3.slice(1,3);
console.log(myn1);
console.log("B",myArray3);

const myn2 = myArray3.splice(1,3);
console.log(myn2);
console.log("C",myArray3);