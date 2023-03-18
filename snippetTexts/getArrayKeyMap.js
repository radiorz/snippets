/**
 * 将对象数组转化为以某个值为key的对象
 * 基础函数
 * @param {Array<Object>} array 数组
 * @param {string} key key值
 * @returns
 */
export function getArrayKeyMap(array = [], key = "name") {
  const pinNameMap = {};
  array.forEach((item = {}) => {
    if (!item[key]) return;
    pinNameMap[item[key]] = item;
  });
  return pinNameMap;
}
