const logger = {
  warn: (...args) => console.warn("[WARN]", ...args),
  debug: (...args) => console.debug("[DEBUG]", ...args),
  error: (...args) => console.error("[ERROR]", ...args),
  info: (...args) => console.info("[INFO]", ...args),
};
module.exports = logger;
