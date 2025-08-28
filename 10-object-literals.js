let person = {
    firstName: "Elon",
    lastName : "Musk",
    age: 55,
    isMarried: true,
    designation: "CEO",
    companies: ["Tesla", "SpaceX", "Twitter", "Boeing", "Neuralink"],
    marks: {
        science: 99,
        physics: 100,
        math: 80,
        history: 50
    }
};

console.log(person);
console.table(person);

console.log("======== Accessing or reading the object properties =============");
console.log("===== Using . dot notation ====");
const firstName = person.firstName;
console.log(`Person first name: ${firstName}`);

console.log("===== Using [] square bracket notation ====");
console.log(`Person Last name: ${person["lastName"]}`);

console.log("===== Adding property into the object ========");
person.networth = "4 Trillion $";

console.log("===== Delete property from the object ========");
delete person.designation;

console.log("===== update the property of an object ========");
person.age = 58;
console.log(person);

person.companies.push("Solar City");

console.log("====== Companies ========");
console.log(person.companies);
for (const element of person.companies) {
    console.log(element);
}

console.log("====== Nested Object =========");
console.log(`Elon Science marks : ${person.marks.science}`);

person.marks.history=60;
console.log(`Elon history marks : ${person.marks.history}`);

console.log("======== Empty object =======");

let student = {

}

let employee = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false,
    details: function(){
        console.log(`Employee details: Full Name ${this.fullName}, Age: ${this.age}, Married status: ${this.isMarried} `);  
    }
}
employee.details();


console.log("======== Traverse the object ==========");
let emp = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false
}
for (const key in emp) {
    const value = emp[key]; 
    console.log(`Key: ${key}, Value: ${value}`);
}

console.log("====== Check is the property available or not ?=======");
console.log("age" in emp);
console.log("city" in emp);

console.log("========= Object freezing ==============");
const stud = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false
}
// stud = {

// }
// console.log(stud);
Object.freeze(stud);

stud.age = 100;
console.log(stud);

console.log("========== Object.assign() ===========");
console.log("======== 1. Cloning an object =======");

const personStew = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false
}

const clonedObject = Object.assign({}, personStew );
console.log(clonedObject);

console.log("======== 2. Merge the object =======");
const address = {
    city: "Pune",
    country: "India",
    pin: "411057"
}
// Object.assign(personStew, address);
// console.log(personStew);

// Object.assign(address, personStew);
// console.log(address);

const mergedObject = Object.assign({}, personStew, address);
console.log(mergedObject);