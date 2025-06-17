|序号|快捷键|支持语言|更多介绍|
|--|--|--|--|
| 0|["!capitalize"]|"javascript" |"function capitalize(str) {\r\n  const [first, ...rest] = str;\r\n  if (!first) return \"\";\r\n  return first.toUpperCase() + rest.join(\"\").toLowerCase();\r\n}\r\n"|
| 1|["!checkObjectValueEqualKey"]|"javascript" |"function checkObjectValueEqualKey(obj, value) {\r\n  const [key] = Array.prototype.find.call(\r\n    Object.entries(obj),\r\n    ([key, _value]) => {\r\n      if (_value === value) {\r\n        return true;\r\n      } else {\r\n        return false;\r\n      }\r\n    }\r\n  );\r\n  return key;\r\n}\r\n// 这个可能重复\r\n"|
| 2|["!compose"]|"javascript" |"// 函数组合\nconst compose =\n  (...fns) =>\n  (arg) =>\n    fns.reduceRight((acc, fn) => fn(acc), arg);\n"|
| 3|["!function"]|"shellscript" |"# 函数\r\ndemoFun() {\r\n  echo \"我是一个函数\"\r\n}\r\n# 执行\r\ndemoFun\r\n"|
| 4|["!getArrayKeyMap"]|"javascript" |"/**\r\n * 将对象数组转化为以某个值为key的对象\r\n * 基础函数\r\n * @param {Array<Object>} array 数组\r\n * @param {string} key key值\r\n * @returns\r\n */\r\nexport function getArrayKeyMap(array = [], key = \"name\") {\r\n  const pinNameMap = {};\r\n  array.forEach((item = {}) => {\r\n    if (!item[key]) return;\r\n    pinNameMap[item[key]] = item;\r\n  });\r\n  return pinNameMap;\r\n}\r\n"|
| 5|["!head"]|"javascript" |"#!/usr/bin/env node\n"|
| 6|["!head"]|"shellscript" |"#!/bin/sh\n"|
| 7|["!helloworld"]|"c" |"#include <stdio.h>\r\n\r\nint main()\r\n{\r\n  /* 我的第一个 C 程序 */\r\n  printf(\"Hello, World! \\n\");\r\n\r\n  return 0;\r\n}\r\n"|
| 8|["!helloworld"]|"javascript" |"console.log(\"hello world\");\r\n"|
| 9|["!isEven"]|"javascript" |"/**\n * @method 是奇数\n * @param {}\n * @returns {}\n * @desc\n * @example\n */\nfunction isOdd(value) {\n  return !(value & 1);\n}\n"|
| 10|["!isNewerVersion"]|"javascript" |"/**\r\n * 判断版本新旧\r\n * @param {string} newVersion\r\n * @param {string} oldVersion\r\n * @returns {boolean}\r\n */\r\nfunction isNewerVersion(newVersion = \"\", oldVersion = \"\") {\r\n  // console.log(`version,oldVersion`, version, oldVersion);\r\n  const [oldF, oldS, oldPatch] = oldVersion\r\n    .split(\".\")\r\n    .map((v) => parseInt(v, 10));\r\n  const [newF, newS, newPatch] = newVersion\r\n    .split(\".\")\r\n    .map((v) => parseInt(v, 10));\r\n  if (newF > oldF) return true;\r\n  if (newF == oldF && newS > oldS) return true;\r\n  if (newF == oldF && newS == oldS && newPatch > oldPatch) return true;\r\n  return false;\r\n}\r\n"|
| 11|["!isOdd"]|"javascript" |"/**\n * @method 是奇数\n * @param {}\n * @returns {}\n * @desc\n * @example\n */\nfunction isOdd(value) {\n  return !(value & 0);\n}\n"|
| 12|["!log_split"]|"shellscript" |"echo \"---------------------------------------------------------------------\"\r\n"|
| 13|["!logger"]|"javascript" |"const logger = {\r\n  warn: (...args) => console.warn(\"[WARN]\", ...args),\r\n  debug: (...args) => console.debug(\"[DEBUG]\", ...args),\r\n  error: (...args) => console.error(\"[ERROR]\", ...args),\r\n  info: (...args) => console.info(\"[INFO]\", ...args),\r\n};\r\n"|
| 14|["!nodejs_eventemitter"]|"javascript" |"// nodejs\r\nconst { EventEmitter } = require(\"events\");\r\nconst eventEmitter = new EventEmitter();\r\n\r\n// 监听\r\neventEmitter.on(\"my_event\", (...args) => {\r\n  console.log(\"data received successfully.\", ...args);\r\n});\r\n// 发送\r\neventEmitter.emit(\"my_event\", \"num1\", \"num2\");\r\n"|
| 15|["!packageDescription"]|"shellscript" |"description=$(node -p \"require(\"./package.json\").description\")\r\n"|
| 16|["!packageVersion"]|"shellscript" |"version=$(node -p \"require(\"./package.json\").version\")\r\n"|
| 17|["!random"]|"javascript" |"const randomStr = () => Math.random().toString(20).slice(2);\n"|
| 18|["!react_withPersistentData"]|"javascript" |"import React, { Component } from \"react\";\r\nexport default function withPersistentData(WrappedComponent) {\r\n  return class extends Component {\r\n    componentWillMount() {\r\n      let data = localStorage.getItem(\"data\");\r\n      this.setState({ data });\r\n    }\r\n\r\n    render() {\r\n      // 通过{...this.props} 把传递给当前组件的属性继续传递给被包装的组件WrappedComponent\r\n      return <WrappedComponent data={this.state.data} {...this.props} />;\r\n    }\r\n  };\r\n}\r\n"|
| 19|["!react_withTiming"]|"javascript" |"import React, { Component } from \"react\";\r\nfunction withTiming(WrappedComponent) {\r\n  return class extends WrappedComponent {\r\n    constructor(props) {\r\n      super(props);\r\n      this.start = 0;\r\n      this.end = 0;\r\n    }\r\n    componentWillMount() {\r\n      super.componentWillMount && super.componentWillMount();\r\n      this.start = Date.now();\r\n    }\r\n    componentDidMount() {\r\n      super.componentDidMount && super.componentDidMount();\r\n      this.end = Date.now();\r\n      console.log(\r\n        `${WrappedComponent.name} 组件渲染时间为 ${this.end - this.start} ms`\r\n      );\r\n    }\r\n    render() {\r\n      return super.render();\r\n    }\r\n  };\r\n}\r\n\r\nexport default withTiming;\r\n"|
| 20|["!rgbToHex"]|"javascript" |"const rgbToHex = (r, g, b) =>\n  \"#\" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n"|
| 21|["!switchTwoValue"]|"javascript" |"/**\n * 切换两个值\n */\nfunction switchTwoValue(a, b) {\n  [a, b] = [b, a];\n}\n"|
| 22|["!to_singleton"]|"javascript" |"export default function ToSingleton(Builder) {\n  let instance;\n  // 代理函数仅作管控单例\n  return function (...args) {\n    if (!instance) {\n      instance = new Builder(...args);\n    }\n    return instance;\n  };\n}\n"|
| 23|["!uniqueArray"]|"javascript" |"/**\n * 数组去重\n * @param {Array} arr\n */\nfunction uniqueArray(arr = []) {\n  return Array.from(new Set(arr));\n}\n"|
| 24|["!useFocusEffect"]|"javascript" |"useFocusEffect(\n  useCallback(() => {\n    //\n    return () => {\n      //\n    };\n  }, [])\n);\n"|
| 25|["astop"]|["shellscript","powershell"] |"终止某个应用"|
| 26|["apacakges"]|["shellscript","powershell"] |"adb 查看包名"|
| 27|["aer","item_remove_from_array_end_mutable"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nconst ${2:last} = ${1:arr}.pop()\n"|
| 28|["afri","!rest","item_remove_from_array_first_immutable"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nconst [first,...${2:rest}] = ${1:arr}\n"|
| 29|["afr","item_remove_from_array_first_mutable"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nconst ${2:first} = ${1:arr}.shift()\n"|
| 30|["ari","item_remove_from_array_immutable"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n  ${1:arr} = ${1:arr}.filter((item)=>${2:item.id === id})\n"|
| 31|["arm","item_remove_from_array_mutable"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n  const index = ${1:arr}.findIndex((item)=>{item.${2:id}===${2:id}})\n  if(index > -1){\n    ${1:arr}.splice(index, 1)\n  }\n"|
| 32|["!ten"]|["javascript","typescript"] |"\n  [...new Array(10).keys()].map((i) => i + 1)\n"|
| 33|["afn"]|["javascript","typescript","vue","javascriptreact","typescriptreact"] |"箭头函数"|
| 34|["anfn"]|["javascript","typescript","vue"] |"箭头函数"|
| 35|["!axios"]|["javascript"] |"axios 实例"|
| 36|["!bash","#"]|["shellscript"] |"\n#!/bin/bash\n"|
| 37|["!node","#"]|["javascript"] |"\n#!/usr/bin/env node\n"|
| 38|["!zx","#zx"]|["javascript"] |"\n#!/usr/bin/env zx \nawait $``\n"|
| 39|["!main"]|["c"] |"\n#include <stdio.h>\n\nint main(int argc, char **argv)\n{ \n  $1\n  return 0;\n}\n\n"|
| 40|["printf"]|["c"] |"\nprintf(\"$1 %${2:d}\\n\",$1);\n"|
| 41|["!struct"]|["c"] |"\nstruct $1 {\n  char *nothing;\n}\n"|
| 42|["!wait","!delay"]|["c"] |"这个是使用原生时间循环进行的delay,大部分时候应该使用线程的sleep方法可能会常用一些"|
| 43|["Capitalize"]|["javascript"] |"\nfunction capitalize(str){\n  const [first,...rest] = str\n  if(!first) return ''\n  return first.toUpperCase()+ rest.join('').toLowerCase()\n}\n"|
| 44|["!enum"]|["javascript"] |"\nclass $1 {\n  // Create new instances of the same class as static attributes\n  static $2 = new $1(\"$2\")\n  static $3= new $1(\"$3\")\n\n  constructor(name) {\n    this.name = name\n  }\n}\n"|
| 45|["!class"]|["javascript","typescript"] |"\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\nexport default class ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}} {\n  constructor(options) {\n    ${3:Object.assign(this, options)};\n  }\n}\n"|
| 46|["exe"]|["javascript","typescript","javascriptreact","typescriptreact"] |"使用 nodejs 执行exe文件"|
| 47|["exec"]|["javascript","typescript","javascriptreact","typescriptreact"] |"使用 nodejs 执行某个命令"|
| 48|["spawnexe"]|["javascript","typescript","javascriptreact","typescriptreact"] |"使用 nodejs spawn 执行命令"|
| 49|["csl","logg"]|["javascript","typescript","javascriptreact","typescriptreact"] |"console.log(*)"|
| 50|["constructor","!constructor"]|["javascript"] |"\n  constructor(){}\n"|
| 51|["class"]|["cpp"] |"\nclass ${1:ClassName}{\nprivate:\npublic:\n  \n};\n"|
| 52|["clog","log","csl"]|["cpp"] |"\nstd::clog << \"$1 \"<< ${1:0} << std::endl;\n"|
| 53|["!include","#include"]|["cpp","c"] |"\n#include <$1>\n"|
| 54|["!main"]|["cpp"] |"\n#include <iostream>\n\nusing namespace std;\nint main()\n{\n  $1\n  return 0;\n}\n\n"|
| 55|["!namespace"]|["cpp"] |"\nnamespace ${1:demo} {\n\n} // namespace $1\n"|
| 56|["!wait"]|["cpp"] |"\nvoid wait(int milliseconds = 50){\n    std::this_thread::sleep_for(std::chrono::milliseconds(milliseconds));\n}\n"|
| 57|["!now"]|["dart"] |"\nint now = new DateTime.now().millisecondsSinceEpoch;\n"|
| 58|["csl","!print","pr"]|["dart"] |"\nprint(\"$1 ${$1}\");\n"|
| 59|["!tv"]|["javascript","typescript","java","vue"] |"今天日期"|
| 60|["debounce"]|["javascript"] |"\nconst debounce = (fn, delay, immediate)=> {\n  let timer\n  let result\n  return function(...args) {\n    if (timer) clearTimeout(timer)\n\n    if (immediate) {\n      // 如果timer存在，说明第二次调用的时候还没到delay时间，因为如果超过delay时间\n      // timer会被赋值为null，所以这个时候我们不应该执行fn，应该重新设置一个定时器\n      // 但如果是一次的时候，因为还没有设过定时器，所以这里timer会是undefined\n      if (timer) {\n        timer = setTimeout(() => timer = null, delay)\n      } else {\n        result = fn.apply(this, args)\n        return result\n      }\n    } else {\n      timer = setTimeout(() => fn.apply(this, args), delay)\n    }\n  }\n}\n\n"|
| 61|["```","!log"]|["javascript","typescript"] |"\n`$1`,$1\n"|
| 62|["wait","!wait","delay"]|["javascript"] |"\nconst timeout = ${1:1000}\nawait new Promise((resolve) => setTimeout(resolve, timeout))\n"|
| 63|["service","!service"]|["yaml"] |"\n  # ——————————————————————————————————————————————————————————\n  $1:\n    container_name: $1\n    image: $2\n    ports: \n      - \"$3:$3\"\n"|
| 64|["compose","!compose"]|["yaml"] |"\nversion:\"3\"\nservices:\n  # ——————————————————————————————————————————————————————————\n  ${1:containerName}:\n    container_name: ${1:containerName}\n    image: $2\n    ports: \n      - \"$3:$3\"\n"|
| 65|["!dirname"]|["javascript","typescript","javascriptreact","typescriptreact"] |"import { fileURLToPath } from 'url';\nimport { dirname } from 'path';\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = dirname(__filename);"|
| 66|["!filename"]|["javascript","typescript","javascriptreact","typescriptreact"] |"import { fileURLToPath } from 'url';\nimport { dirname } from 'path';\nconst __filename = fileURLToPath(import.meta.url);"|
| 67|["expect","//-"]|["javascript"] |"\n// -> $1\n"|
| 68|["tomp4"]|["javascript"] |"\n  ffmpeg -acodec aac -filter_complex amix=inputs=2:duration=longest -vcodec copy -movflags faststart+frag_keyframe+separate_moof+omit_tfhd_offset+empty_moov\n"|
| 69|["!fh"]|["javascript","typescript","java"] |"\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n"|
| 70|["!file_name_camel"]|["javascript","typescript","javascriptreact","typescriptreact"] |"${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}"|
| 71|["!file_name"]|["javascript","typescript","javascriptreact","typescriptreact"] |"${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}"|
| 72|["statefulwidget","!stateless"]|["dart"] |"\n\nclass ${1:MyWidget} extends StatefulWidget {\n  const ${1:MyWidget}({super.key});\n\n  @override\n  State<${1:MyWidget}> createState() => _${1:MyWidget}State();\n}\n\nclass _${1:MyWidget}State extends State<${1:MyWidget}> {\n  @override\n  Widget build(BuildContext context) {\n    return Container();\n  }\n}\n\n"|
| 73|["statelesswidget","!stateful"]|["dart"] |"\n\nclass ${1:MyWidget} extends StatelessWidget {\n  const ${1:MyWidget}({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return Container();\n  }\n}\n"|
| 74|["!fw","!widget"]|["dart"] |"\n\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\nimport 'package:flutter/material.dart';\n\nclass ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}} extends StatelessWidget {\n  const ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return (const Text('${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}'));\n  }\n}\n\n"|
| 75|["!for"]|["javascript","typescript","c","cpp"] |"\nfor(;;){\n  $1\n}\n"|
| 76|["!fswrite"]|["javascript"] |"\nconst fs = require('fs');\nconst path = \"$1\";\nconst str = \"$2\";\nconst writeStream = fs.createWriteStream(path);\nwriteStream.write(str);\n"|
| 77|["gnow"]|["javascript","typescript"] |"function getNow() {\n  return dayjs().format(\"YYYY-MM-DD dddd HH:mm:ss\");\n}"|
| 78|["!date"]|["go"] |"\nDateTime   = \"2006-01-02 15:04:05\"\nDateOnly   = \"2006-01-02\"\nTimeOnly   = \"15:04:05\"\n"|
| 79|["!ifndef"]|["c","cpp"] |"\n#ifndef __${1:HELLO_H}__\n#define __${1:HELLO_H}__\n\n$2\n\n#endif\n"|
| 80|["!handlerLifeCycle"]|["javascript","typescript"] |"\n  // ****** parsing 获取并转换成handler所需字段 ******\n  // ****** verify 排除不允许等错误 ******\n  // ****** handle 处理逻辑并生成result ******\n  // ****** result 结果的进一步处理,加密等 ******\n  "|
| 81|["rrr"]|["vue-html","html"] |"<pre style=\"color:red\"> {{${1:`注意了`}}} </pre>"|
| 82|["!span"]|["vue-html","html"] |"\n<span style=\"color:red\"> $CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 [${2} {{${1}}}]</span>\n"|
| 83|["!async","ifa","iifea"]|["javascript"] |"\n(${2:async} () => {\n  $1\n})();\n"|
| 84|["!if","if","iif"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n(() => {\n  $1\n})();\n"|
| 85|["!import"]|["javascript"] |"\nimport $1 from '$1'\n"|
| 86|["!class"]|["java"] |"\npublic class ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}{\n  public static void main(String[] args){\n    System.out.println(\"${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\");\n  }\n}\n"|
| 87|["csl","system","logg","sop"]|["java"] |"System.out.println(\"$1\" + \" \" + $1);"|
| 88|["print"]|["java"] |"System.out.println(\"$1:\"+$1);"|
| 89|["time"]|["java"] |"\nSystem.currentTimeMillis();\n"|
| 90|["!","!line","ll"]|["json","jsonc"] |"\n\"$1\": \"$2\",\n"|
| 91|["!{","kk"]|["jsonc","json"] |"{\"$1\":\"$2\"},"|
| 92|["!debug"]|["javascript","typescript"] |"\nlogger.debug(`$1`,$1);\n"|
| 93|["!table"]|["markdown"] |"\n|   |   |   |\n|---|---|---|\n|   |   |   |\n|   |   |   |\n|   |   |   |\n|   |   |   |\n|   |   |   |\n  "|
| 94|["!mh","!funh"]|["javascript","typescript","java"] |"\n/**\n * @method $1\n * @param {} \n * @returns {}\n * @desc $2\n * @example\n */\n"|
| 95|["!mobxclass"]|["javascript"] |"\nimport { action, observable } from 'mobx';\n\nclass Store {\n    @observable\n    count = 1;\n    \n    @action\n    setCount = () => {\n        this.count++;\n    }\n}\nexport const store = new Store();\n\n"|
| 96|["!mobx"]|["javascript"] |"\nimport {observable, action} from 'mobx';\nconst store = observable(\n  {\n    value: 0,\n    setValue(value) {\n      this.value = value;\n    },\n  },\n  {\n    setValue:action\n  }\n);\n\nexport default store;\n\n"|
| 97|["!nohoist"]|["json"] |"\n  \"private\": \"true\",\n  \"workspaces\": {\n    \"nohoist\": [\n      \"**\"\n    ]\n  },\n"|
| 98|["now"]|["javascript","typescript","java","vue"] |"当前时间"|
| 99|["oef"]|["javascript","typescript","javascriptreact","typescriptreact"] |"Object.entries(options).forEach(([key,value])=>{\n$1\n}"|
| 100|["lg","ogpl"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nimport {get} from 'lodash-es'\nget(obj, path,defaultValue)\n"|
| 101|["mergeRight"]|["javascript"] |"\n  function mergeRight(obj, theOtherObj){\n    return \n  }\n"|
| 102|["ls","ospl"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nimport {set} from 'lodash-es'\nset(obj, path, value)\n"|
| 103|["//","ccc"]|["javascript","typescript","java"] |"/** ******  ****** */"|
| 104|["///"]|["javascript","typescript","java"] |"\n${LINE_COMMENT} ****** $1 ******\n"|
| 105|["!pinia"]|["javascript","typescript"] |"\n\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\nimport { defineStore } from 'pinia'\n\nconst use${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}Store = defineStore('${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}',{\n  state:()=>({\n    value: 0\n  }),\n  // getters:{},\n  actions: {\n    setValue(){\n    \n    }\n  }\n})\nexport default use${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}Store\n"|
| 106|["ss"]|["powershell"] |"过滤字符串"|
| 107|["!promise"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nnew Promise((resolve,reject)=>{\n  $1\n})\n"|
| 108|["color"]|["javascript","typescript"] |"\nconst color = `#${(~~(Math.random() * (1 << 24))).toString(16)}`\n"|
| 109|["!react_memo_component","!rmc"]|["javascript","javascriptreact"] |"memo component"|
| 110|["!react"]|["javascript","javascriptreact","typescriptreact","typescript"] |"react 函数组件"|
| 111|["!hoc"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\nimport React from \"react\";\nimport PropTypes from \"prop-types\";\n\nexport default function ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}(WrappedComponent) => {\n  const hocComponent = ({ ...props }) => {\n    // $2\n    return <WrappedComponent {...props} />;\n  };\n\n  hocComponent.propTypes = {};\n\n  return hocComponent;\n};\n"|
| 112|["!hook"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\nimport { useState, useEffect } from \"react\";\n// import { useDispatch } from \"react-redux\";\n\nexport default function ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}() {\n  const [$2] = useState(null);\n  return {$2};\n}\n\n"|
| 113|["ireact"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nimport React from 'react';\n"|
| 114|["!useFocus"]|["javascript"] |"\n\nuseEffect(()=>{\n  console.log(`${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/} useEffect 进来了 `,)\n  return ()=>{\n    console.log(`${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/} useEffect 退出了`,)\n  }\n})\n// import { useFocusEffect } from '@react-navigation/native';\nuseFocusEffect(()=>{\n  console.log(`${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/} useFocusEffect 进来了 `,)\n  return ()=>{\n    console.log(`${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/} useFocusEffect 退出了`,)\n  }\n})\n"|
| 115|["!prern"]|["javascript","javascriptreact","typescriptreact","typescript"] |"<Text style={{backgroundColor:'red'}}>{$1}</Text>"|
| 116|["!view"]|["javascript","javascriptreact","typescript","typescriptreact"] |"引入view 做一些小事情经常会做"|
| 117|["!flatlist"]|["javascript","typescript","javascriptreact","typescriptreact"] |"react_flat_list"|
| 118|["!rn","!reactNative"]|["javascript","javascriptreact","typescript","typescriptreact"] |"\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\nimport React, { useState, useEffect, memo } from 'react'\nimport { View, Text } from 'react-native'\n\nfunction ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}() {\n  return (\n    <View>\n      <Text>${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}</Text>\n    </View>\n  )\n}\n\nexport default ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}\n\n"|
| 119|["!sectionlist"]|["javascript","typescript","javascriptreact","typescriptreact"] |"react native sectionlist"|
| 120|["!readable"]|["javascript"] |"\nconst { Readable } = require(\"stream\");\n\nconst readableStream = new Readable({\n  // highWaterMark: \n  read: (size) => {},\n});\n// readableStream.push(\"test\");\n"|
| 121|["!persistSlice"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n\n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\n\nimport autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\nimport { persistReducer } from 'redux-persist';\nimport { createSlice } from \"@reduxjs/toolkit\";\n\n// ****** init ******\nconst name = \"${2:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}\"\n\n// ****** initialState ******\nconst initialState = {\n  value,\n};\n// ****** async ******\n\n// ****** slice ******\nexport const ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}} = createSlice({\n  name,\n  initialState,\n  reducers: {\n    ${3:setValue}(state,{payload}) {\n      \n    }\n  },\n});\n\n// ****** actions ******\nexport const {\n  ${3:setValue}\n} = ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}.actions;\n\n// ****** reducer persist ******\nconst persistedReducer = persistReducer(\n  {\n    key: [name],\n    storage: AsyncStorage,\n    stateReconciler: autoMergeLevel2,\n    // 黑名单 不缓存的\n    // blacklist: ['page404'],\n  },\n  ${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}.reducer,\n);\nexport default persistedReducer\n"|
| 122|["!slice"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\nimport { createSlice } from \"@reduxjs/toolkit\";\n\n/**\n * 初始state\n */\nconst initialState = {\n  value,\n};\n\nexport const ${1:name}Slice = createSlice({\n  name: \"${1:name}\",\n  initialState,\n  reducers: {\n    setValue(state,{payload}) {\n      \n    }\n  },\n});\n// Action creators are generated for each case reducer function\nexport const {\n  setValue\n} = ${1:name}Slice.actions;\n\nexport default ${1:name}Slice.reducer;\n"|
| 123|["!reduxStore"]|["javascript"] |"\nimport { configureStore } from '@reduxjs/toolkit';\n\nimport ${2:name}Reducer from './${2:name}Slice';\n\n\nexport const store = configureStore({\n  reducer: {\n    ${2:name}: ${2:name}Reducer,\n  },\n});\n\nglobalThis.$store = store;\n\n"|
| 124|["!rtkAsync"]|["javascript"] |"\nexport const ${1:getSomething}Async = createAsyncThunk('${2:name}/${1:getSomething}Async',async(payload, {getState}={})=>{\n  return \n})\n"|
| 125|["!require"]|["javascript"] |"\nconst $1 = require('$1');\n"|
| 126|["!bz"]|["scss"] |"\n/**\n  * 功能:\n  * TODO: \n  * [] \n  * 注释: \n  * - \n  */\n"|
| 127|["!case"]|["shellscript"] |"\ncase $${1:value} in\n $2) echo \"\"\n ;;\n $3) echo \"\"\n ;;\n *) echo \"\"\n ;;\nesac\n"|
| 128|["##","///"]|["shellscript"] |"\n:<<EOF\n$1\nEOF\n"|
| 129|["!currentDir"]|["shellscript"] |"\n# sh文件所在路径\nCURRENT_DIR=$(dirname \"\\$0\")\n"|
| 130|["!echo"]|["shellscript"] |"\necho -e \"$1\n\";\n"|
| 131|["!fun"]|["shellscript"] |"\n${1:functionName}(){\n  ${2:echo -e \"hello\\n\"}\n}\n"|
| 132|["!ifif"]|["shellscript"] |"\nif [ ${1:true} ]\nthen\n   echo \"true\"\nelif [ ${2:true} ]\nthen\n   echo \"second true\"\nelse\n   echo \"default\"\nfi\n"|
| 133|["!elseif","!ife"]|["shellscript"] |"\nif ${1:true}; then\n   ${2:echo \"true\"}\nelse \n   ${2:echo \"false\"}\nfi\n"|
| 134|["!if"]|["shellscript"] |"\n# 判断\nif [ ${1:true} ]\nthen\n    ${2:echo \"123\"}\nfi\n"|
| 135|["!if"]|["shellscript"] |"\n# 判断\nif ${1:true};\nthen\n    ${2:echo \"true\"}\nfi\n"|
| 136|["//"]|["shellscript"] |"# $1"|
| 137|["!question"]|["shellscript"] |"\necho -e \"请输入: \"\nread -r answer\n"|
| 138|["!test","!equal"]|["shellscript"] |"\nisEqual=\\$(test \\$((${1:\\$value})) -eq \\$((${2:\\$value2})))\n"|
| 139|["!tarout"]|["shellscript"] |"\n此为解压\n\n-f <filename>  后加 filename\n-z 压缩 采用 gz\n-j 压缩 采用 bz2\n-c: 建立压缩档案（.tar)\n-v 显示所有过程\n\n-x 解压\n-O 解开到标准输出\n\n"|
| 140|["!tar","!gz"]|["shellscript"] |"此为压缩\n\n-f <filename>  后加 filename\n-z 压缩 采用 gz\n-j 压缩 采用 bz2\n-c: 建立压缩档案（.tar)\n-v 显示所有过程\n\n-x 解压\n-O 解开到标准输出\n"|
| 141|["!single_pattern","!single"]|["typescript"] |"\n  private static _instance : ${1:TheClass} | null  = null;\n  static getInstance(...args):${1:TheClass} {\n    if (!this._instance) {\n      this.instance = new ${1:TheClass}(...args);\n    }\n    return this._instance;\n  }\n"|
| 142|["!single_pattern","!single"]|["javascript"] |"\n  // 实例\n  _instance = null;\n  // 静态方法\n  static getInstance(...args) {\n    if (!this.instance) {\n      this._instance = new ${1:TheClass}(...args);\n    }\n    return this._instance;\n  }\n"|
| 143|["!snippet"]|["javascript"] |"\nconst body = ``\nconst description = \"\";\n\nmodule.exports = {\n  prefix: [\"!${1:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}\"],\n  type: [\"javascript\"],\n  description: description || body,\n  body: body.trim(),\n};\n"|
| 144|["state"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n(state, { payload }) => {\n  if (!payload) {\n    return;\n  }\n  state.${1:value} = payload;\n}\n\n"|
| 145|[".thencatch"]|["javascript"] |"\n.then(()=>{\n\n})\n.catch(()=>{})\n"|
| 146|["throttle"]|["javascript"] |"debounce 实现，虽然已经有 lodash 库 但是有时候不用 lodash"|
| 147|["trycc"]|["javascript","typescript","javascriptreact","typescriptreact"] |"try{\n  $1\n}catch(err){\n  $2\n}"|
| 148|["typeOf"]|["javascript"] |"检验数据类型"|
| 149|["!vh"]|["javascript","typescript","javascriptreact","typescriptreact"] |"\n/**\n * @var $1  \n * @desc $变量定义\n * @property {string} $2 $变量名\n * \n */\n"|
| 150|["!vh"]|["vue"] |"\n<!--\n \n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\n-->\n"|
| 151|["!watch"]|["javascript"] |"\n\"${1:value}\": {\n  handler(newVal,oldVal) {\n    console.log(newVal);\n  },\n  // deep: true,\n  // immediate: true\n},\n"|
| 152|["vfor"]|["vue-html","html"] |"vfor has a key"|
| 153|["!v2"]|["vue"] |"vue2"|
| 154|["oef"]|["javascript","typescript","javascriptreact","typescriptreact"] |"export default {\n  // 组件名\n  components: {},\n  // filters:{},\n  // mixins:[],\n  // props: {},\n  // data(){\n  //   return{\n  //     \n  //   }\n  // },\n  // 组件方法\n  // computed:{},\n  // watch:{},\n  // mounted(){},\n  methods: {},\n}"|
| 155|["!v3t"]|["vue"] |"\n\n<!--\n \n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\n-->\n\n<script lang=\"ts\">\n  export default {\n    name: \"${2:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}\"\n  };\n</script>\n<script setup lang=\"ts\">\n\n</script>\n\n<template>\n  <div class=\"$2\">\n    $2\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n\n</style>\n"|
| 156|["!v3"]|["vue"] |"\n\n<!--\n \n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\n-->\n\n<script>\n  export default {\n    name: \"${2:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}\"\n  };\n</script>\n<script setup>\n\n</script>\n\n<template>\n  <div class=\"$2\">\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n\n</style>\n"|
| 157|["!vo"]|["vue"] |"\n\n<!--\n \n/**\n * @author\n * @file $TM_FILENAME\n * @fileBase ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}\n * @path $RELATIVE_FILEPATH\n * @from \n * @desc $2\n * @todo\n * \n *\n * @done\n * @example\n */\n\n-->\n\n<script>\nimport { defineComponent } from 'vue'\nexport default defineComponent({\n  name: '${2:${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}}',\n  // components: {},\n  props: {},\n  // 从组件触发 emits 事件\n  // emits:{},\n  // 暴露\n  // expose: {},\n  data() {\n    return {}\n  }\n  // computed:{},\n  // watch:{},\n  // create(){},\n  // methods:{}\n})\n</script>\n\n<template>\n  <div class=\"${3}\">\n  </div>\n</template>\n\n<style lang=\"scss\" scoped></style>\"\n"|
| 158|["!directive"]|["javascript"] |"\nconst ${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/} = {\n   // 在绑定元素的 attribute 前\n  // 或事件监听器应用前调用\n  created(el, binding, vnode, prevVnode) {\n    // 下面会介绍各个参数的细节\n  },\n  // 在元素被插入到 DOM 前调用\n  beforeMount(el, binding, vnode, prevVnode) {},\n  // 在绑定元素的父组件\n  // 及他自己的所有子节点都挂载完成后调用\n  mounted(el, binding, vnode, prevVnode) {},\n  // 绑定元素的父组件更新前调用\n  beforeUpdate(el, binding, vnode, prevVnode) {},\n  // 在绑定元素的父组件\n  // 及他自己的所有子节点都更新后调用\n  updated(el, binding, vnode, prevVnode) {},\n  // 绑定元素的父组件卸载前调用\n  beforeUnmount(el, binding, vnode, prevVnode) {},\n  // 绑定元素的父组件卸载后调用\n  unmounted(el, binding, vnode, prevVnode) {}\n}\n"|
| 159|["!writable"]|["javascript"] |"\nconst { Writable } = require(\"stream\");\n\n\nconst writableStream = new Writable({\n  write(chunk, encoding, callback) {\n    callback();\n  },\n});\n\n\n"|
| 160|["!zxs"]|["javascript"] |"\nawait $``\n"|
