if (true){let a  =10
const b = 20
var c = 30
}
//something declared inside the curly braces are block scope and declared outside are global scope
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username = "Siddharth"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

    two()
}

// 

if(true){
    const username = "siddharth"

    if(username === "siddharth"){
        const website = " Github"
        // console.log(username + website);
    }
    // console.log(website); //will give error because accessing outside the scope
}
// console.log(username); //will give error because we are accessing it outside the scope

//INTERESTING CONCEPT
//2 types of function declaration

//normal
addone(5)
function addone(num){
    return num+1

}

//storing the function inside a variable
addTwo(5)

const addTwo =  function(num){
    return num + 2 
}


//in the 2nd type we cannot access the fucntion before its initialization, basically funciton ke upar we cannot call