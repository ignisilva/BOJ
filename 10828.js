let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n'); 

let result = '';
const n = input.shift();
const stack = [];

for(let i=0; i<n; i++) {
  const [command, value] = input[i].includes("push") ? input[i].split(' ') : [input[i], -1];
  switch(command) {
    case "push": 
      stack.push(value);
      break;
    case "pop":
      result += (stack.length === 0 ? "-1" : stack.pop()) + '\n';
      break;
    case "size":
      result += String(stack.length) + '\n';
      break;
    case "empty":
      result += (stack.length === 0 ? "1" : "0") + '\n';
      break;
    case "top":
      result += (stack.length === 0 ? "-1" : stack[stack.length-1]) + '\n';
      break;
  }
}

console.log(result);
