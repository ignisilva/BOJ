let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = '';

const n = Number(input[0]);

for(let i=1; i<=n; i++) {
  const ox = input[i].split('');
  let count = 0;
  const score = [];
  for(value of ox) {
    count = value === "O" ? count + 1 : 0
    score.push(count);
  }
  result += `${score.reduce((l, r) => l+r)}\n`;
}

console.log(result);
