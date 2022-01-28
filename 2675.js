let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const n = input[0];
let result = '';
for(let i=1; i<=n; i++) {
  const [repeatNum, originStr] = input[i].split(' ');
  result += originStr.split('').map(v => v.repeat(repeatNum)).join('') + '\n';
}

console.log(result);
