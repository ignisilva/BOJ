let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = "";
const n = Number(input[0]);
const stack = [];

for(let i=1; i<input.length; i++) {

  stack.length = 0;
  
  input[i].split('').map(v => {
    if(stack.length === 0) {
      stack.push(v); 
    } else if(stack[stack.length-1] === '(' && v === ')') {
      stack.pop();
    } else {
      stack.push(v);
    }
  });

  if(stack.length === 0) {
    result += "YES";
  } else {
    result += "NO";
  }
  result += '\n';
}

console.log(result);
