function countCharA(str) {
  let count = 0; 
  
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i); 
    if (ch === 'a' || ch === 'A') {
      count++;
    }
  }
  
  return count; 
}


const string1 = "I AM Learning JavaScript, The Language of internet";
const string2 = "My favourite movie is LAggAn";


console.log("===== Count Character =====");
console.log(`String 1: "${string1}"`);
console.log(`Count of 'a' or 'A':`, countCharA(string1));
console.log(`String 2: "${string2}"`);
console.log(`Count of 'a' or 'A':`, countCharA(string2));

