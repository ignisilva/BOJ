let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';

for(let i=1; i<=input[0]; i++) {
  const [a, b] = input[i].split(' ');
  const x = Number(a);
  const y = Number(b);
  result += `Case #${i}: ${x} + ${y} = ${x + y}`;
  result += i !== input[0] ? '\n' : '';
}

console.log(result);
