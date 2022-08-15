const body = `
System.currentTimeMillis();
`
const description = "";

module.exports = {
  prefix: ["time"],
  type: ["java"],
  description: description || body,
  body: body.trim(),
};
