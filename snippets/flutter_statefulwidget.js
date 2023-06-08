const body = `
import 'package:flutter/material.dart';

class \${1:MyWidget} extends StatefulWidget {
  const \${1:MyWidget}({super.key});

  @override
  State<\${1:MyWidget}> createState() => _\${1:MyWidget}State();
}

class _\${1:MyWidget}State extends State<\${1:MyWidget}> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}

`
const description = "";

module.exports = {
  prefix: ["!statefulwidget"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
