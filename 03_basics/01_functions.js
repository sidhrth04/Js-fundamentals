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

// console.log(userLogin("sam")); // jab koi value he pass nhi ki jaati hai in the place of function  parameter/argument the output comes as UNDEFINED

//if we give an argument the default value will be overwritten

//rest operator ...something
//basically rest operator, when given multiple input returns it as a array
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2,3,4));

//to pass an object to a function

const user = {
    username: "siddharth",
    price: 200
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);

}

//jab function ko call karenge we will pass an object as the argument

// handleObject(user)

// handleObject({ directly object banadiya
//     username: "sam",
//     price: 400
// })

const mynewArr = [200, 400, 600]


function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(mynewArr));
console.log(returnSecondValue([200,500,700])); //can directly pass variables as well