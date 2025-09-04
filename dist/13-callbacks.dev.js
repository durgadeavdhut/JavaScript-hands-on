"use strict";

function homework(callbacks) {
  console.log("==== Jenny started home work =======");
  console.log("She was completely packed in home work for 3 hors ");
  console.log("Finally she have completed homework.....");
  callbacks();
}

var copyHomework = function copyHomework() {
  console.log("==== Elon is playing cricket.... ======");
  console.log("Elon got the call from Jenny to copy homework..");
  console.log("Elon came back and started copying homework...");
  console.log("He have copied it all....");
};

homework(copyHomework);
console.log("=================================="); // 1000ms = 1sec

setTimeout(function () {
  console.log("=== Hey Buddy =======");
}, 5000);
console.log("========== Callback Hell ==============");
setTimeout(function () {
  console.log("5000");
  setTimeout(function () {
    console.log("4000");
    setTimeout(function () {
      console.log("3000");
      setTimeout(function () {
        console.log("1000");
      }, 2000);
    }, 3000);
  }, 4000);
}, 5000);