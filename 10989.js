let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const n = input[0];
let list = Array.from({length: 10000}, (v, i) => v = 0);
for(let i=1; i<=n; i++) {
  list[Number(input[i]) - 1] += 1;
}
for(let i=0; i<list.length; i++) {
  if(list[i] === 0) continue;
  result += (String((i+1))+'\n').repeat(list[i]);
}
console.log(result);
