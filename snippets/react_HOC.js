const { origin: fileHeader } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `
${fileHeader}
import React from "react";
import PropTypes from "prop-types";

export default function \${1:${file_name}}(WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
    // \$2
    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {};

  return hocComponent;
};
`;
const description = "";

module.exports = {
  prefix: ["!hoc"],
  type: ["javascript","typescript",'javascriptreact','typescriptreact'],
  description: description || body,
  body: body.trim(),
};
