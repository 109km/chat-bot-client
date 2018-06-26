const INTENTS = {
  "None": renderNone,
  "查考试时间": renderExamTime,
  "查报名价格": renderPrice,
  "帮助": renderHelp,
  "感谢": renderThanks
};

function renderNone() {
  return "您的问题简直太奇葩了，我听不懂，换个问题吧";
}

function renderExamTime(data) {
  return `${data.province}的考试时间是${data.time}`;
}

function renderPrice(data) {
  return `${data.name}的价格是${data.price}`;
}

function renderHelp(data) {
  return `<ul class="help-list">
    <li><a>1. 报考流程</a></li>
    <li><a>2. 专业选择</a></li>
    </ul>`;
}

function renderThanks(data) {
  return `感谢您的认可！`;
}

export default INTENTS;