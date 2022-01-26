let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const map = new Map();
for(let i=0; i<10; i++) {
  map.set(String(i), 0);
}

let result = '';
const [a, b, c] = input.map(v => Number(v));
let list = (a * b * c).toString().split('');

for(key of list) {
  map.set(key, map.get(key)+1);
}

list = Array.from(map).map(v => v[1]);
for(value of list) {
  result += value + '\n';
}

console.log(result);
