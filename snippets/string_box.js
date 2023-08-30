const body = `
+----------------------+----------------------+
|                      $1                     |
|                      $2                     |
+----------------------+----------------------+
`;
const description = "";

module.exports = {
  prefix: ["!box"],
  type: ["javascript", "typescript", "c"],
  description: description || body,
  body: body,
};
