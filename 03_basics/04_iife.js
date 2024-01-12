// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);

// }

// chai() //normal way
//named iife hai yeh
(function chai() {
    console.log(`DB CONNECTED`);
})(); //iife

//global scope ke pollution se problem hoti hai bhot baar toh usse bachne ke liye ya pollution hatane ke liye we use IIFE 
//unnamed iife hai ye
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Siddharth'); //hum isme arguments bhi de sakte hai

(function coffee(){
    console.log(`Give Coffee`);
})();

(() => {
    console.log(`Coffee nahi Chai do`);
})()

//whenever we use more than 1 iife make sure to use semicolon (;) in the end of previous iife (();)which bascially means that we are ending the previous iife, if not it will throw error