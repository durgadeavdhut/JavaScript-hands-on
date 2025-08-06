"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var numOne = 0;
var numTwo = 0;
var result = numOne / numTwo;
console.log(result);
console.log(_typeof(result));
console.log("============================");
var numThree;
var numFour = 10;
console.log(numThree + numFour);
console.log("-----------------------");
var numFive = "50";
console.log("".concat(numFive, " and it's type is ").concat(_typeof(numFive)));
var numFiveInNumber = +numFive;
console.log("".concat(numFiveInNumber, " and it's type is ").concat(_typeof(numFiveInNumber)));
console.log("---------*************--------------");
var numFive = "Jenny";
console.log("".concat(numFive, " and it's type is ").concat(_typeof(numFive)));
var numFiveInNumber = +numFive;
console.log("".concat(numFiveInNumber, " and it's type is ").concat(_typeof(numFiveInNumber)));
console.log("========= Explicit conversion ==============");
console.log("++++++++++++ Number to String Conversion ++++++++++++++++++++++");
var n1 = 20;
console.log("Value : ".concat(n1, " and it's type: ").concat(_typeof(n1)));
var strN1 = String(n1);
console.log("Value : ".concat(strN1, " and it's type: ").concat(_typeof(strN1)));
console.log("++++++++++++ Number to Boolean Conversion ++++++++++++++++++++++");
var n2 = 1001;
var n2InBoolean = Boolean(n2);
console.log("Value : ".concat(n2InBoolean, " and it's type: ").concat(_typeof(n2InBoolean)));
console.log("++++++++++++ String to Number Conversion ++++++++++++++++++++++");
var n3 = "50";
var result = Number(n3); // var result = +n3; 

console.log("Value : ".concat(result, " and it's type: ").concat(_typeof(result)));
console.log("========= Implicit conversion ==============");
var numOne = 1;
var numTwo = true;
console.log("Addition: ".concat(numOne + numTwo));