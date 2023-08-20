const body = `
# 编译与库相关参数
# compile and lib parameters
## 编译器
CC := g++
LD := g++
## 路径与名称
SRC_PATH = ./../src
EM_INCLUDE = ./../third_party/EM/include
RINGBUFFER_INCLUDE = ./../third_party/ringbuffer
EM_LIB = ./../third_party/EM/bin/linux64/releaseSO
BINARY_PATH ?= x64
OBJECT_PATH ?= $(BINARY_PATH)/\${1:demo}_tmp
### 库名称 命名规则:lib*so
TARGET  := lib\${1:demo}.so

## 
LIBS    := 
DEFINES :=
INCLUDE := -I.
CFLAGS  := -std=c++11 -pipe -fPIC -g -W -Wall -O2  -Wl,-Bsymbolic -Wpointer-arith -Wno-unused-parameter $(DEFINES) $(INCLUDE)
CXXFLAGS:= $(CFLAGS)
LDFLAGS :=
# LDFLAGS = LDFLAGS += -shared -L$(EM_LIB) -lrt -lpthread -lExtreme.Messaging
SHARE   := -fPIC -shared -o



# !!!下面非必须勿动
# !!!下面非必须勿动
# !!!下面非必须勿动

# 源文件
## 自动寻找符合条件的源文件
SOURCES := $(wildcard *.c) $(wildcard *.cpp)
OBJECTS := $(patsubst %.c,%.o,$(patsubst %.cpp,%.o,$(SOURCES)))
DEPENDS := $(addsuffix .d,$(OBJECTS))

.PHONY : everything objs clean cleanall rebuild

everything : $(TARGET)

all : $(TARGET)

clean :
	rm -fr *.o
    
cleanall : clean
	rm -fr $(TARGET)

objs : $(OBJECTS)

rebuild: cleanall everything
  
$(TARGET) : $(OBJECTS)
	$(CC) $(CXXFLAGS) $(SHARE) $@ $(OBJECTS) $(LDFLAGS) $(LIBS)

`;
const description = "用于生成动态链接库配置文件, ";
//windows dynamic link library
//linux  shared object
module.exports = {
  prefix: ["!so", "!shared"],
  type: ["makefile"],
  description: description || body,
  body: body.trim(),
};
