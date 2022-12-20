const body = `
import { createSlice } from "@reduxjs/toolkit";

/**
 * 初始state
 */
const initialState = {
  value,
};

export const \${1:name}Slice = createSlice({
  name: "\${1:name}",
  initialState,
  reducers: {
    setValue(state,{payload}) {
      
    }
  },
});
// Action creators are generated for each case reducer function
export const {
  setValue
} = \${1:name}Slice.actions;

export default \${1:name}Slice.reducer;
`;
const description = "";

module.exports = {
  prefix: ["!slice"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};
