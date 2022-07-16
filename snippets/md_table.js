const body = `
|   |   |   |
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
  `;
const description = "";

module.exports = {
  prefix: ["!table"],
  type: ["markdown"],
  description: description || body,
  body: body.trim(),
};
