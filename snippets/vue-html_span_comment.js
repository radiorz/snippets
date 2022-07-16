const body = `
<span style=\"color:red\"> $CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 [\${2} {{\${1}}}]</span>
`;

const description = "";

module.exports = {
  prefix: ["!span"],
  type: ["vue-html"],
  description: description || body,
  body: body.trim(),
};
