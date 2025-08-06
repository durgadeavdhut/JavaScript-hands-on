console.log("---------------------------------- 1 ----------------------------------");
// 1. Function to check if number is EVEN or ODD
var checkEvenOdd = function (num) {
    if (num % 2 === 0) {
        console.log(`${num} is EVEN`);
    } else {
        console.log(`${num} is ODD`);
    }
};

checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);

console.log("---------------------------------- 2 ----------------------------------");
// 2. Function to check voting eligibility
var checkVoteEligibility = function (age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible for vote`);
    } else {
        console.log(`Age ${age}: Not eligible for vote`);
    }
};

checkVoteEligibility(18);
checkVoteEligibility(20);
checkVoteEligibility(17);
checkVoteEligibility(40);

console.log("---------------------------------- 3 ----------------------------------");
// 3. Function to check if string has more than 10 characters
var checkStringLength = function (str) {
    if (str.length > 10) {
        console.log(`"${str}" has more than 10 characters`);
    } else {
        console.log(`"${str}" has 10 or fewer characters`);
    }
};
checkStringLength("JavaScript - ES6");

console.log("---------------------------------- 4 ----------------------------------");
// 4. Function to check if string starts with "Java"
var checkStartsWithJava = function (str) {
    if (str.startsWith("Java")) {
        console.log(`"${str}" starts with "Java"`);
    } else {
        console.log(`"${str}" does NOT start with "Java"`);
    }
};

checkStartsWithJava("JavaScript Language");
checkStartsWithJava("Programming Language");
