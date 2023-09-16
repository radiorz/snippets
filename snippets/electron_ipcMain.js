const body = `
async function \${2: controller} (event, message){
  
}
ipcMain.handle("$1",\${2: controller})
`;
const description = "";

module.exports = {
  prefix: ["!ipcMain"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
