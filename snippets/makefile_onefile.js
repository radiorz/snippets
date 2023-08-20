const body = `

#----------------------------------------------------------------
## 编译器
CC := gcc

## 编译参数
CFLAGS = -Wall -pthread -o

## 源文件
SOURCE = \${1:demo}.c
OBJECT = \${1:demo}

#----------------------------------------------------------------

.PHONY: all clean

all: $(SOURCE) $(OBJECT)
$(OBJECT): $(SOURCE)
  $(CC) $(CFLAGS) $(OBJECT) $(SOURCE)

clean:
  rm $(OBJECT) -f
`;
const description = "";

module.exports = {
  prefix: ["!one"],
  type: ["makefile"],
  description: description || body,
  body: body.trim(),
};
