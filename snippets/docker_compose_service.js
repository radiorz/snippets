const body = `
  # ——————————————————————————————————————————————————————————
  $1:
    container_name: $1
    image: $2
    ports: 
      - "$3:$3"
`;
const description = "";

module.exports = {
  prefix: ["!service", "service"],
  type: ["yaml"],
  description: description || body,
  body: body,
};
