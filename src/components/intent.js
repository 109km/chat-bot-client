const INTENTS = {
  "None": renderNone,
  "查考试时间": renderExamTime,
  "查报名价格": renderPrice,
  "帮助": renderHelp,
  "感谢": renderThanks
};

function renderNone() {
  let msg = {
    type: 'text',
    value: '您的问题简直太奇葩了，我听不懂，换个问题吧'
  };
  return msg;
}

function renderExamTime(data) {
  let msg = {
    type: 'text',
    value: `${data.province}的考试时间是${data.time}`
  };
  return msg;
}

function renderPrice(data) {
  let msg = {
    type: 'text',
    value: `${data.name}的价格是${data.price}`
  };
  return msg;
}

function renderHelp(data) {

  let msg = {
    type: 'list',
    value: [{
        text: '1. 报考流程',
        openType: 'text'
      },
      {
        text: '2. 报考政策',
        openType: 'link',
        href: 'https://www.baidu.com/'
      }
    ]
  };
  return msg;
}

function renderThanks(data) {
  let msg = {
    type: 'text',
    value: `感谢您的认可！`
  };
  return msg;
}

export default INTENTS;