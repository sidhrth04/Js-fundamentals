//singleton : apne jaisa ek he object hai, do not have multiple instances

//when we declare objects as literals singleton nhi banega

// Object.create //issi ke andar singleton banta hai

//object literals

const mySym = Symbol("key1")
const Jsuser = {

    name: "Siddharth",
    "full name" : "Siddharth Senthil",
    [mySym]: "mykey1", //to access symbol key we use square brackets, without  [] its just a string
    age: 19,
    location: "chennai",
    email: "sid@gmail.com",
    islogin: false,
    lastLoginDays : ["Monday","Friday"],
}

    console.log(Jsuser.email);// this method is not usable when the key in object is declared as an string
    console.log(Jsuser["email"]);
    console.log(Jsuser["full name"]);
    console.log(Jsuser[mySym]);
    console.log(typeof [mySym]);

    Jsuser.email = "sidd@papa.com" //to change the value of keys from object
    // Object.freeze(Jsuser) //now values will be freezed and cannot be changed
    Jsuser.email = "sidd@beta.com"
    // console.log(Jsuser); //nothing changed

    Jsuser.greeting = function(){
        console.log("Hello Js");
    }
    Jsuser.greetingTwo = function(){
        console.log(`Hello Js, ${this.name}`);
    }
    console.log(Jsuser.greeting());
    console.log(Jsuser.greetingTwo());

    






