console.log("================ 1 ================");
function greaterNumber(num1, num2) {
    var result = (num1 > num2) ? num1 : num2;
    console.log(`Greater number between ${num1} and ${num2} is : ${result}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("================ 2 ================");
function isEvenOrOddNum(number) {
    return (number % 2 === 0) ? "EVEN" : "ODD";
}

console.log(`Given No is 29 : ${isEvenOrOddNum(29)}`);
console.log(`Given No is 44 : ${isEvenOrOddNum(44)}`);
console.log(`Given No is 0 : ${isEvenOrOddNum(0)}`);
console.log(`Given No is 101 : ${isEvenOrOddNum(101)}`);

console.log("================ 3 ================");
function wordLength(word) {
    return (word.length % 2 === 0) ? "EVEN" : "ODD";
}

console.log(`"JavaScript" length is ${wordLength("JavaScript")}`);
console.log(`"developer" length is ${wordLength("developer")}`);
console.log(`"Google" length is ${wordLength("Google")}`);


console.log(playerRohit instanceof Player);

const date = new Date();
console.log(date);
