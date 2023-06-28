const body = `

class \${1:MyWidget} extends StatelessWidget {
  const \${1:MyWidget}({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
`;
const description = "";

module.exports = {
  prefix: ["statelesswidget","!stateful"],
  type: ["dart"],
  description: description || body,
  body: body.trim(),
};
