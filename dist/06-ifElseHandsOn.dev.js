"use strict";

console.log("---------------------------------- 1 ----------------------------------"); // 1. Function to check if number is EVEN or ODD

var checkEvenOdd = function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("".concat(num, " is EVEN"));
  } else {
    console.log("".concat(num, " is ODD"));
  }
};

checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);
console.log("---------------------------------- 2 ----------------------------------"); // 2. Function to check voting eligibility

var checkVoteEligibility = function checkVoteEligibility(age) {
  if (age >= 18) {
    console.log("Age ".concat(age, ": Eligible for vote"));
  } else {
    console.log("Age ".concat(age, ": Not eligible for vote"));
  }
};

checkVoteEligibility(18);
checkVoteEligibility(20);
checkVoteEligibility(17);
checkVoteEligibility(40);
console.log("---------------------------------- 3 ----------------------------------"); // 3. Function to check if string has more than 10 characters

var checkStringLength = function checkStringLength(str) {
  if (str.length > 10) {
    console.log("\"".concat(str, "\" has more than 10 characters"));
  } else {
    console.log("\"".concat(str, "\" has 10 or fewer characters"));
  }
};

checkStringLength("JavaScript - ES6");
console.log("---------------------------------- 4 ----------------------------------"); // 4. Function to check if string starts with "Java"

var checkStartsWithJava = function checkStartsWithJava(str) {
  if (str.startsWith("Java")) {
    console.log("\"".concat(str, "\" starts with \"Java\""));
  } else {
    console.log("\"".concat(str, "\" does NOT start with \"Java\""));
  }
};

checkStartsWithJava("JavaScript Language");
checkStartsWithJava("Programming Language");