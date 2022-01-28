let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

function isHansu(eachNums) {
  if(eachNums.length < 3) {
    return true;
  }

  const diff1 = eachNums[2] - eachNums[1];
  const diff2 = eachNums[1] - eachNums[0];
  if(diff1 === diff2) {
    return true;
  }
  
  return false;
}

let result = 0;
const n = input[0]; 
for(let i=1; i<=n; i++) {
  if(i === 1000) break;
  const eachNums = i.toString().split('').map(v => Number(v));
  if(isHansu(eachNums)) {
    result++;
  }
}

console.log(result);
