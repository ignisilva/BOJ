const selfNums = Array(10000).fill(true);

function d(n) {
  const digits = Math.floor(n / 1000) + 
    Math.floor((n % 1000) / 100) + 
    Math.floor((n % 100) / 10) + 
    (n % 10);
  return n + digits;
}

for(let i=1; i<=10000; i++) {
  selfNums[d(i)-1] = false;
}

let result = ''
for(let i=0; i<selfNums.length; i++) {
  result += selfNums[i] ? `${i+1}\n`:'';
}

console.log(result);
