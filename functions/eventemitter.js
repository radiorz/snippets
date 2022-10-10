const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("my_event", (...args) => {
  console.log("data received successfully.", ...args);
});
eventEmitter.emit("my_event", "num1", "num2");
function typeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
console.log(`(typeOF(eventEmitter))`, typeOf(eventEmitter));
console.log(
  `eventEmitter instanceOf EventEmitter`,
  eventEmitter instanceof EventEmitter
);
