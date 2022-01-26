let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';

for(let i=1; i<=input[0]; i++) {
  const [a, b] = input[i].split(' ');
  result += String(Number(a)+Number(b));
  result += i !== input[0] ? '\n' : '';
}

console.log(result);
