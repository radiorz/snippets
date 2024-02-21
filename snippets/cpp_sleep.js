const body = `
void sleep(int milliseconds = 50){
    std::this_thread::sleep_for(std::chrono::milliseconds(milliseconds));
}
`;
const description = "";

module.exports = {
  prefix: ["!sleep"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
