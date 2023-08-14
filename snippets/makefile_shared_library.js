const body = `
######################################
#
#
######################################
# 共享库名称 
## 命名规则:lib*so
TARGET  := lib\${1:demo}.so

# 编译与库相关参数
# compile and lib parameters
CC      := g++
LIBS    := 
LDFLAGS :=
DEFINES :=
INCLUDE := -I.
CFLAGS  := -std=c++11 -pipe -fPIC -O2 -W -Wall -Wl,-Bsymbolic -Wpointer-arith -Wno-unused-parameter -g $(DEFINES) $(INCLUDE)
CXXFLAGS:= $(CFLAGS) 
SHARE   := -fPIC -shared -o

# !!!下面非必须勿动
# !!!下面非必须勿动
# !!!下面非必须勿动

# 源文件
## 自动寻找符合条件的源文件
SOURCE  := $(wildcard *.c) $(wildcard *.cpp)
OBJS    := $(patsubst %.c,%.o,$(patsubst %.cpp,%.o,$(SOURCE)))

.PHONY : everything objs clean cleanall rebuild

everything : $(TARGET)
  
all : $(TARGET)
  
objs : $(OBJS)

rebuild: cleanall everything
                
clean :
	rm -fr *.o
    
cleanall : clean
	rm -fr $(TARGET)
  
$(TARGET) : $(OBJS)
	$(CC) $(CXXFLAGS) $(SHARE) $@ $(OBJS) $(LDFLAGS) $(LIBS)

`;
const description = "用于生成动态链接库配置文件, ";
//windows dynamic link library
//linux  shared object
module.exports = {
  prefix: ["!so",'!shared'],
  type: ["makefile"],
  description: description || body,
  body: body.trim(),
};
