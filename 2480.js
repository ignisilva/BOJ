let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const numbers = input[0].split(' ').map(v => Number(v));
const map = new Map();
numbers.forEach((v) => {
  if(map.has(v)) {
    map.set(v, map.get(v) + 1);
  } else { 
    map.set(v, 1); 
  }
});
const sorted = Array.from(map);
if(numbers.length === sorted.length) {
  result += String(Math.max(...numbers) * 100);
} else {
  for(let i=0; i<sorted.length; i++) {
    const [number, count] = sorted[i];
    if(count === 3) {
      result += String(10000 + 1000*number);
      break;
    } else if(count === 2) {
      result += String(1000 + 100*number);
      break;
    }
  }
}
console.log(result);
