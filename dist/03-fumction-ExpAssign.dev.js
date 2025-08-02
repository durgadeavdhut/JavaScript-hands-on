"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log("--------------- 1 ---------------");

var square = function square(num) {
  return num * num;
};

console.log("Square of 5 : ".concat(square(5)));
console.log("Square of 6 : ".concat(square(6)));
console.log("Square of 25 : ".concat(square(25)));
console.log("Square of 100 : ".concat(square(100)));
console.log("Square of 67.89 : ".concat(square(67.89)));
console.log("Square of 59 : ".concat(square(59)));
console.log("");
console.log("--------------- 2 ---------------");
console.log("Type of square function : ".concat(_typeof(square)));
console.log("");
console.log("--------------- 3 ---------------");

var rectangle = function rectangle(length, width) {
  return length * width;
};

console.log("Area of a rectangle : ".concat(rectangle(499, 917)));
console.log("");
console.log("--------------- 4 ---------------");

var swapValues = function swapValues(value1, value2) {
  console.log("Before Swap : ".concat(value1, " , ").concat(value2, " "));
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap : ".concat(value1, " , ").concat(value2));
};

swapValues("Mahi", "Raina");
console.log(" ");

var swapValues2 = function swapValues2(value1, value2) {
  console.log("Before Swap : ".concat(value1, " , ").concat(value2, " "));
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap : ".concat(value1, " , ").concat(value2));
};

swapValues2(55, 77);
console.log(" ");
console.log("--------------- 5 ---------------");

var stringAnalysis = function stringAnalysis() {
  var str = "JS the most popular language of internet";
  console.log("Total characters in string: ".concat(str.length));
  console.log("Character at index 6: ".concat(str.charAt(6)));
  console.log("Character at index 11: ".concat(str.charAt(11)));
  console.log("Last character: ".concat(str.charAt(str.length - 1)));
  console.log("First character: ".concat(str.charAt(0)));
  console.log("Third last character: ".concat(str.charAt(str.length - 3)));
  var words = str.split(" ");
  var totalWords = words.length;
  console.log("Total number of words: ".concat(totalWords));
  console.log("Square of total words: ".concat(totalWords * totalWords));
};

stringAnalysis();