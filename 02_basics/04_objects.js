// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.islogin = false

// console.log(tinderUser);    

//object nesting is possible
//basically object ke andar object
const regUser = {
    email: "learning@youtube.com",
    fullname: {
        userfullname: {
            firstname: "Siddharth",
            lastname: "Senthil"
        }
    }
}
//objects inside an object can be accessed using dot operator eg below
// console.log(regUser.fullname.userfullname.firstname);

//combining objects

const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "a", 4: "b"
}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}/*targer*/, obj1, obj2/*source*/)

const obj3 = {...obj1,...obj2} //spread same as array
console.log(obj3);

//jab database se value aayegi
//toh array of objects aayega

const users = [
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    }
]
users[1].email //to access first object
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //to get the keys of an object
//output value is in the form of array *IMP*
console.log(Object.values(tinderUser));//to get the values of an object
//this also comes in the form of an array

console.log(Object.entries(tinderUser));
//array ke andar array milega
//har key  ke liye alag array milega

console.log(tinderUser.hasOwnProperty('islogin')); //checks if the object has the particular property/key or not 

