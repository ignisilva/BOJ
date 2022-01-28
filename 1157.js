let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

const alphabets = Array(26).fill(0);

input[0].toUpperCase().split('').forEach(v => {
  index = v.charCodeAt()-65;
  alphabets[index]++;
});

const max = Math.max(...alphabets);

let result = '';
if(alphabets.filter(v => v === max).length > 1) {
  result = '?';
} else {
  result = String.fromCharCode(alphabets.indexOf(max)+65);
}

console.log(result);
