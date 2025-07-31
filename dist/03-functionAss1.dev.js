"use strict";

console.log("===================================================================");
console.log("------- 1: Function with no-arg ,no-return type ------");

function myname() {
  console.log("My Name is Avdhut");
}

myname();

function work() {
  console.log("I am Software Developer");
}

work();
console.log("");
console.log("===================================================================");
console.log("--------- 2: Function with arg but no return type ---------");

function personalDetails(firstName, lastName, collegeName) {
  console.log("firstName: ".concat(firstName, ", lastName: ").concat(lastName, ", collegeName: ").concat(collegeName));
}

personalDetails("Avdhut", "Durgade", "SPCOET");
console.log("");
console.log("===================================================================");
console.log("--------- 3: Function with arg and return type --------");

function addThreeValue(num1, num2, num3) {
  console.log("num1: ".concat(num1, " , num2; ").concat(num2, " , num3: ").concat(num3, " "));
  var result = num1 + num2 + num3;
  console.log("Addition is: ".concat(result, " "));
}

addThreeValue(10.23, 600, 40);
console.log("");

function addThreeValue2(word1, word2, word3) {
  console.log("word1: ".concat(word1, " , word2; ").concat(word2, " , word3: ").concat(word3, " "));
  var result = word1 + word2 + word3;
  console.log("Addition is: ".concat(result, " "));
}

addThreeValue2("Hello", "Good", "Morning");