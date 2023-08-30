const body = `
try {

} catch (std::exception & e){
  $1
}

`;
const description = "";

module.exports = {
  prefix: ["tryCatch"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
