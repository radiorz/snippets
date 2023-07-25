const variables = [
  {
    name: "",
    title: "",
    default: "",
  },
];
// 通过拆分代码定义实现跨平台效果(当然其实解析body也是可以的,但解析往往不够完美)
const bodyGen = (variableInsert) => {
  return `#include<iostream>  
using namespace std;
int main() {
  ${variableInsert(variables)}
  return 0;
}
`;
};
const body = `
#include<iostream>  
using namespace std;
int main() {
  $1
  return 0;
}
`;
const description = "";

module.exports = {
  prefix: ["!main"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
