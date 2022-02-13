let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const list = input[0].split('').map(v => Number(v));
console.log(list.sort((a,b) => b - a).join(''));
