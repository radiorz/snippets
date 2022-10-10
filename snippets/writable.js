const body = `
const { Writable } = require("stream");


const writableStream = new Writable({
  write(chunk, encoding, callback) {
    callback();
  },
});


`;
const description = "";

module.exports = {
  prefix: ["!writable"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
