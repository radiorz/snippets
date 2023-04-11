const { origin: file_header } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `
${file_header}

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { createSlice } from "@reduxjs/toolkit";

// ****** init ******
const name = "\${2:${file_name}}"

// ****** initialState ******
const initialState = {
  value,
};
// ****** async ******

// ****** slice ******
export const \${1:${file_name}} = createSlice({
  name,
  initialState,
  reducers: {
    \${3:setValue}(state,{payload}) {
      
    }
  },
});

// ****** actions ******
export const {
  \${3:setValue}
} = \${1:${file_name}}.actions;

// ****** reducer persist ******
const persistedReducer = persistReducer(
  {
    key: [name],
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    // 黑名单 不缓存的
    // blacklist: ['page404'],
  },
  \${1:${file_name}}.reducer,
);
export default persistedReducer
`;
const description = "";

module.exports = {
  prefix: ["!persistSlice"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};
