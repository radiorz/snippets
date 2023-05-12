export default function ToSingleton(Builder) {
  let instance;
  // 代理函数仅作管控单例
  return function (...args) {
    if (!instance) {
      instance = new Builder(...args);
    }
    return instance;
  };
}
