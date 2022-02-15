let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const n = input.shift();
input = input.map(v => Number(v)).sort((a,b) => a-b);
result += String(
    // Number(Math.round((input.reduce((l,r) => l+r, 0)/n) + "e+1") + "e-1")
    Number(Math.round(input.reduce((l,r) => l+r, 0)/n))
  ) + "\n";
result += String(input[Math.floor(n/2)]) + "\n";
const map = new Map();
for(let i=0; i<input.length; i++) {
  if(map.has(input[i])) {
    map.set(input[i], map.get(input[i]) + 1);
  } else {
    map.set(input[i], 1);
  }
}
const sorted = Array.from(map).sort((a, b) => {
  if(a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return b[1] - a[1];
  }
});
if(sorted.length > 1 && sorted[0][1] === sorted[1][1]) {
  result += String(sorted[1][0]) + "\n";
} else if(sorted.length > 1 && sorted[0][1] !== sorted[1][1]) {
  result += String(sorted[0][0]) + "\n";
} else if(sorted.length === 1) {
  result += String(sorted[0][0]) + "\n";
}
result += String(Math.max(...input) - Math.min(...input)) + "\n";
console.log(result);
