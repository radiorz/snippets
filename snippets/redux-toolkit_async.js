const body = `
export const \${1:getSomething}Async = createAsyncThunk('\${2:name}/\${1:getSomething}Async',async(payload, {getState}={})=>{
  return 
})
`;
const description = "";

module.exports = {
  prefix: ["!rtkAsync"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
