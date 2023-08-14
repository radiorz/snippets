const body = `
std::clog << "$1"<< std::endl;
`;
const description = "";

module.exports = {
  prefix: ["clogm"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
