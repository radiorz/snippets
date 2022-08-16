const body = `function getNow() {
  return dayjs().format("YYYY-MM-DD dddd HH:mm:ss");
}`;
const description = "";

module.exports = {
  prefix: ["gnow"],
  type: ["javascript","typescript"],
  description: description || body,
  body: body.trim(),
};
