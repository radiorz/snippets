const body = `
import 'package:flutter/material.dart';

class \${1:MyWidget} extends StatelessWidget {
  const \${1:MyWidget}({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(child: Text(""));
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!statelesswidget"],
  type: ["dart"],
  description: description || body,
  body: body.trim(),
};
