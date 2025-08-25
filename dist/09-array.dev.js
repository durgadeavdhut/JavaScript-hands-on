"use strict";

console.log("======== Selecting elements from an array =============");
var arrayNumm = [2, 1, 4, 5, 9, 6, 10, 70, 80, 55];
var spliceArray = arrayNumm.slice(2);
console.log("Original Array ");
console.log(arrayNumm);
console.log("After slice with only start index");
console.log(spliceArray);
console.log("After slice with start and end index");
var sliceArrays = arrayNumm.slice(2, 5);
console.log(sliceArrays);
console.log("======= splice() - To Remove the elements =================");
var numArray = [2, 1, 4, 5, 9, 6];
var spliceArray0 = numArray.splice(3);
console.log("====== Original Array =========");
console.log(numArray);
console.log("======  After splice with only start index =========");
console.log(spliceArray0);
var numberArray = [2, 1, 4, 5, 9, 6, 99, 88, 44, 66];
var spliceArray1 = numberArray.splice(3, 5);
console.log("====== Original Array =========");
console.log(numberArray);
console.log("======  After splice with start index and delete count =========");
console.log(spliceArray1);
console.log("======= splice() - To Insert the elements without deleting any existing elements =================");
var numberArrays = [2, 1, 4, 5, 9, 6];
var numberArray0 = numberArrays.splice(3, 0, 99, 77);
console.log("====== Original Array =========");
console.log(numberArrays);
console.log("======= Inserting an elements without replacing any existing any elements==========");
console.log(numberArray0);
console.log("======= splice() - To Insert the elements by deleting or replacing the elements =================");
var numberArrs = [2, 1, 4, 5, 9, 6];
var numberArray1 = numberArrs.splice(2, 3, 100, 200);
console.log("====== Original Array =========");
console.log(numberArrs);
console.log("======= Inserting an elements with replacing any existing any elements==========");
console.log(numberArray1);
console.log("====== for of loop ===========");
var numberArr = [2, 1, 4, 5, 9, 6];

for (var _i = 0, _numberArr = numberArr; _i < _numberArr.length; _i++) {
  var element = _numberArr[_i];
  console.log(element);
}

console.log("====== join() ===========");
var numArr = [2, 1, 4, 5, 9, 6];
var resultArray = numArr.join(",");
console.log(resultArray);