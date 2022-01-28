let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

console.log(input[1].split('').map(v => Number(v)).reduce((l, r) => l+r));
