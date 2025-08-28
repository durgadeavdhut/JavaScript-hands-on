var globalVariable = 300;
function outer(){
    let outerVariable = 100;
    let inner = function(){
        let innerVariable = 200;
        console.log("Inner Function"); 
        console.log(innerVariable);
        console.log(outerVariable);
        console.log(globalVariable);
    }
    return inner;
}
const result = outer();
result();