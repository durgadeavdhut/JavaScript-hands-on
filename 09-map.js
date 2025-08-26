const students = new Map();
students.set(11, "Elon");
students.set(22, "Bill");
students.set(33, "Jeff");
students.set(44, "Larry");
students.set(55, "Stew");
students.set(66, "Mark");
console.log(students);

console.log(`====== Total entries : ${students.size} ====== `);

console.log(`====== Adding the duplicate Key ====== `);
students.set(44, "Ratan");
console.log(students);
console.table(students);

console.log(`====== Adding the duplicate value ====== `);
students.set(77, "Elon");
console.log(students);
console.table(students);


console.log(`====== Get the value ====== `);
console.log(`Get the value: ${students.get(55)} for the key: 55`);

console.log(`====== Delete the entry ====== `);
students.delete(22);
console.table(students);

console.log(`====== Check key is available or not ====== `);
console.log(students.has(44));
console.log(students.has(99));

console.log("===== MAP KEYS =======");
console.log(students.keys());

console.log("===== MAP VALUES =======");
console.log(students.values());

console.log("======= Traverse Map ==========");
const keysList = students.keys();
for (const key of keysList) {
    console.log(`KEY: ${key}, VALUE ${students.get(key)}`); 
}