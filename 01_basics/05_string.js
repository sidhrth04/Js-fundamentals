const naam = "sid"
const age = 19

// console.log(naam+age+"old"); this is the old way probably not recommended these days for string concatination

//Now a days we use backticks (` `) 

console.log(`Hello my name is ${naam} and i am ${age} `);

const gName = new String('Siddharth') //another way of declaring a string

console.log(gName.toUpperCase());
console.log(gName.toLowerCase());
console.log(gName.charAt(4));//ggives the character at the given index
console.log(gName.indexOf('d'));//gives the index of the mentioned letter


const newString = gName.substring(0,5) //in substring we cant use the negative index
const anothernewString = gName.slice(-8,5)// in slice we can use negative index

console.log(newString);
console.log(anothernewString);

const newStringOne = "    sid    "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the extra spaces from the string

const url = "http://siddharth.com/sid@@04"

console.log(url.replace('@@','-')); //to replace specific element from the string

console.log(url.includes('sid')); //checks if a particular thing is a part of string or not

console.log(url.split('/')); //splits the string based on a seperator

