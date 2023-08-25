const body = `
class \${1:ClassName}{
public:
  \${1:ClassName}()
  {
  }
  ~\${1:ClassName}()
  {
  }
private:
  
};
`;
const description = "";

module.exports = {
  prefix: ["class", "!class"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
