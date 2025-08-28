"use strict";

function Player(fullName, age, city) {
  this.fullName = fullName;
  this.age = age;
  this.city = city;
}

var playerVirat = new Player("Virat Kohli", 34, "Delhi");
console.log(playerVirat);
var playerRohit = new Player("Rohit Sharma", 35, "Mumbai");
console.log(playerRohit);
var playerDhoni = new Player("MS Dhoni", 43, "Chennai");
console.log(playerDhoni);
Player.prototype.country = "India";
console.log("Dhoni's country : ".concat(playerDhoni.country));
console.log("Rohit's country : ".concat(playerRohit.country));
console.log("Virat's country : ".concat(playerVirat.country));
var array = [10, 20, 30, 40];
array.push(50);