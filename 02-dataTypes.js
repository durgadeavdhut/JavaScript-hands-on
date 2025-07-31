
console.log("====== Primitive DT ======");

console.log("====== 1. Number Data Type ========");

var age =20;
console.log("Age is:"+ age)

var ageTypeOf = typeof age;
console.log("Type of age:"+ ageTypeOf);

var weight = 37.50;
console.log("weight is:"+weight);
console.log("Type of weight:"+ typeof weight);

console.log("================2. String data types==================");

var age = "37";
console.log("age is:"+age);
console.log("Type of age is :"+ typeof age);


console.log("================3. Boolean data types==================");

var isMarried = true;
console.log(`Status is:${isMarried} and its data type is:+${typeof isMarried}`);
// console.log("Type of isMarried is :"+ typeof isMarried);


console.log("================String template==================");
var isBachelors = false;
// ES 6 Features --> String template
console.log(`Is Bachelor: ${isBachelors} and its data type is: ${typeof isBachelors}`);//variable substitution



console.log(isBachelors);
console.log("Type of isBachelors is :"+ typeof isBachelors);

console.log("====== Non Primitive DT ======");

var myLove ;
console.log( typeof myLove);

var hobbies = null;//empty or nothing 
console.log(typeof hobbies);

// var hobbies = "";
// console.log(typeof hobbies);
