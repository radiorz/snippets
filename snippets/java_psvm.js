const body = `   
public static void main(String[] args) {
  //  System.out.println("Hello, World!");
}`;
const description = "";

module.exports = {
  disabled: true, // main 已经有了
  prefix: ["psvm"],
  type: ["java"],
  description: description || body,
  body: body.trim(),
};
