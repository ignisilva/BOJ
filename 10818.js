let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const list = input[1].split(' ').map(v => Number(v));

console.log(`${Math.min(...list)} ${Math.max(...list)}`);
