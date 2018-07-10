<template>
  <div class="chat-input">
    <input type="text" v-model="message" v-on:keyup.enter="sendMessage" placeholder="请输入" />
    <button v-on:click="sendMessage">
      询问
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import CONFIG from "../config";
import Flow from "../components/flow/index";

let flow;

export default {
  name: "InputComponent",
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    flow = new Flow(this);
    flow.init();
  },
  methods: {
    sendMessage() {
      let _this = this;
      let message = _this.message;
      _this.message = "";
      if (message === "") {
        return;
      }
      // UI展示发送信息
      _this.$store.dispatch("message/sendMessageToBot", {
        sendType: "user",
        payload: {
          type: "text",
          value: message
        }
      });
      // 流程检查
      flow.check(message, () => {
        axios
          .get(`${CONFIG.SERVER_HOST}/api/message/` + message)
          .then(function(res) {
            _this.$parent.renderResponse(res.data);
          });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/index.less";
</style>
