const glob = require("glob");
const path = require("path");
const fs = require("fs");
const isString = (a) => typeof a === "string";
const isArray = (a) => Array.isArray(a);
const isObject = (a) => typeof a === "object";
(async () => {
  const files = glob.sync("./snippets/*.js");
  let snippets = {
    javascript: {},
    typescript: {},
  };
  console.log(`files`, files);
  files.forEach((file) => {
    try {
      const snippet = require(path.join("../", file));
      if (!snippet) return;
      if (!isObject(snippet) || !snippet.body) {
        throw new Error(`snippet must be an object with \"body\"!`);
      }
      if (snippet.disabled) {
        console.warn(`[WARN] snippet disabled`, file);
        return;
      }
      snippet.body = snippet.body.split("\n");
      let { key, type, ...rest } = snippet;
      if (!key) key = path.basename(file, ".js");
      // console.log(`key,type,rest`, key, type, rest);
      if (isString(type)) snippets[type][key] = rest;
      else if (isArray(type)) {
        type.forEach((t) => {
          if (!snippets[t]) snippets[t] = {};
          snippets[t][key] = rest;
        });
      }
    } catch (error) {
      console.warn(
        `[ERROR] [files.forEach]`,
        JSON.stringify({ file }),
        error.message
      );
    }
  });
  Object.entries(snippets).forEach(([language, snippets]) => {
    const file = fs.createWriteStream(`./build/${language}.json`);
    file.write(JSON.stringify(snippets, null, 2));
    file.end();
    console.log(`language done`, language);
  });
})();

