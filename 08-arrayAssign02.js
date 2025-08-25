console.log("-----------------------------------------------------------------------------")
const array = [20, 31, 40, 25, 23, 11, 29, 9, 6, 2, 11];
console.log(`Total element available in array: ${array.length}`);
console.log("-----------------------------------------------------------------------------")

console.log(`First element : ${array[0]}`);
console.log(`Last element : ${array[array.length - 1]}`);
console.log("-----------------------------------------------------------------------------")
console.log(`Third Last element : ${array[array.length - 3]}`);
console.log("-----------------------------------------------------------------------------")




let evenNum = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 0) {
    evenNum.push(array[index]);
  }
}
console.log(`Even number from array : ${evenNum}`);
console.log("-----------------------------------------------------------------------------")



let oddnum = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 1) {
    oddnum.push(array[index]);
  }

}
console.log(`Odd number from array : ${oddnum}`);
console.log("-----------------------------------------------------------------------------")



let sumOfEvenNum = 0;
let evenNum1 = [];
for (let index = 0; index < array.length; index++) {
  if (index % 2 == 0) {
    sumOfEvenNum = sumOfEvenNum + array[index];
  }

}

console.log(`Sum of even positioned array element : ${sumOfEvenNum}`);




let sumOfOddNum = 0;
let oddNum1 = [];
for (let index = 0; index < array.length; index++) {
  if (index % 2 == 1) {
    sumOfOddNum = sumOfOddNum + array[index];
  }

}

console.log(`sum of odd positioned array element : ${sumOfOddNum}`);
console.log("-----------------------------------------------------------------------------")


let sumOfElement = 0;
for (let index = 0; index < array.length; index++) {
  sumOfElement = array[index] + sumOfElement;
}
console.log(`Sum of all element from array : ${sumOfElement}`);
console.log("-----------------------------------------------------------------------------")


let multiple5 = [];
for (let index = 0; index < array.length; index++) {
  if (array[index] % 5 == 0) {
    multiple5.push(array[index]);
  }

}
console.log(`Element that are multiple by 5 : ${multiple5}`);
console.log("-----------------------------------------------------------------------------")

console.log(`Number 115 is available : ${array.includes(115)}`);
console.log("-----------------------------------------------------------------------------")

console.log(`Number 23 is available  : ${array.includes(23)}`);
console.log("-----------------------------------------------------------------------------")

array.splice(3, 0, 55, 66);
console.log(`Inserting number 55 , 66 at index 3 : ${array}`);
console.log("-----------------------------------------------------------------------------")

array.splice(4, 3);
console.log(`Deleting 3 elements  from index 4 : ${array}`);
console.log("-----------------------------------------------------------------------------")