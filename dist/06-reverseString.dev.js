"use strict";

function reverseStringIgnoreSpaces(str) {
  var result = "";

  for (var i = str.length - 1; i >= 0; i--) {
    var ch = str.charAt(i);

    if (ch !== ' ') {
      result += ch;
    }
  }

  return result;
}

var s1 = "Hard work always pays back";
var s2 = "Soon I will be Angular IT Champ";
console.log("========== Reversed String ==========");
console.log("String 1: \"".concat(s1, "\""));
console.log("Reversed String is :", reverseStringIgnoreSpaces(s1));
console.log("String 2: \"".concat(s2, "\""));
console.log("Reversed String is :", reverseStringIgnoreSpaces(s2));