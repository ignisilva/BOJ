let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';
const n = input[0];
const stack = [];

for(let i=1; i<=n; i++) {
  const value = Number(input[i]);
  if(value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

if(stack.length === 0) {
  result = '0';
} else {
  result = String(stack.reduce((l, r) => l + r));
}

console.log(result);
