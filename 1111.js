let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const n = input.shift();
input.sort((a,b) => Number(a.split(' ')[0]) - Number(b.split(' ')[0]));
for(let i=0; i<input.length; i++) {
  result += input[i] + '\n';
}
console.log(result);
