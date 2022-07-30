const body = `
import axios from "axios";
const options = {
  baseUrl: "/",
  timeout: 10 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
const instance = axios.create(options);

`;
const description = "";

module.exports = {
  prefix: ["!axios"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
