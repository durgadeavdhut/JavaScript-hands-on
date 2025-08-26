"use strict";

var professor = {
  name: "Dinesh Kate",
  age: 50,
  subject: "Computer Science",
  college: "SPCOET Engineering College",
  email: "dineshkate@gmail.com",
  degrees: {
    engineering: "CSC",
    masters: "Software Engineering",
    phd: "Adv Computing"
  },
  certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"]
};
console.log(professor);
console.table(professor);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------");
professor.totalExperience = "14 years";
console.log("After adding totalExperience:", professor); //console.log(professor);

console.table(professor);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------");
professor.age = 52;
console.log("After modifying age:", professor);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("After adding new certificate:", professor.certificates);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("Last certificate:", professor.certificates[professor.certificates.length - 1]);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("Certificates list:");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = professor.certificates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var certificate = _step.value;
    console.log(certificate);
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

console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------");