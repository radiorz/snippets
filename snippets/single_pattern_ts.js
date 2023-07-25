const body = `
  private static _instance : \${1:TheClass} | null  = null;
  static getInstance(...args):\${1:TheClass} {
    if (!this._instance) {
      this.instance = new \${1:TheClass}(...args);
    }
    return this._instance;
  }
`;
const description = "";

module.exports = {
  prefix: ["!single_pattern", "!single"],
  type: ["typescript"],
  description: description || body,
  body: body.trim(),
};
