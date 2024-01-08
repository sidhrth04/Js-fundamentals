//array

const myArr = [0,1,2,3,4,5]

const arr = ["hi", "hello"]

const newa = new Array(0,1,2,3,4)

// console.log(newa);
// console.log(newa[0]);
// console.log(newa.length);


//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //pushesh the element at index 0
// myArr.shift() //removes the element at index 1

// console.log(myArr.includes(9)); //checks if element is in the array or not

// console.log(myArr.indexOf(3)); // gives the index of the required element

// const newArr = myArr.join() //converts the array into strings

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice  |  splice

console.log("A ", myArr);

const myar1 = myArr.slice(1,3)//does not manipulatew original array

console.log(myar1);
console.log("B ", myArr);

const myar2 = myArr.splice(1,3) //manipulates original array
console.log("C ", myArr);
console.log(myar2);


