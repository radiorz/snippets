const body = `
const debounce = (fn, delay, immediate)=> {
  let timer
  let result
  return function(...args) {
    if (timer) clearTimeout(timer)

    if (immediate) {
      // 如果timer存在，说明第二次调用的时候还没到delay时间，因为如果超过delay时间
      // timer会被赋值为null，所以这个时候我们不应该执行fn，应该重新设置一个定时器
      // 但如果是一次的时候，因为还没有设过定时器，所以这里timer会是undefined
      if (timer) {
        timer = setTimeout(() => timer = null, delay)
      } else {
        result = fn.apply(this, args)
        return result
      }
    } else {
      timer = setTimeout(() => fn.apply(this, args), delay)
    }
  }
}

`;
const description = "";

module.exports = {
  prefix: ["debounce"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
