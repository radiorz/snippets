const body = `
class \${1:ClassName}{
private:
public:
  
};
`;
const description = "";

module.exports = {
  prefix: ["class"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
