const body = `
# registry=https://registry.npmmirror.com
sass_binary_site=https://npmmirror.com/mirrors/node-sass/
phantomjs_cdnurl=http://cnpmjs.org/downloads
electron_mirror=https://npmmirror.com/mirrors/electron/
sqlite3_binary_host_mirror=https://foxgis.oss-cn-shanghai.aliyuncs.com/
profiler_binary_host_mirror=https://npmmirror.com/mirrors/node-inspector/
chromedriver_cdnurl=https://npmmirror.com/mirrors/chromedriver/

`;
const description = "";

module.exports = {
  prefix: ["!electron"],
  type: ["plaintext"],
  description: description || body,
  body: body.trim(),
};
