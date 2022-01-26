let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [[n, x], list] = input.map(value => value.split(' '));

let result = '';
const limit = Number(n);
const standard = Number(x);

for(let i=0; i<n; i++) {
  result += Number(list[i]) < standard ? `${list[i]} `:'';
}

console.log(result);
