let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const [a, b] = input[0].split(' ').map(v => {
  let n = Number(v);
  n = Math.floor(n / 100) + 
    Math.floor((n % 100) / 10) * 10 +
    Math.floor(n % 10) * 100
  return n;
});

console.log(Math.max(a, b));
