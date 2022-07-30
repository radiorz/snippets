const body = `
import { action, observable } from 'mobx';

class Store {
    @observable
    count = 1;
    
    @action
    setCount = () => {
        this.count++;
    }
}
export const store = new Store();

`;
const description = "";

module.exports = {
  prefix: ["!mobxclass"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
