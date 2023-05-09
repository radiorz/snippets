const body = `
  instance : null | \${1:TheClass}  = null;
  getInstance():\${1:TheClass} {
    if (!this.instance) {
      this.instance = new \${1:TheClass}();
    }
    return this.instance;
  }
`;
const description = "";

module.exports = {
  prefix: ["!single_pattern", "!single"],
  type: ["typescript"],
  description: description || body,
  body: body.trim(),
};
