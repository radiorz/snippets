const body = `
#----------------------------------------------------------------
## 编译器
CC := gcc

## 编译参数
CFLAGS = -Wall -pthread -o

## 路径与名称
SRC_PATH = ./

## 名称
TARGET = \${1:demo}

## 源文件自动获取
SOURCES := $(wildcard *.c) $(wildcard *.cpp)
OBJECTS := $(patsubst %.c,%.o,$(patsubst %.cpp,%.o,$(SOURCES)))

#----------------------------------------------------------------

.PHONY: all clean objs cleanObjs rebuild
## 包括.o 和可执行文件
all : $(TARGET)
## 清除可执行文件和.o    
clean : cleanObjs
	rm $(TARGET) -fr
## 生成.o
objs : $(OBJECTS)
## 清除.o文件
cleanObjs:
	rm -fr *.o
## 重建
rebuild: clean all

$(TARGET) : $(OBJECTS)
	$(CC) $(CFLAGS) $(OBJECTS) $(SOURCES)
`;
const description = "";

module.exports = {
  prefix: ["!makefile"],
  type: ["makefile"],
  description: description || body,
  body: body.trim(),
};
