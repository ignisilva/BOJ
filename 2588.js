// 여러줄 입력에 대한 정리

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(+input[0] * +input[1][2]);
  console.log(+input[0] * +input[1][1]);
  console.log(+input[0] * +input[1][0]);
  console.log(+input[0] * +input[1]);
  process.exit();
});
