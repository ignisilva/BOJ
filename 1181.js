let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

let result = "";
const n = input.shift();
const list = Array.from(new Set(input));
list.sort((a, b) => {
  if(a.length === b.length) {
    return a < b ? -1 : 1
  } else {
    return a.length - b.length;
  }
});
for(let i=0; i<list.length; i++) {
  result += list[i] + '\n';
}
console.log(result);
