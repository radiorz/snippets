const body = `
#include <stdio.h>

int main(int argc, char **argv)
{ 
  $1
  return 0;
}

`;
const description = "";

module.exports = {
  prefix: ["!main"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};
