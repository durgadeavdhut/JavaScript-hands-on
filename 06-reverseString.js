// Function to reverse string ignoring spaces
function reverseStringIgnoreSpaces(str) {
  let result = ""; // To store reversed string without spaces
  
  // Loop from the end of the string to the start
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str.charAt(i); // Get character at position i
    if (ch !== ' ') {         // Skip spaces
      result += ch;           // Add non-space characters
    }
  }
  
  return result; // Return reversed string without spaces
}

// Test strings for Assignment 2
var s1 = "Hard work always pays back";
var s2 = "Soon I will be Angular IT Champ";

// Invoke function and log output
console.log("========== Reversed String ==========");
console.log(`String 1: "${s1}"`);
console.log(`Reversed String is :`, reverseStringIgnoreSpaces(s1));
console.log(`String 2: "${s2}"`);
console.log(`Reversed String is :`, reverseStringIgnoreSpaces(s2));


