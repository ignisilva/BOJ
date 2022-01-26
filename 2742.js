let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';
const limit = Number(input[0]);

for(let i=limit; i>=1; i--) {
  result += String(i) + (i !== input[0] ? '\n' : "");
}

console.log(result);
