const body = `
function throttle(fn, delay=1000) {
  let prevTime = 0
  let timer
  return function(...args) {
    const now = Date.now()
    const remaining = delay - (now - prevTime);
    // 如果第二次执行超过delay了就立即执行
    // remaining > wait是为了处理修改了系统时间的情况
    // 比如把当前系统时间往过去调了十分钟，那么now其实是比prevTime小的
    // 那么remaning就可能是一个比较大的数了
    if (remaining > 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      fn.apply(this, args)
      prevTimer = now
    } else if (!timer) {
      // 这里就是为了处理1.5s停止触发的情况
      // 以1.5s为例，delay为1s，这个时候我们设置一个定时器
      // 让它在0.5s后执行
      // 这样在整个过程中，就是第0s, 第1s，第2s分别执行一次，共三次
      // 虽然我们是1.5s就停止触发了
      // 这样就保证了最后一次动作一直可以执行
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
        prevTime = Date.now()
      }, remaining)
    }
  }
}
`;
const description = "debounce 实现，虽然已经有 lodash 库 但是有时候不用 lodash";

module.exports = {
  prefix: ["throttle"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
