const body = `
version:"3"
services:
  # ——————————————————————————————————————————————————————————
  $1:
    container_name: $1
    image: $2
    ports: 
      - "$3:$3"
`;
const description = "";

module.exports = {
  prefix: ["!compose"],
  type: ["yaml"],
  description: description || body,
  body: body.trim(),
};
