let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const list = Array(26).fill(-1);

input[0].split('').forEach((v, i) => {
  if(list[v.charCodeAt()-97] === -1) {
    list[v.charCodeAt()-97] = i;
  }
})

console.log(list.join(' '));
