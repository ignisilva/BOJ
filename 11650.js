let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const n = input[0];
const list = [];
for(let i=1; i<=n; i++) {
  list.push(input[i].split(' '));
}
list.sort((a, b) => {
  if(a[0] !== b[0]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
});
for(let i=0; i<list.length; i++) {
  result += list[i].join(' ') + '\n';
}
console.log(result);
