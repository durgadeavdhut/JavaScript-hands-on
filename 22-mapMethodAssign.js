const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("Given Array is : ",arrayNumbers);

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 1. Add 10 into each element
const addTen = arrayNumbers.map(num => num + 10);
console.log("Array after adding 10:", addTen);
console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 2. Cube each array element
const cubeArray = arrayNumbers.map(num => num ** 3);
console.log("Array after performing cubes operation on elements:", cubeArray);
console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 3. Add the index value into its corresponding array element
const addIndex = arrayNumbers.map((num, index) => num + index);
console.log("Array after adding index value:", addIndex);
console.log("--------------------------------------------------------------------------------------------------------------------------------");
