let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const n = Number(input[0]);
const score = input[1].split(' ').map(v => Number(v));
const max = Math.max(...score);

const newScore = score.map(v => v/max*100);

console.log(newScore.reduce((l, r) => l+r)/n);
