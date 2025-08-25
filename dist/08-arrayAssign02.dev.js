"use strict";

console.log("-----------------------------------------------------------------------------");
var array = [20, 31, 40, 25, 23, 11, 29, 9, 6, 2, 11];
console.log("Total element available in array: ".concat(array.length));
console.log("-----------------------------------------------------------------------------");
console.log("First element : ".concat(array[0]));
console.log("Last element : ".concat(array[array.length - 1]));
console.log("-----------------------------------------------------------------------------");
console.log("Third Last element : ".concat(array[array.length - 3]));
console.log("-----------------------------------------------------------------------------");
var evenNum = [];

for (var index = 0; index < array.length; index++) {
  if (array[index] % 2 == 0) {
    evenNum.push(array[index]);
  }
}

console.log("Even number from array : ".concat(evenNum));
console.log("-----------------------------------------------------------------------------");
var oddnum = [];

for (var _index = 0; _index < array.length; _index++) {
  if (array[_index] % 2 == 1) {
    oddnum.push(array[_index]);
  }
}

console.log("Odd number from array : ".concat(oddnum));
console.log("-----------------------------------------------------------------------------");
var sumOfEvenNum = 0;
var evenNum1 = [];

for (var _index2 = 0; _index2 < array.length; _index2++) {
  if (_index2 % 2 == 0) {
    sumOfEvenNum = sumOfEvenNum + array[_index2];
  }
}

console.log("Sum of even positioned array element : ".concat(sumOfEvenNum));
var sumOfOddNum = 0;
var oddNum1 = [];

for (var _index3 = 0; _index3 < array.length; _index3++) {
  if (_index3 % 2 == 1) {
    sumOfOddNum = sumOfOddNum + array[_index3];
  }
}

console.log("sum of odd positioned array element : ".concat(sumOfOddNum));
console.log("-----------------------------------------------------------------------------");
var sumOfElement = 0;

for (var _index4 = 0; _index4 < array.length; _index4++) {
  sumOfElement = array[_index4] + sumOfElement;
}

console.log("Sum of all element from array : ".concat(sumOfElement));
console.log("-----------------------------------------------------------------------------");
var multiple5 = [];

for (var _index5 = 0; _index5 < array.length; _index5++) {
  if (array[_index5] % 5 == 0) {
    multiple5.push(array[_index5]);
  }
}

console.log("Element that are multiple by 5 : ".concat(multiple5));
console.log("-----------------------------------------------------------------------------");
console.log("Number 115 is available : ".concat(array.includes(115)));
console.log("-----------------------------------------------------------------------------");
console.log("Number 23 is available  : ".concat(array.includes(23)));
console.log("-----------------------------------------------------------------------------");
array.splice(3, 0, 55, 66);
console.log("Inserting number 55 , 66 at index 3 : ".concat(array));
console.log("-----------------------------------------------------------------------------");
array.splice(4, 3);
console.log("Deleting 3 elements  from index 4 : ".concat(array));
console.log("-----------------------------------------------------------------------------");