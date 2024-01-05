// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//problem comes when we have to compare different datatypes

// console.log("2">1); //converts the string into a number
// console.log("02">1);

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0);//true

//reason being that in js equality and comparison check works differently
//comparison converts null to a number which is 0 thats the 1st case is false.

//we have to mostly avoid such comparisons for clean code

// console.log(undefined == 0);//false
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false

/*Now comes the strict check which is "===" (Triple equal) 
which not only checks the value but also checks the datatype of the value*/

console.log("2"===2); //checks the datatype as well