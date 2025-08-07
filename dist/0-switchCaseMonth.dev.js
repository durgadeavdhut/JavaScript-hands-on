"use strict";

function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log("".concat(month, " - January"));
      break;

    case 2:
      console.log("".concat(month, " - February"));
      break;

    case 3:
      console.log("".concat(month, " - March"));
      break;

    case 4:
      console.log("".concat(month, " - April"));
      break;

    case 5:
      console.log("".concat(month, " - May"));
      break;

    case 6:
      console.log("".concat(month, " - June"));
      break;

    case 7:
      console.log("".concat(month, " - July"));
      break;

    case 8:
      console.log("".concat(month, " - August"));
      break;

    case 9:
      console.log("".concat(month, " - September"));
      break;

    case 10:
      console.log("".concat(month, " - Octomber"));
      break;

    case 11:
      console.log("".concat(month, " - November"));
      break;

    case 12:
      console.log("".concat(month, " - December"));
      break;

    default:
      console.log("".concat(month, " - Invalid Input"));
      break;
  }
}

monthOfYear(0);
monthOfYear(1);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(7);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);