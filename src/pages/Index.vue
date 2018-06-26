<template>
  <div class="container" id="app">
  <div class="chat-container">
    <div v-for="item in messages" v-bind:key="item.id" v-bind:class="['chat-item' ,'chat-item-' + item.type]" v-html="item.value">
    </div>
  </div>
  <div class="chat-input">
      <input type="text" v-model="message" v-on:keyup.enter="sendMessage" placeholder="请输入" />
      <button v-on:click="sendMessage">
        询问
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CONFIG from "../config";
import INTENTS from '../components/intent.js';



export default {
  name: "Index",
  props: {
    msg: String
  },
  data() {
    return {
      message: "",
      messages: [
        {
          type: "response",
          value: "您好，我是学历咨询机器人，小智。您有什么问题呢？"
        }
      ]
    };
  },
  methods: {
    renderResponse(res) {
      let responseValue = "";
      let data = res.data;
      if (res.code === 0) {
        responseValue = INTENTS[data.intent].call(null, data);
      } else {
        responseValue = "您的网络开小叉了，稍后再试试。";
      }
      this.messages.push({
        type: "response",
        value: responseValue
      });
    },
    sendMessage() {
      let _this = this;
      let message = _this.message;
      _this.message = "";
      _this.messages.push({
        type: "request",
        value: message
      });

      // Get AI's repsonse.
      axios
        .get(`${CONFIG.SERVER_HOST}/api/message/` + encodeURIComponent(message))
        .then(function(res) {
          _this.renderResponse(res.data);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/index.less";
</style>
