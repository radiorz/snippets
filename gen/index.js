const glob = require("glob");
const path = require("path");
const fs = require("fs");
const isString = (a) => typeof a === "string";
const isArray = (a) => Array.isArray(a);
(async () => {
  const files = glob.sync("./snippets/*.js");
  let snippets = {
    javascript: {},
    typescript: {},
  };
  console.log(`files`, files);
  files.forEach((file) => {
    const snippet = require(path.join("../", file));
    snippet.body = snippet.body.split("\n");
    const { key, type, ...rest } = snippet;
    console.log(`key,type,rest`, key, type, rest);
    if (isString(type)) snippets[type][key] = rest;
    else if (isArray(type)) {
      type.forEach((t) => {
        snippets[t][key] = rest;
      });
    }
  });
  Object.entries(snippets).forEach(([language, snippets]) => {
    const file = fs.createWriteStream(`./build/${language}.json`);
    file.write(JSON.stringify(snippets, null, 4));
    file.end();
    console.log(`language done`, language);
  });
})();
