<template>
  <div class="container" id="app">
    <div class="chat-container">
      <div 
      v-for="item in message.messagesPool" 
      v-bind:key="item.id" 
      v-bind:class="['chat-item' ,'chat-item-' + item.sendType]" 
      >
        <MessageText v-if="item.payload.type === 'text'" :text="item.payload.value"/>
        <MessageLink v-else-if="item.payload.type === 'link'" :link="item.payload.value"/>
        <MessageImage v-else-if="item.payload.type === 'image'" :image="item.payload.value"/>
        <MessageList v-else-if="item.payload.type === 'list'" :list="item.payload.value"/>
      </div>
    </div>
    <InputComponent />
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import InputComponent from "../components/input.vue";
import * as MessageComponents from "../components/message/index";

export default {
  name: "Index",
  components: {
    InputComponent,
    ...MessageComponents.default
  },
  computed: mapState({
    message: "message"
  }),
  methods: {
    renderResponse(res) {
      let responseValue = "";
      let data = res.data;
      if (res.code === 0) {
        responseValue = data;
      } else {
        responseValue = {
          type: "text",
          value: "您的网络开小叉了，稍后再试试。"
        };
      }
      this.$store.dispatch("message/sendMessageToUser", {
        sendType: "bot",
        payload: responseValue
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/index.less";
</style>
