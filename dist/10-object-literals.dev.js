"use strict";

var person = {
  firstName: "Elon",
  lastName: "Musk",
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
var firstName = person.firstName;
console.log("Person first name: ".concat(firstName));
console.log("===== Using [] square bracket notation ====");
console.log("Person Last name: ".concat(person["lastName"]));
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = person.companies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;
    console.log(element);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log("====== Nested Object =========");
console.log("Elon Science marks : ".concat(person.marks.science));
person.marks.history = 60;
console.log("Elon history marks : ".concat(person.marks.history));
console.log("======== Empty object =======");
var student = {};
var employee = {
  fullName: "Stew Jobs",
  age: 23,
  isMarried: false,
  details: function details() {
    console.log("Employee details: Full Name ".concat(this.fullName, ", Age: ").concat(this.age, ", Married status: ").concat(this.isMarried, " "));
  }
};
employee.details();