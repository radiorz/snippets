/**
 * 判断版本新旧
 * @param {string} newVersion
 * @param {string} oldVersion
 * @returns {boolean}
 */
function isNewerVersion(newVersion = "", oldVersion = "") {
  // console.log(`version,oldVersion`, version, oldVersion);
  const [oldF, oldS, oldPatch] = oldVersion
    .split(".")
    .map((v) => parseInt(v, 10));
  const [newF, newS, newPatch] = newVersion
    .split(".")
    .map((v) => parseInt(v, 10));
  if (newF > oldF) return true;
  if (newF == oldF && newS > oldS) return true;
  if (newF == oldF && newS == oldS && newPatch > oldPatch) return true;
  return false;
}
