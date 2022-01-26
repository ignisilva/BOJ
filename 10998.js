// 문제
// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const nums = line.split(" ").map((value) => +value);
  console.log(nums[0] * nums[1]);
  rl.close();
}).on("close", function () {
  process.exit();
});
