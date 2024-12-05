// Scope Level and mini hoisting in javascript

function one() {
    const username = "Ritin";

    function two() {
        const website = "youtube.com";
        // console.log(username);
    }
    // console.log(website);

    two()
}

one();

if(true) {
    const username = "Ritin";
    if(username === "Ritin") {
        const website = "youtube.com";
        // console.log(`Hello ${username} you are watching ${website}`);
    }

    // console.log(website); 
}

// console.log(username);


// ++++++++++++ Interesting ++++++++++++++++++++++++++++

console.log(addone(5));
function addone(numb1) {
    return numb1 + 1;
}

console.log(addTwo(5));  // this will throw an error because you are accessing the variable befor its declaration

const addTwo = function(numb) {
    return numb + 1;
}

