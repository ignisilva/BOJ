let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const splited = input[0].split(' ');

let result = 0;
if(splited.length !== 1 || splited[0] !== '') {
  result = splited.length;
} 

console.log(result);
