const body = `
import {get} from 'lodash-es'
get(obj, path,defaultValue)
`;
const description = "";

module.exports = {
  prefix: ["lg", "ogpl"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};
