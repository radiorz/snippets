const isString = (a) => typeof a === "string";
const isArray = (a) => Array.isArray(a);
const isObject = (a) => typeof a === "object" && a != null;

module.exports = {
  isString,
  isArray,
  isObject,
};
