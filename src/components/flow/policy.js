export default function definePolicy(flow) {
  const vm = flow.vm;
  const dialog = flow.dialog;
  
  dialog.add(
    "examPolicy", [
      function() {
        vm.$store.dispatch("message/sendMessageToBot", {
          sendType: "bot",
          payload: {
            type: "text",
            value: "您要查询哪个地区的政策？（精确到省）"
          }
        });
      },
      function(answer) {
        vm.$store.dispatch("message/sendMessageToBot", {
          sendType: "bot",
          payload: {
            type: "text",
            value: `${answer}的政策为xxxx`
          }
        });
      }
    ],
    "报考政策"
  );
}