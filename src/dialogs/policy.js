export default async function helpList(botui) {
  await botui.message.add({
    content: '今年的报考政策有很大的改变。'
  });
  let result = await botui.action.text({
    action: {
      placeholder: '输入您的问题'
    }
  });
  return new Promise((resolve, reject) => {
    resolve(result);
  });

}