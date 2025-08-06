"use strict";

console.log("--------------------1 -------------------- ");

function squareOfWordLength(word) {
  var length = word.length;
  var square = length * length;
  console.log("Given word: \"".concat(word, "\", Length: ").concat(length, ", Square of Length: ").concat(square));
  return square;
}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");
console.log("--------------------2 -------------------- ");

function stringOperations() {
  var str = "I am MERN Stack Developer";
  var length = str.length;
  var words = str.split(" ").length;
  console.log("String length Divides total words = ".concat(length, " / ").concat(words, " = ").concat(length / words));
  console.log("String length Multiply total words = ".concat(length, " * ").concat(words, " = ").concat(length * words));
}

stringOperations();