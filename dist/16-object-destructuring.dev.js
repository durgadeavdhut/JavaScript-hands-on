"use strict";

console.log("======= Object Destructuring ===========");
var person = {
  fullName: "Stew Jobs",
  age: 23,
  isMarried: false,
  city: "Pune",
  country: "India",
  pin: "411057"
}; // const fullName = person.fullName;
// const city = person.city;
// const country = person.country;
// const pin = person.pin;

var fullName = person.fullName,
    city = person.city,
    country = person.country,
    _person$pin = person.pin,
    pin = _person$pin === void 0 ? 10001 : _person$pin,
    _person$designation = person.designation,
    designation = _person$designation === void 0 ? "UI Developer" : _person$designation;
console.log(fullName, city, country, pin);