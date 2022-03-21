let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = "";
let [hour, min] = input[0].split(' ').map(Number);
const cookTime = Number(input[1]);

min += cookTime;

if(min >= 60) {
  hour += Math.floor(min/60);
  min = min%60;
}

if(hour >= 24) {
  hour = hour%24;
}

console.log(hour, min);
