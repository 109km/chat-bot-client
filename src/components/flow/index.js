import Dialog from "../dialog";
import policy from './policy';
import price from './price';

export default class Flow {
  constructor(vm) {
    this.vm = vm;
    this.inited = false;
    this.dialog = new Dialog();
  }
  init() {
    if (this.inited) {
      return;
    }
    this.inited = true;
    policy.call(null, this);
    price.call(null, this);

  }
  check(message, callback) {
    const dialog = this.dialog;
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