"use strict";

function countCharA(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);

    if (ch === 'a' || ch === 'A') {
      count++;
    }
  }

  return count;
}

var string1 = "I AM Learning JavaScript, The Language of internet";
var string2 = "My favourite movie is LAggAn";
console.log("===== Count Character =====");
console.log("String 1: \"".concat(string1, "\""));
console.log("Count of 'a' or 'A':", countCharA(string1));
console.log("String 2: \"".concat(string2, "\""));
console.log("Count of 'a' or 'A':", countCharA(string2));