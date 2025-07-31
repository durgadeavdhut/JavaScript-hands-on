"use strict";

console.log("=========1. Function with no arguments and no return value=========");

function show() {
  console.log("Hello.. siri");
}

console.log("Calling show()");
show();
console.log("Calling show()");
show();
console.log("Calling show()");
show();
console.log("======= 2. Function with arguments and no return value =======");

function add(n1, n2, n3) {
  console.log("n1: ".concat(n1, ", n2: ").concat(n2, "), n3: ").concat(n3));
  var result = n1 + n2 + n3;
  console.log("Addition is: ".concat(result));
}

add(5, 80, 5);
console.log("======= 2. Function with arguments and return value =======");

function square(num) {
  console.log("Number to br square: ".concat(num));
  return num * num; //var result = num * num;
  //return result;
}

var returnValue = square(5);
console.log("Square is: ".concat(returnValue));