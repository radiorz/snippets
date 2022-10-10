const body = `
const { Readable } = require("stream");

const readableStream = new Readable({
  // highWaterMark: 
  read: (size) => {},
});
// readableStream.push("test");
`;
const description = "";

module.exports = {
  prefix: ["!readable"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
