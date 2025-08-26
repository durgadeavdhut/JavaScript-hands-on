const rollNumbers = new Set();
rollNumbers.add(11);
rollNumbers.add(22);
rollNumbers.add(33);
rollNumbers.add(44);
rollNumbers.add(55);
console.log(rollNumbers);

console.log("====== Total elements in the Set =======");
console.log(`Total elements are: ${rollNumbers.size}`);

console.log("====== Traversing Set =======");
for (const element of rollNumbers) {
    console.log(element);
}

console.log("====== Trying to add duplicate element =======");
console.log("=== Before Adding Set is =====");
console.log(rollNumbers);
console.log("=== After Adding Set is =====");
rollNumbers.add(33);
console.log(rollNumbers);

console.log("===== WAP to remove duplicate elements from an array =======");
let array = [2, 1, 4, 2, 1, 6, 8, 6];
const uniqueSet = new Set(array);
console.log(uniqueSet);
const arrayUnique = [];
for (const element of uniqueSet) {
    arrayUnique.push(element)
}
console.log("=== After removing duplicates ===");
console.log(arrayUnique);

console.log("===== shortcut =========");
const arrayUniques = [...new Set(array)];
console.log(arrayUniques);