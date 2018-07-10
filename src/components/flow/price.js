export default function definePolicy(flow) {

  const vm = flow.vm;
  const dialog = flow.dialog;

  dialog.add(
    "examPrice", [
      function() {
        vm.$store.dispatch("message/sendMessageToBot", {
          sendType: "bot",
          payload: {
            type: "text",
            value: "您要查询哪个班型的价格？"
          }
        });
        vm.$store.dispatch("message/sendMessageToBot", {
          sendType: "bot",
          payload: {
            type: 'list',
            value: [{
                text: '高中升本科',
                openType: 'text'
              },
              {
                text: '本科升MBA',
                openType: 'text'
              }
            ]
          }
        });
      },
      function(answer) {
        vm.$store.dispatch("message/sendMessageToBot", {
          sendType: "bot",
          payload: {
            type: "text",
            value: `${answer}的价格为100.00`
          }
        });
      }
    ],
    "报考价格"
  );
}