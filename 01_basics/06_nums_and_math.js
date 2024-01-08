const num = 400

const bal = new Number(100)

// console.log(num);
// console.log(bal);

// console.log(bal.toString().length); //converts the number to a string and rturns the length.

const anotherNumber = 123.4456

// console.log(anotherNumber.toPrecision(4));

const currency = 1000000000
// console.log(currency.toLocaleString());//US Standards
// console.log(currency.toLocaleString('en-IN')); //Indian standards


//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

// console.log(Math); //its an object
// console.log(Math.abs(-23));//converts -ve => +ve
// console.log(Math.round(2.4));//rounds off according to the usual standards
// console.log(Math.ceil(2.4));//rounds off according to top or greater value
// console.log(Math.floor(2.4));//rounds off according to the floor or the lower value
// console.log(Math.min(2,4,56,7,0,1)); //gives the lowest valuefrom the array 
// console.log(Math.max(2,4,56,7,0,1)); //gives the highest value from the array 

console.log(Math.random()); //always gives a random value between 0 and 1

console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);//when you want random values between specific range