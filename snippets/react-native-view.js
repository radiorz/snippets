const body = `import { View } from 'react-native';`;
const description = "引入view 做一些小事情经常会做";

module.exports = {
  prefix: ["!view"],
  type: ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};
