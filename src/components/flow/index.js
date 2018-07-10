import policy from './policy';
import Dialog from "../dialog";

const dialog = new Dialog();

export default class Flow {
  constructor(vm) {
    this.vm = vm;
    this.inited = false;
  }
  init() {
    if (this.inited) {
      return;
    }
    const vm = this.vm;
    this.inited = true;
    policy(vm, dialog);
  }
  check(message, callback) {
    if (dialog.getCurrentDialog()) {
      dialog.next(message);
    } else {
      if (dialog.find(message)) {
        dialog.next(message);
      } else {
        callback && callback();
      }
    }
  }
}