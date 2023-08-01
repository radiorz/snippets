const body = `
void wait(int second = 50){
    std::this_thread::sleep_for(std::chrono::milliseconds(second));
}
`;
const description = "";

module.exports = {
  prefix: ["!wait"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};
