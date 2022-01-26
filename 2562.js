let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const list = input.map(v => Number(v));
const max = Math.max(...list);
const maxIndex = list.indexOf(max);

console.log(`${max}\n${maxIndex+1}`);
