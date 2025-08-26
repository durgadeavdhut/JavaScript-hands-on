"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var rollNumbers = new Set();
rollNumbers.add(11);
rollNumbers.add(22);
rollNumbers.add(33);
rollNumbers.add(44);
rollNumbers.add(55);
console.log(rollNumbers);
console.log("====== Total elements in the Set =======");
console.log("Total elements are: ".concat(rollNumbers.size));
console.log("====== Traversing Set =======");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = rollNumbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

console.log("====== Trying to add duplicate element =======");
console.log("=== Before Adding Set is =====");
console.log(rollNumbers);
console.log("=== After Adding Set is =====");
rollNumbers.add(33);
console.log(rollNumbers);
console.log("===== WAP to remove duplicate elements from an array =======");
var array = [2, 1, 4, 2, 1, 6, 8, 6];
var uniqueSet = new Set(array);
console.log(uniqueSet);
var arrayUnique = [];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = uniqueSet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _element = _step2.value;
    arrayUnique.push(_element);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log("=== After removing duplicates ===");
console.log(arrayUnique);
console.log("===== shortcut =========");

var arrayUniques = _toConsumableArray(new Set(array));

console.log(arrayUniques);