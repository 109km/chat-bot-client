export default async function hello(botui, callback) {

  await botui.message.add({
    content: '欢迎您的到来，我是小智'
  });

  await botui.message.add({
    content: '请问您有什么问题？'
  });

  let result = await botui.action.text({
    action: {
      placeholder: '输入您的问题'
    }
  });

  return new Promise((resolve, reject) => {
    resolve(result);
  })

}