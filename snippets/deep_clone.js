const body = `
const deepClone = (obj, map = new WeakMap()) => {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (map.has(obj)) {
    return map.get(obj);
  }

  const allDesc = Object.getOwnPropertyDescriptors(obj);
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

  map.set(obj, cloneObj);

  for (const key of Reflect.ownKeys(obj)) {
    const value = obj[key];

    cloneObj[key] =
      value instanceof Object && typeof value !== 'function'
        ? deepClone(value, map)
        : value;
  }
  return cloneObj;
};

`;
const description = "";

module.exports = {
  disabled: true, // lodash在手天下我有
  prefix: ["!snippet"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
