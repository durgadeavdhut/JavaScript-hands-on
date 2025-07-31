console.log("===================================================================");
console.log("------- 1: Function with no-arg ,no-return type ------");

function myname(){
    console.log("My Name is Avdhut");   
}
myname();
 
function work(){
    console.log("I am Software Developer");    
}
work();
console.log("");
console.log("===================================================================");
console.log("--------- 2: Function with arg but no return type ---------");

function personalDetails(firstName,lastName,collegeName){
console.log(`firstName: ${firstName}, lastName: ${lastName}, collegeName: ${collegeName}`);

}

personalDetails("Avdhut","Durgade","SPCOET");

console.log("");

console.log("===================================================================");
console.log("--------- 3: Function with arg and return type --------");

function addThreeValue(num1,num2,num3){
    console.log(`num1: ${num1} , num2; ${num2} , num3: ${num3} `);
    var result = num1+num2+num3;
    console.log(`Addition is: ${result} `);
    
}    
addThreeValue(10.23,600,40);

console.log("");


function addThreeValue2(word1,word2,word3){
    console.log(`word1: ${word1} , word2; ${word2} , word3: ${word3} `);
    var result = word1+word2+word3;
    console.log(`Addition is: ${result} `);
    
}    
addThreeValue2("Hello","Good","Morning");



