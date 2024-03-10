const promiseOne = new Promise(function(resolve,reject){
    //do async task
    //db calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    
})
