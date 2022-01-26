// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const nums = line.split(" ").map((value) => +value);
  console.log(nums[0] + nums[1]);
  console.log(nums[0] - nums[1]);
  console.log(nums[0] * nums[1]);
  console.log(Math.floor(nums[0] / nums[1]));
  console.log(nums[0] % nums[1]);
  rl.close();
}).on("close", function () {
  process.exit();
});
