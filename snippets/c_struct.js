const body = `
struct $1 {
  char *nothing;
}
`;
const description = "";

module.exports = {
  prefix: ["!struct"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};
