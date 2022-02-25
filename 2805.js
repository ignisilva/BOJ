let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = 0;
const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...trees);

while(start <= end) {  
  const mid = end + start >> 1;
  let total = 0;
  for(tree of trees) {
    if(tree > mid) total += tree-mid;
  }
  if(total < m) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
