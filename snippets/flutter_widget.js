const { origin: file_header } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `
${file_header}
import 'package:flutter/material.dart';

class \${1:${file_name}} extends StatelessWidget {
  const \${1:${file_name}}({super.key});
  @override
  Widget build(BuildContext context) {
    return (const Text('\${1:${file_name}}'));
  }
}

`;
const description = "";

module.exports = {
  prefix: ["!fw", "!widget"],
  type: ["dart"],
  description: description || body,
  body: body.trim(),
};
