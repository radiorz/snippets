const variables = [
  {
    name: "",
    title: '',
    default: "",
  },
];
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
