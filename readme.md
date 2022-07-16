 # 这是我个人的 vscode 用户代码片段整理
 ## 起因
 因为 手动添加 body 数组较为麻烦,所以写了一个小工具进行template 转数组
 并且 有时候一个 snippets 适合多种文件格式,所以我使用 type 属性进行配置适用文件,这样就可以更快速迁移snippets 了.(不需要复制黏贴了爽歪歪)
 ##  用法
 
 gen 就是打包成 vscode 可用的json格式
 push 就是复制配置到 vscode 配置中(我安装的是 用户目录 所以是 ~appdata/roaming/code/snippets/下 这个是直接覆盖的 所以以防万一你可以先备份自己的配置文件再进行发布
 
 post 就上上两者合一.
 
 
 ## 编写自己的snippets 系统
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
