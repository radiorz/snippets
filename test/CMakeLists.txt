# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)
# 添加库的源文件
add_library(hello SHARED ${CMAKE_CURRENT_SOURCE_DIR}/hello.cpp)
# 头文件
target_include_directories(hello PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
# 设置安装路径
install(TARGETS hello DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/lib)
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/hello.h DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/include)
