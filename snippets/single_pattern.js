const body = `
  // 实例
  _instance = null;
  // 静态方法
  static getInstance(...args) {
    if (!this.instance) {
      this._instance = new \${1:TheClass}(...args);
    }
    return this._instance;
  }
`;
const description = "";

module.exports = {
  prefix: ["!single_pattern", "!single"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
