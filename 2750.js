let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const n = input[0];
let list = [];
for(let i=1; i<=n; i++) {
  list.push(Number(input[i]));
}
list.sort((a,b) => a - b);
for(let i=0; i<list.length; i++) {
  result += String(list[i]) + '\n';
}
console.log(result);
