function checkObjectValueEqualKey(obj, value) {
  const [key] = Array.prototype.find.call(
    Object.entries(obj),
    ([key, _value]) => {
      if (_value === value) {
        return true;
      } else {
        return false;
      }
    }
  );
  return key;
}
// 这个可能重复
