const { TYPES } = require("../src/common/consts/types");
const body = `
import {it, expect} from 'vitest'
it("$1",async ()=>{

})
`;
const description = "";

module.exports = {
  prefix: ["!vitest"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};
