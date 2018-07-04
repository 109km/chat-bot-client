<template>
  <div class="container" id="app">
    <div class="chat-container">
      <div v-for="item in message.messagesPool" v-bind:key="item.id" v-bind:class="['chat-item' ,'chat-item-' + item.type]" v-html="item.value">
      </div>
    </div>
    <InputComponent />
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapState } from "vuex";
import CONFIG from "../config";
import INTENTS from "../components/intent.js";
import InputComponent from "../components/input.vue";

export default {
  name: "Index",
  components: {
    InputComponent
  },
  computed: mapState({
    message: "message"
  }),
  methods: {
    renderResponse(res) {
      let responseValue = "";
      let data = res.data;
      if (res.code === 0) {
        responseValue = INTENTS[data.intent].call(null, data);
      } else {
        responseValue = "您的网络开小叉了，稍后再试试。";
      }
      this.$store.dispatch("message/sendMessageToUser", {
        type: "bot",
        value: responseValue
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/index.less";
</style>
