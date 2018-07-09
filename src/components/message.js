export default class Message {
  constructor(options) {
    this.type = options.type;
    this.data = options.data;
  }

  render() {
    let html = '';
    let component;
    let _this = this;

    if (this.type === 'text') {
      html = `${this.data.text}`;
    }
    if (this.type === 'link') {
      html = `<message-link :link='{url:"${this.data.url}",text:"${this.data.text}"}'></message-link>`;
    }

    if (this.type === 'image') {
      html = `<message-image :image='{src:"${this.data.src}",title:"${this.data.title}"}'></message-image>`;
    }

    if (this.type === 'list') {
      html = `<message-list :list='${this.data}'></message-image>`;
    }
    return html;
  }
}