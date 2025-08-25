console.log("======== Selecting elements from an array =============");
let arrayNumm = [2, 1, 4, 5, 9, 6, 10, 70, 80, 55];
const spliceArray = arrayNumm.slice(2);
console.log("Original Array ");
console.log(arrayNumm);
console.log("After slice with only start index");
console.log(spliceArray);

console.log("After slice with start and end index");
const sliceArrays =arrayNumm.slice(2, 5)
console.log(sliceArrays);


console.log("======= splice() - To Remove the elements =================");
let numArray = [2, 1, 4, 5, 9, 6];
const spliceArray0 = numArray.splice(3);
console.log("====== Original Array =========");
console.log(numArray);
console.log("======  After splice with only start index =========");
console.log(spliceArray0);

let numberArray = [2, 1, 4, 5, 9, 6, 99, 88, 44, 66];
const spliceArray1 = numberArray.splice(3, 5);
console.log("====== Original Array =========");
console.log(numberArray);
console.log("======  After splice with start index and delete count =========");
console.log(spliceArray1);


console.log("======= splice() - To Insert the elements without deleting any existing elements =================");
let numberArrays = [2, 1, 4, 5, 9, 6];
const numberArray0 = numberArrays.splice(3, 0, 99, 77);
console.log("====== Original Array =========");
console.log(numberArrays);
console.log("======= Inserting an elements without replacing any existing any elements==========");
console.log(numberArray0);

console.log("======= splice() - To Insert the elements by deleting or replacing the elements =================");
let numberArrs = [2, 1, 4, 5, 9, 6];
const numberArray1 = numberArrs.splice(2, 3, 100, 200);
console.log("====== Original Array =========");
console.log(numberArrs);
console.log("======= Inserting an elements with replacing any existing any elements==========");
console.log(numberArray1);


console.log("====== for of loop ===========");
let numberArr = [2, 1, 4, 5, 9, 6];
for (const element of numberArr) {
   console.log(element);
}

console.log("====== join() ===========");
let numArr = [2, 1, 4, 5, 9, 6];
const resultArray = numArr.join(",");
console.log(resultArray);