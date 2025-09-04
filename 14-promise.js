const promise = new Promise(function(success, reject){
    console.log("==== Promise =======");
    // success("Elon Yahoo....  I am back and now I am rich, let's get marry Jenny"); 
    reject("Elon --> I can't marry with you.. I got some one else");
});

promise.then( function(message){
    console.log(message);
    console.log("Jenny... Yes Elon let's get marry now....."); 
})
.catch(function(message){
    console.log(message);
    console.log("Jenny started crying.....");
}).finally(function(){
    console.log("He has to prepare food in the Kitchen..."); 
});