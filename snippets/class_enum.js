const body = `
class $1 {
  // Create new instances of the same class as static attributes
  static $2 = new $1("$2")
  static $3= new $1("$3")

  constructor(name) {
    this.name = name
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!enum"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
