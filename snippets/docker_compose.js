const body = `
version:"3"
services:
  # ——————————————————————————————————————————————————————————
  \${1:containerName}:
    container_name: \${1:containerName}
    image: $2
    ports: 
      - "$3:$3"
`;
const description = "";

module.exports = {
  prefix: ["compose", "!compose"],
  type: ["yaml"],
  description: description || body,
  body: body.trim(),
};
