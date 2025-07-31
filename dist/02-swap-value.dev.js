"use strict";

var bottleOne = "Honey";
var bottleTwo = "Milk";
console.log("bottleOne: ".concat(bottleOne, " and bottleTwo: ").concat(bottleTwo));
var temp = bottleOne;
bottleOne = bottleTwo;
bottleTwo = temp;
console.log("bottleOne: ".concat(bottleOne, " and bottleTwo: ").concat(bottleTwo));