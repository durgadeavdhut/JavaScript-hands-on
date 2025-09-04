"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var jsonpar = "{\n\"name\":\"Aleix Melon\",\n\"id\":\"E00245\",\n\"role\":[\"Dev\", \"DBA\"],\n\"age\":23,\n\"doj\":\"11-12-2019\",\n\"married\":false,\n\"address\":{\n    \"street\":\"32, Laham St.\",\n    \"city\":\"Innsbruck\",\n    \"country\":\"Austria\"},\n    \"referred-by\":\"E0012\"\n    }";
var jsonobj = JSON.parse(jsonpar);
console.log(_typeof(jsonobj));
console.table(jsonobj);
console.log("log Dev :", jsonobj.role[0]);
console.log("log Last Name:", jsonobj.name.split(" ")[1]);
console.log("log joining year:", jsonobj.doj.split("-")[2]);