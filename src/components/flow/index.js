import Dialog from "../dialog";
import policy from './policy';
import price from './price';

let flowInstance;

export default class Flow {
  constructor(vm) {
    if ( flowInstance instanceof Flow ){
      return flowInstance;
    }
    console.log('Flow constructor',vm);
    this.vm = vm;
    this.inited = false;
    this.dialog = new Dialog();
    policy.call(null, this);
    price.call(null, this);
    flowInstance = this;
  }
  send(type, message, callback) {
    this.vm.$store.dispatch("message/sendMessageToBot", {
      sendType: "user",
      payload: {
        type: type,
        value: message
      }
    });
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