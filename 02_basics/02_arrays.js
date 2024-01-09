const myHeroes = ["shaktiman", "bhupendrajogi", "puneetsuperstar"]
const myHeroes2 = ["Gabbar","animal","rockybhai"]

// myHeroes.push(myHeroes2) //this basically pushes an array into another array
// console.log(myHeroes);
// console.log(myHeroes[3][1]);

// const Heroes = myHeroes.concat(myHeroes2) //concat requires a new array to return the value, but push made changes in the existing array
// console.log(Heroes);

const newHeroes = [...myHeroes, ...myHeroes2] //spread operator
// console.log(newHeroes);

const phirseArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const rescue = phirseArray.flat(Infinity) //flat function basically creates multiple set of arrays into a single array
console.log((rescue));


console.log(Array.isArray("Siddharth")); //checks if array or not
console.log(Array.from("Siddharth")); //converts into array
console.log(Array.from({name: "Siddharth"})); //returns a empty array if not able to convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //converts set of elements into an array

