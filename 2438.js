let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';
const limit = Number(input[0]);

for(let i=1; i<=limit; i++) {
  result += '*'.repeat(i);
  result += i !== input[0] ? '\n' : '';
}

console.log(result);
