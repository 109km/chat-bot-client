<template>
  <div class="chat-input">
    <input type="text" v-model="message" v-on:keyup.enter="sendMessage" placeholder="请输入" />
    <button v-on:click="sendMessage">
      询问
    </button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "InputComponent",
  data(){
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      let _this = this;
      let message = _this.message;
      // _this.message = {
      //   type: "message",
      //   value: message
      // };
      // _this.messages.push({
      //   type: "request",
      //   value: message
      // });

      // Get AI's repsonse.
      axios
        .get(`${CONFIG.SERVER_HOST}/api/messages/`, { message })
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
