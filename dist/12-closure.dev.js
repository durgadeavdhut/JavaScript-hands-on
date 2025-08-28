"use strict";

var globalVariable = 300;

function outer() {
  var outerVariable = 100;

  var inner = function inner() {
    var innerVariable = 200;
    console.log("Inner Function");
    console.log(innerVariable);
    console.log(outerVariable);
    console.log(globalVariable);
  };

  return inner;
}

var result = outer();
result();