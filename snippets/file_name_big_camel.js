// https://stackoverflow.com/questions/51277998/vs-code-how-to-convert-snippet-placeholder-from-camelcase-to-screaming-snake-ca
// https://gist.github.com/cmstead/7ad64539d13dfdb5a2591bc3be3c8eeb
// https://gist.github.com/natemoo-re/94cfba2bfb17cbeec0680c05309ea9ee
const { TYPES } = require("../src/common/consts/types");
const body =
  "${TM_FILENAME_BASE/([a-z]*)[-@_.*0-9]+([a-z]*)/${1:/capitalize}${2:/capitalize}/g}";
// "${TM_FILENAME_BASE/(^[A-Za-z]+).*?(\\.[^\\\\\\/]+)?$/${1:/capitalize}/}";
const description = "";

module.exports = {
  prefix: ["!File"],
  type: [
    TYPES.javascript,
    TYPES.typescript,
    TYPES.javascriptreact,
    TYPES.typescriptreact,
  ],
  description: description || body,
  origin: body,
  body: body.trim(),
};
!vue
