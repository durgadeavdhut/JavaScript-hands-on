var numOne = 0;
var numTwo = 0;
var result = numOne / numTwo;
console.log(result);
console.log(typeof result);

console.log("============================");
var numThree;
var numFour = 10;
console.log(numThree + numFour);

console.log("-----------------------");
var numFive = "50";
console.log(`${numFive} and it's type is ${typeof numFive}`);
var numFiveInNumber = +numFive;
console.log(`${numFiveInNumber} and it's type is ${typeof numFiveInNumber}`);

console.log("---------*************--------------");
var numFive = "Jenny";
console.log(`${numFive} and it's type is ${typeof numFive}`);
var numFiveInNumber = +numFive;
console.log(`${numFiveInNumber} and it's type is ${typeof numFiveInNumber}`);

console.log("========= Explicit conversion ==============");
console.log("++++++++++++ Number to String Conversion ++++++++++++++++++++++");
var n1 = 20;
console.log(`Value : ${n1} and it's type: ${ typeof n1}`);
var strN1 = String(n1);
console.log(`Value : ${strN1} and it's type: ${ typeof strN1}`);

console.log("++++++++++++ Number to Boolean Conversion ++++++++++++++++++++++");
var n2 = 1001;
var n2InBoolean = Boolean(n2);
console.log(`Value : ${n2InBoolean} and it's type: ${ typeof n2InBoolean}`);

console.log("++++++++++++ String to Number Conversion ++++++++++++++++++++++");
var n3 = "50";
var result = Number(n3);
// var result = +n3; 
console.log(`Value : ${result} and it's type: ${ typeof result}`);

console.log("========= Implicit conversion ==============");
var numOne = 1;
var numTwo = true;
console.log(`Addition: ${numOne + numTwo}`);