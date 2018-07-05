import Util from '../utils/util';

export default class Dialog {
  constructor() {
    // Collection of the defined dialogs.
    this.dialogs = [];

    // Collection of triggerActions.
    this.triggerActions = [];

    // Current dialog's name.
    this.currentDialogName = null;

    // Maintain the dialog stack.
    this.currentDialogStack = [];

    // Store the current step of one dialog.
    this.currentStep = 0;

  }

  /**
   * @desc Add a new dialog
   * @param {String} name The dialog's name.
   * @param {Array} steps The dialog's steps that is contained of functions.
   */
  add(name, steps, triggerAction, onInterupted) {

    let trigger;
    if (Util.typeof(triggerAction) === 'string') {
      trigger = new RegExp(triggerAction);
    } else if (Util.typeof(triggerAction) === 'regexp') {
      trigger = triggerAction;
    } else {
      throw (new Error(`'triggerAction' should be a string or a regex.`));
    }
    this.dialogs.push({
      name: name,
      steps: steps,
      triggerAction: trigger,
      onInterupted: onInterupted
    });
  }

  /**
   * @desc Do next step of the dialog.
   * @param {Object} options
   */
  next() {
    let dialog = this.getCurrentDialog();
    if (Util.typeof(dialog) === 'undefined') {
      return;
    }
    dialog.steps[this.currentStep].call();
  }

  /**
   * @desc Find the dialog which can match.
   * @param {String} input 
   */
  find(input) {
    let dialogItem = null;
    this.dialogs.forEach((item) => {
      console.log(item.triggerAction);
      if (item.triggerAction.test(input)) {
        dialogItem = item;
        this.currentDialogStack.push(dialogItem);
      }
    });
  }

  /**
   * @desc Get the current dialog.
   */
  getCurrentDialog() {
    return this.currentDialogStack[0];
  }
  /**
   * @desc Add dialog into the stack.
   */
  push(dialogItem) {
    this.currentDialogStack.unshift(dialogItem);
  }
  /**
   * @desc Add dialog into the stack.
   */
  pop() {
    this.currentDialogStack.shift();
  }

}