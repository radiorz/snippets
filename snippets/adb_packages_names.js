const body = `
adb shell pm list packages 
`;
const description = "adb 查看包名";

module.exports = {
  prefix: ["apacakges"],
  type: ["shell","powershell"],
  description: description || body,
  body: body.trim(),
};
