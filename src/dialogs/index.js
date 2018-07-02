import renderHello from './hello';
import renderHelpList from './helpList';
import renderPolicy from './policy';

export default class Dialog {
  constructor(botui) {
    this.botui = botui;
  }
  async start() {
    const botui = this.botui;
    let result = await renderHello(botui);
    if (result.value === '帮助') {
      result = await renderHelpList(botui);
    }
    if (result.value === 'renderPolicy') {
      renderPolicy(botui);
    }
  }
}
