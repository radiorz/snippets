const body = `
import React from 'react';
`;
const description = "";

module.exports = {
  prefix: ["ireact"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};
