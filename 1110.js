let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;
let inputNum = input[0] = input[0].length === 1 ? `0${input[0]}` : input[0];

do {
  const [front, rear] = inputNum.split('').map(v => Number(v));
  const sum = String(front + rear);
  inputNum = String(rear) + (sum.length === 2 ? sum[1]:sum[0]);

  count++;
} while(inputNum !== input[0]);

console.log(count);
