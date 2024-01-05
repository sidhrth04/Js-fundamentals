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

console.log(Id === anotherId); //false

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
const myFunction = function(){
    console.log("Hello World");
}