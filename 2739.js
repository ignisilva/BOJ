let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputNum = Number(input[0]);

let result = '';

for(let i=1; i<10; i++) {
  result += `${inputNum} * ${i} = ${inputNum * i}\n`;
}

console.log(result);
