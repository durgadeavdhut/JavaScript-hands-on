"use strict";

var arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("Given Array is : ", arrayNumbers);
console.log("--------------------------------------------------------------------------------------------------------------------------------"); // 1. Add 10 into each element

var addTen = arrayNumbers.map(function (num) {
  return num + 10;
});
console.log("Array after adding 10:", addTen);
console.log("--------------------------------------------------------------------------------------------------------------------------------"); // 2. Cube each array element

var cubeArray = arrayNumbers.map(function (num) {
  return Math.pow(num, 3);
});
console.log("Array after performing cubes operation on elements:", cubeArray);
console.log("--------------------------------------------------------------------------------------------------------------------------------"); // 3. Add the index value into its corresponding array element

var addIndex = arrayNumbers.map(function (num, index) {
  return num + index;
});
console.log("Array after adding index value:", addIndex);
console.log("--------------------------------------------------------------------------------------------------------------------------------");