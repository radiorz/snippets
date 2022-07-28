const body = `
  ffmpeg -acodec aac -filter_complex amix=inputs=2:duration=longest -vcodec copy -movflags faststart+frag_keyframe+separate_moof+omit_tfhd_offset+empty_moov
`;
const description = "";

module.exports = {
  prefix: ["tomp4"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
