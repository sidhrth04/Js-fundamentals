//Primitive (call by value)

//7 types - String, Number, Boolean, Null, Undefined, Symbol, BigInt.


//Number
const score = 100
const scoreM = 100.25

//Boolean
const LoggIn = true

//null
const temp = null; //null means empty not zero

//undefined
let Myemail; //didnt specify any value

//symbol

const Id = Symbol("123")
const anotherId = Symbol("123")

//symbol basically stores things uniquely even tho the values are same

// console.log(Id === anotherId); //false

//Non Premitive (Reference type)

// - Arrays, Objects, Functions

//Arrays (type is object)
const hero = ["jett", "raze", "viper"];

//Objects

myObj = {
    name: "sid",
    age: 19
}

//Function (type: function object)
// const myFunction = function(){
//     console.log("Hello World");
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*Memory => 2 TYPES => STACK and HEAP 
 
STACK => Used in => Primitive types => Whenever we store something in stack we get the copy of it, Manjhe we do changes in its copy and not on the actual value.

HEAP => Used in => Non-Primitive types => where as when we store something in heap we get its reference or basically the original value and here we do all the changes on the original value.

*/
//Example of stack memory
let myName = "PAPA"

let notMyname = myName

notMyname = "BETA"

console.log(notMyname);
console.log(myName);


//Example of heap memory

let userOne = {

    email: "user@gmail.com",
    upi : "sid@okhdfc"
}

let userTwo = userOne

userTwo.email = "papa@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);