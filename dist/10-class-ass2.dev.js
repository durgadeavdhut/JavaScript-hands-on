"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vehicle =
/*#__PURE__*/
function () {
  function Vehicle(brand, model, type, color, price) {
    _classCallCheck(this, Vehicle);

    this.brand = brand;
    this.model = model;
    this.type = type;
    this.color = color;
    this.price = price;
  }

  _createClass(Vehicle, [{
    key: "showDetails",
    value: function showDetails() {
      console.log("Vehicle Details : Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Type: ").concat(this.type, ", Color: ").concat(this.color, ", Price: ").concat(this.price));
    }
  }]);

  return Vehicle;
}();

var vehicle1 = new Vehicle("Toyota", "Fortuner", "SUV", "White", "35 Lakhs");
var vehicle2 = new Vehicle("Mahindra", "XUV 700", "SUV", "Black", "20 Lakhs");
var vehicle3 = new Vehicle("Honda", "City", "Sedan", "Black", "14 Lakhs");
var vehicle4 = new Vehicle("Tata", "Harrier", "SUV", "Blue", "18 Lakhs");
var vehicle5 = new Vehicle("Royal Enfield", "Classic 350", "Bike", "Green", "2 Lakhs");
vehicle1.showDetails();
vehicle2.showDetails();
vehicle3.showDetails();
vehicle4.showDetails();
vehicle5.showDetails();
console.log("-----------------------------------------------------------------------------------------------------------------");

var College =
/*#__PURE__*/
function () {
  function College(name, city, university, rating) {
    _classCallCheck(this, College);

    this.name = name;
    this.city = city;
    this.university = university;
    this.rating = rating;
  }

  _createClass(College, [{
    key: "display",
    value: function display() {
      console.log("College Details : Name: ".concat(this.name, ", City: ").concat(this.city, ", University: ").concat(this.university, ", Rating: ").concat(this.rating));
    }
  }]);

  return College;
}();

var college1 = new College("Zeel", "Pune", "SPPU", "A+");
var college2 = new College("SPCOET", "Pune", "SPPU", "A+");
var college3 = new College("COEP", "Pune", "SPPU", "A+");
var college4 = new College("KJ", "Pune", "SPPU", "A+");
college1.display();
college2.display();
college3.display();
college4.display();