export function getEnumFromArray(arr = []) {
  return arr.reduce((acc, cur) => {
    acc[cur] = cur
    return acc
  }, {})
}
