// Arrays In Javascript Part 2

const marvelHeros = ["Thor","Iron Man","Caption America","Hulk","Vision","SpiderMan","Vanda","Bucky","black widow","clint"]

const dcHeros = ["Superman","flashman","BatMan"];

// push the array into another array
// marvelHeros.push(dcHeros);  

// output - ["Thor","Iron Man","Caption America","Hulk","Vision","SpiderMan","Vanda","Bucky","black widow","clint",["Superman","flashman","BatMan"]]

// console.log(marvelHeros);
// console.log(marvelHeros[10][0]);

// combines 2 or more array and return a new array without modifying the existing array
// const newHeros = marvelHeros.concat(dcHeros);

// console.log(newHeros);

// Spread operation 

const newHeros = [...marvelHeros,...dcHeros];

console.log("Spread Operation Output -",newHeros);

const another_array = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13,15,16],17,18,19],20]

let real_array = another_array.flat(Infinity);
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. You Can also define the depth recursively and if depth is unknow due to some reason you can pass parameter as infinity to handel itself.
console.log(real_array);

console.log(Array.isArray("Ritin Tiwari")); // return true or false weather it is an array or not
console.log(Array.from("Ritin Tiwari"));

// this return an empty array because it is unable to convert the inner object into array
console.log(Array.from({name: "ritin tiwari"})) 

// The below method converts the variable into an array
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));
