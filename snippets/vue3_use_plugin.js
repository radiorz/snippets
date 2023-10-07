const body = `
app.use(\${1:plugin}, {})

`
const description = "";

module.exports = {
  prefix: ["!usePlugin"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
