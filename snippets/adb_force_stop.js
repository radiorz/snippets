const body = `
adb shell am force-stop com.\${packageName}
`;
const description = "终止某个应用";

module.exports = {
  prefix: ["astop"],
  type: ["shellscript", "powershell"],
  description: description || body,
  body: body.trim(),
};
