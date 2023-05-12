const body = `
  // 实例
  instance = null;
  // 静态方法
  static getInstance(...args) {
    if (!this.instance) {
      this.instance = new \${1:TheClass}(...args);
    }
    return this.instance;
  }
`;
const description = "";

module.exports = {
  prefix: ["!single_pattern", "!single"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
