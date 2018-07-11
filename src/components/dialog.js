/**
 * @desc Class `Dialog` is used to control each dialog.
 * We can define a group of related asks and answers is a `dialog`.
 * Multiple dialogs can be nested.
 */


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
      currentStep: 0,
      name: name,
      steps: steps,
      triggerAction: trigger,
      onInterupted: onInterupted
    });
  }

  /**
   * @desc Do next step of the dialog.
   * @param {String} input
   */
  next(input) {
    let dialog = this.getCurrentDialog();
    console.log('next', dialog);
    if (!dialog) {
      return;
    }
    if (dialog.currentStep < dialog.steps.length) {
      dialog.steps[dialog.currentStep].call(this, input);
      dialog.currentStep++;
    }
    // If no more steps left, pop current dialog.
    if (dialog.currentStep === dialog.steps.length) {
      dialog.currentStep = 0;
      this.pop();
    }
  }

  /**
   * @desc Find the dialog which can match.
   * @param {String} input 
   */
  find(input) {
    let dialogItem = null;
    this.dialogs.forEach((item) => {
      if (item.triggerAction.test(input)) {
        dialogItem = item;
        this.currentDialogStack.push(dialogItem);
      }
    });
    return dialogItem;
  }
  /**
   * @desc Get the dialog by name.
   * @param {String} name
   * @return {Object}
   */
  getDialogByName(name) {
    let dialog;
    this.dialogs.forEach((item, index) => {
      if (item.name === name) {
        dialog = item;
        return;
      }
    });
    return dialog;
  }
  /**
   * @desc Get the current dialog.
   */
  getCurrentDialog() {
    return this.currentDialogStack.length > 0 ? this.currentDialogStack[0] : false;
  }
  /**
   * @desc Add dialog into the stack.
   */
  push(dialogItem) {
    this.currentDialogStack.unshift(dialogItem);
  }
  /**
   * @desc Pop dialog from the stack.
   */
  pop() {
    this.currentDialogStack.shift();
  }

  /**
   * @desc Finish the dialog flow.
   */
  end() {
    this.currentDialogStack = [];
  }

}