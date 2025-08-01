"use strict";

var greet = "Good Morning";
console.log("Given String is: ".concat(greet));
var totalChars = greet.length;
console.log("Total characters or length is: ".concat(totalChars));
console.log("======== toLowerCase() ===========");
var greetInLowerCase = greet.toLowerCase();
console.log("Greet in lower case: ".concat(greetInLowerCase));
console.log("======== charAt() ===========");
var charAtIndex0 = greet.charAt(0);
console.log("Char at index 0 is: ".concat(charAtIndex0));
var charAtIndex10 = greet.charAt(10);
console.log("Char at index 10 is: ".concat(charAtIndex10));
var charAtLastIndex = greet.charAt(greet.length - 1);
console.log("Char at last index  is: ".concat(charAtLastIndex));
var charAtIndex11 = greet.charAt(101);
console.log("Char at index 101  is: ".concat(charAtIndex11));
var charAtIndexMinus2 = greet.charAt(-2);
console.log("Char at index minus 2  is: ".concat(charAtIndexMinus2));
console.log("======== concat() ===========");
var strOne = "My";
var strTwo = " Love";
var strThree = " JavaScript";
var strConcat = strOne.concat(strTwo).concat(strThree);
console.log("Concat: ".concat(strConcat));
console.log("======== indexOf() ===========");
var greet = "Good Evening Nana";
var indexOfCharg = greet.indexOf("g");
console.log("Index of char g: ".concat(indexOfCharg));
var indexOfCharT = greet.indexOf("T");
console.log("Index of char T: ".concat(indexOfCharT));
var indexOfCharn = greet.indexOf("n");
console.log("Index of char n: ".concat(indexOfCharn));
var indexOfCharn = greet.lastIndexOf("n");
console.log("Index of char n: ".concat(indexOfCharn));
var indexOfCharNana = greet.lastIndexOf("Nana");
console.log("Index of char Nana: ".concat(indexOfCharNana));
console.log("======== trim() ===========");
var myLove = "   I Love only JS  ";
var lengthBeforeTrim = myLove.length;
console.log("Before trim length is: ".concat(lengthBeforeTrim));
var myLoveJS = myLove.trim();
var lengthAfterTrim = myLoveJS.length;
console.log("After trim length is: ".concat(lengthAfterTrim));
console.log("Total removed spaces are: ".concat(lengthBeforeTrim - lengthAfterTrim));
console.log("======== includes() ===========");
var myLove = "I love only JS no more any one";
var isJSAvailable = myLove.includes("JS");
console.log(isJSAvailable);
console.log("======== slice() ===========");
var str = "Hello JavaScript";
var slice6 = str.slice(6);
console.log(slice6);
var sliceBetween6To10 = str.slice(6, 10);
console.log(sliceBetween6To10);
console.log("======== split() ===========");
var str = "I have 100CR Property you know";
var splitResult = str.split(" ");
console.log(splitResult);
console.log("Total number of words: ".concat(splitResult.length));