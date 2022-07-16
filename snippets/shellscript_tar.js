const body = `
tar -zcvf \${1:$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND}.tar.gz \${2:*} 
`;
const description = "";

module.exports = {
  prefix: ["!tar"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};
