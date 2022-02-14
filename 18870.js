let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const [n, numbers] = input;
const list = numbers.split(' ').map(v => Number(v));
const sorted = Array.from(new Set(list)).sort((a, b) => a - b);
const object = {};
sorted.forEach((v, i) => object[v] = i);
list.forEach((v) => result += object[v] + ' ');
console.log(result);
