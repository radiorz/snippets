const body = `
  "private": "true",
  "workspaces": {
    "nohoist": [
      "**"
    ]
  },
`;
const description = "";

module.exports = {
  prefix: ["!nohoist"],
  type: ["json"],
  description: description || body,
  body: body.trim(),
};
