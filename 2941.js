let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = 0;
const croatias = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];

let remain = input[0];

for(croatia of croatias) {
  for(;;) {
    remain = remain.replace(croatia, " ");
    if(remain.indexOf(croatia) === -1) break;
  }
}
result += remain.length;

console.log(result);
