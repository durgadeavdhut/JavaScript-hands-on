function reverseStringIgnoreSpaces(str) {
  let result = ""; 
  
  
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str.charAt(i);
    if (ch !== ' ') {        
      result += ch;           
    }
  }
  
  return result; 
}
var s1 = "Hard work always pays back";
var s2 = "Soon I will be Angular IT Champ";


console.log("========== Reversed String ==========");
console.log(`String 1: "${s1}"`);
console.log(`Reversed String is :`, reverseStringIgnoreSpaces(s1));
console.log(`String 2: "${s2}"`);
console.log(`Reversed String is :`, reverseStringIgnoreSpaces(s2));


