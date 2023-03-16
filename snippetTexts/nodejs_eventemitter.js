// nodejs
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

// 监听
eventEmitter.on("my_event", (...args) => {
  console.log("data received successfully.", ...args);
});
// 发送
eventEmitter.emit("my_event", "num1", "num2");
