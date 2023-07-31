const body = `
int now = new DateTime.now().millisecondsSinceEpoch;
`;
const description = "";

module.exports = {
  prefix: ["!now"],
  type: ["dart"],
  description: description || body,
  body: body.trim(),
};
