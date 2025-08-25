const fruits = ["Banana","Orange","Apple","Mango","Watermelon"]
console.log(`Original array element:- ${fruits}`);
console.log("-------------------------------------------------------------------------------------------------")
console.log(`First element in array is : ${fruits[0]}`);
console.log(`Last element in array is : ${fruits[fruits.length-1]}`);
fruits.unshift("Papaya");
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Papaya adding Before Banana:- ${fruits}`);
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Removing Mango from array :- ${fruits.splice(4,1)}`);
fruits.push("Pineapple");
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Add element Pineapple at Last: ${fruits}`);
fruits.splice(4,0,"Dragon Fruit")
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Add element before water melon: ${fruits}`);
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Replace Orange with kiwi: ${fruits[2]="Kiwi"}`);
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Element stating from index 1 to 4 is : ${fruits.slice(1,4)}`);
console.log("-------------------------------------------------------------------------------------------------")
console.log(`Only last three element is : ${fruits[fruits.length-3]},${fruits[fruits.length-2]},${fruits[fruits.length-1]}`);