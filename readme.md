 # 这是我个人的 vscode 用户代码片段整理
 ## 起因
 因为vscode 添加用户片段需要的是字符串数组，手动添加数组(body)较为麻烦,所以写了一个小工具进行 template 转成数组， template 就简单多了.
 
 并且 有时候一个 snippets 适合多种文件格式(比如 typescript 和 JavaScript 经常都会用到相同的 snippets),所以我使用 type 属性进行配置适用文件,这样就共享snippets给不同语言了了.(不需要复制黏贴了爽歪歪)
 
 ##  用法(都写在了scripts 运行即可)
 
 `gen` 就是打包成 vscode 可用的json格式
 ```bash
 yarn gen 
 ```
 `push`就是复制配置到 vscode 配置中(我安装的是 用户目录 所以是 ~appdata/roaming/code/snippets/下 这个是直接覆盖的 所以以防万一你可以先备份自己的配置文件再进行发布
 ```
 yarn push
 ```
`install.local` 就以上两者合一,重新生成 snippets 并复制到本地snippets 目录。
### 通过 vscode 的简单插件框架可以迅速打包生成 vscode 插件
方法已经封装， 只需要运行以下命令
```
yarn build:vscode 
```
### 据说通过 插件 可以在 jetbrains 比如 idea 或者 webstorm 中运行 vscode snippets 不过没有成功
https://github.com/brpaz/jetbrains-plugin-vscode-snippets

 ## 编写自己的 snippets 插件
 感兴趣的可以fork 我的仓库,新需求也可以提 pr 到我仓库中
 如果觉得好可以加星哦.
 
 ## 其他
 
 ``` 
  
  // Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
```
