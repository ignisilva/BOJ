let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const converter = [2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9];

const result = input[0].split('').map(v => converter[v.charCodeAt()-65] + 1);

console.log(result.reduce((l, r) => l + r));
