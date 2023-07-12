const body = `
const fs = require('fs');
const path = "\$1";
const str = "\$2";
const writeStream = fs.createWriteStream(path);
writeStream.write(str);
`;
const description = "";

module.exports = {
  prefix: ["!fswrite"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
