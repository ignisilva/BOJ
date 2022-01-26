let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = '';

const n = Number(input[0]);

for(let i=1; i<=n; i++) {
  const scores = input[i].split(' ').map(v => Number(v))
  scores.shift();
  const total = scores.reduce((l, r) => l + r);
  const num = scores.length;
  const average = total / num;
  const filtered = scores.filter(score => score > average);

  result += (filtered.length / scores.length * 100).toFixed(3) + "%\n";
}

console.log(result);
