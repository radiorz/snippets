const body = `System.out.println("$1:"+$1);`;
const description = "";

module.exports = {
  prefix: ["print"],
  type: ["java"],
  description: description || body,
  body: body.trim(),
};
