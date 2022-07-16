const body = `
/**
 * @author $AUTHOR
 * @todo
 * 
 * @done
 * @example
`;
const description = "";
module.exports = {
  prefix: ["!fh"],
  type: ["javascript", "typescript", "java"],
  description: description || body,
  body: body.trim(),
};
