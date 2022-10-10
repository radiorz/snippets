function capitalize(str) {
  const [first, ...rest] = str;
  if (!first) return "";
  return first.toUpperCase() + rest.join("").toLowerCase();
}
