/**
 * 将对象数组转化为以某个值为key的对象
 * 例如:
 * 将 [{name: 'abc',value:1}, {name: 'ccc', value: 2}]
 * 转化为 {abc: {value:1},ccc: {value:2}}
 * @param {Array<Object>} array 数组
 * @param {string} key key值
 * @returns
 */
function getArrayKeyMap(array = [], key = 'name') {
  return array.reduce((previousValue, current) => {
    if (typeof current[key] === 'undefined') {
      return previousValue
    }
    previousValue[current[key]] = current
    return previousValue
  }, {})
}
