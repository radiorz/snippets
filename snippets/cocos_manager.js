const { origin: fileName } = require("./file_name");

const body = `
import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("\${1:${fileName}}")
export class \${1:${fileName}} extends Component {
  start() {

  }

  update(deltaTime: number) {
    $2
  }
}

`;

const description = "";

module.exports = {
  prefix: ["!cc_manager"],
  type: ["typescript"],
  description: description || body,
  body: body.trim(),
};
