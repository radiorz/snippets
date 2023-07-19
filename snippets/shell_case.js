const body = `
case $\${1:value} in
 $2) echo ""
 ;;
 $3) echo ""
 ;;
 *) echo ""
 ;;
esac
`;
const description = "";

module.exports = {
  prefix: ["!case"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};
