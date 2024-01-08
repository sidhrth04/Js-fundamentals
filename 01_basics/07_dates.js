let myDate = new Date()

// console.log(myDate);//2024-01-08T10:03:40.001Z
// console.log(myDate.toString());//Mon Jan 08 2024 10:03:40 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Mon Jan 08 2024
// console.log(myDate.toISOString());//2024-01-08T10:03:40.001Z
// console.log(myDate.toJSON());//2024-01-08T10:03:40.001Z
// console.log(myDate.toLocaleDateString());//1/8/2024
// console.log(myDate.toLocaleString());//1/8/2024, 10:03:40 AM
// console.log(myDate.toLocaleTimeString());//10:03:40 AM

// console.log(typeof(myDate)); //type is object

// let creatNewDate = new Date(2023,1,23)
// console.log(creatNewDate.toDateString());
// console.log(creatNewDate.toLocaleString());

// let creatNewDate = new Date("02-23-2023")

// console.log(creatNewDate.toLocaleString());


// let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(Math.floor(myTimestamp/1000)); //to convert miliseconds to seconds

let nayaDin = new Date()

    console.log(nayaDin.getMonth()+1); //to get month, +1 befccause in js month starts from 0, as in 0 is jan
    console.log(nayaDin.getDay()); // here 1 means monday which is normal 

    nayaDin.toLocaleString('default',{
        weekday : "long"
    })



