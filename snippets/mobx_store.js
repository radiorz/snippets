const body = `
import {observable, action} from 'mobx';
const store = observable(
  {
    value: 0,
    setValue(value) {
      this.value = value;
    },
  },
  {
    setValue:action
  }
);

export default store;

`;
const description = "";

module.exports = {
  prefix: ["!mobx"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
