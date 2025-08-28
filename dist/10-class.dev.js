"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  // Data member 
  // Constructor 
  function Person(fullName, age, city) {
    _classCallCheck(this, Person);

    this.fullName = fullName;
    this.age = age;
    this.city = city;
  } // Member Function


  _createClass(Person, [{
    key: "details",
    value: function details() {
      console.log("Details: ".concat(this.fullName, ", ").concat(this.age, ", ").concat(this.city));
    }
  }]);

  return Person;
}();

var stew = new Person("Stew Jobs", 45, "LA");
stew.details();
console.log(stew);
var elon = new Person("Elon Musk", 34, "Pune");
elon.details();
console.log(elon);