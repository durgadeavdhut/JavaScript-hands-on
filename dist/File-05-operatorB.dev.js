"use strict";

console.log("================ 1 ================");

function greaterNumber(num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log("Greater number between ".concat(num1, " and ").concat(num2, " is : ").concat(result));
}

greaterNumber(10, -10);
greaterNumber(800, 899);
console.log("================ 2 ================");

function isEvenOrOddNum(number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
}

console.log("Given No is 29 : ".concat(isEvenOrOddNum(29)));
console.log("Given No is 44 : ".concat(isEvenOrOddNum(44)));
console.log("Given No is 0 : ".concat(isEvenOrOddNum(0)));
console.log("Given No is 101 : ".concat(isEvenOrOddNum(101)));
console.log("================ 3 ================");

function wordLength(word) {
  return word.length % 2 === 0 ? "EVEN" : "ODD";
}

console.log("\"JavaScript\" length is ".concat(wordLength("JavaScript")));
console.log("\"developer\" length is ".concat(wordLength("developer")));
console.log("\"Google\" length is ".concat(wordLength("Google")));