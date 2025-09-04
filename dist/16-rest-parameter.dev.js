"use strict";

function add(p1, p2) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  console.log(p1, p2, args);
} // add(10);


add(10, 20, 40);
add(90, 80, 70, 60, 40, 30);
console.log("==== Function with default parameter value========");

function division() {
  var n1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  console.log(n1, n2);
  console.log(n1 / n2);
}

division();
division(10, 20);
division(10, 40, 70);
division(10);