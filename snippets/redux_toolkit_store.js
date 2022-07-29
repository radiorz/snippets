const body = `
import { configureStore } from '@reduxjs/toolkit';

import \${2:name}Reducer from './\${2:name}Slice';


export const store = configureStore({
  reducer: {
    \${2:name}: \${2:name}Reducer,
  },
});

globalThis.$store = store;

`;
const description = "";

module.exports = {
  prefix: ["!reduxStore"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
