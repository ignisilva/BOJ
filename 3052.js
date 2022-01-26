let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const set = new Set();

const list = input.map(v => Number(v));
for(value of list) {
  set.add(value%42);
}

console.log(set.size);
