export default async function helpList(botui) {
  let result = await botui.action.button({
    action: [
      {
        text: '报考政策',
        value: 'renderPolicy'
      },
      {
        text: '报考流程',
        value: '333'
      },
      {
        text: '报考',
        value: '333'
      }
    ]
  });

  return new Promise((resolve,reject)=>{
    resolve(result);
  });

}