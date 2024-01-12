const user = {
    username: "Siddharth",
    price: 99999999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//browser ke andar global object window hai
//where as node is an empty object thats why jab bina context ke we call this we get not but {}

// function chai(){
//     let username = "Siddharth"
//     console.log(this);
// }
// chai()

//Arrow Function

const chai = () => {
    let username = "Siddharth"
    console.log(this);
}
// chai()


() => {} //syntax for arrow function

//1 way of writing arrow function (Explicit Return) when we use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return (without return keyword)
//curly braces mai wrap kiya to return likhna padhega
// const addTwo = (num1, num2) => (num1 + num2)

//to return object, agar parenthesis nhi lagayenge to output undefined hoga
const addTwo = (num1, num2) => ({username : "Siddharth"})


console.log(addTwo(3,4));


const myArr = [2,5,6,7,8,]

// myArr.forEach(function(){})
// myArr.forEach(()=>{})

