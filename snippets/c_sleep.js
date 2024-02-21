const body = `
#include <time.h>

void delay(unsigned int milliseconds) {
    clock_t start_time = clock(); // 获取当前时钟时间
    while (clock() < start_time + milliseconds); // 循环等待直到达到指定的时间
    return;
}
`;
const description =
  "这个是使用原生时间循环进行的delay,大部分时候应该使用线程的sleep方法可能会常用一些";

module.exports = {
  prefix: ["!sleep", "!delay"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};
