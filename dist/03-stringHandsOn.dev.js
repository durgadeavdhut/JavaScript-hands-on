"use strict";

function stringHandsOn() {
  var str = "  Hey you are doing good, keep it up  ";
  console.log("---------- 1 ----------");
  console.log("Given String is : ".concat(str));
  console.log("---------- 2 ----------");
  var totalLength = str.length;
  console.log("Total length of string is : ".concat(totalLength));
  console.log("---------- 3 ----------");
  var strtrim = str.trim();
  console.log("Remove leading and trailing extra spaces : ".concat(strtrim));
  var trimLength = strtrim.length;
  console.log("Length of string after trim: ".concat(trimLength));
  console.log("---------- 4 ----------");
  var firstChar = strtrim.charAt(0);
  var lastChar = strtrim.charAt(33);
  console.log("First Char is: ".concat(firstChar, " And Last char is : ").concat(lastChar));
  console.log("---------- 5 ----------");
  var totalWords = strtrim.split(" ");
  console.log("Count of total words : ".concat(totalWords.length));
  console.log("---------- 6 ----------");
  var indexOfchar = strtrim.indexOf("good");
  console.log("Index of word good is : ".concat(indexOfchar));
  console.log("---------- 7 ----------");
  var subString = strtrim.slice(22);
  console.log("The subString starting from index 22 is: ".concat(subString));
  console.log("---------- 8 ----------");
  var strending = strtrim.endsWith("up");
  console.log("String end with word up : ".concat(strending));
  console.log("---------- 9 ----------");
  var srtStart = strtrim.startsWith("Hey");
  console.log("String start with Hey : ".concat(srtStart));
}

stringHandsOn();