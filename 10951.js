let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for(let i=0; i<input.length; i++) {
  const [a, b] = input[i].split(' ').map(v => Number(v));
  result += String(a + b) + '\n';
}

console.log(result);
