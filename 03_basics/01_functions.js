function myName(){
    console.log("S");
    console.log("S");
    console.log("S");
    console.log("S");
    console.log("S");
    console.log("S");

}

// myName()
//jab function ki definition banate hai tab parameter bolte hai
// function sumTwonnums(number1, number2) {
//     console.log(number1 + number2);
// }
function sumTwonnums(number1, number2) {
    let result = number1 + number2
    return result 
}

sumTwonnums(2,3) //function call karte time input ko arguments bolte hai

//agar hum chahte nhi hai ki kabhi undefined ho toh we can just give default values
function userLogin(username = "sid"){
    if(username === undefined){
        console.log("No username entered");
        return 

    }
    return `${username} just logged in`
}
// function userLogin(username){
//     if(username === undefined){
//         console.log("No username entered");
//         return 

//     }
//     return `${username} just logged in`
// }

console.log(userLogin("sam")); // jab koi value he pass nhi ki jaati hai in the place of function  parameter/argument the output comes as UNDEFINED

//if we give an argument the default value will be overwritten