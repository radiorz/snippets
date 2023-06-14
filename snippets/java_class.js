const { origin: file_name } = require("./file_name");
const body = `
public class ${file_name}{
  public static void main(String[] args){
    System.out.println("${file_name}");
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!class"],
  type: ["java"],
  description: description || body,
  body: body.trim(),
};
