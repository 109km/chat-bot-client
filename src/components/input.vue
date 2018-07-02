<template>
  <div class="chat-input">
    <input type="text" v-model="message" v-on:keyup.enter="sendMessage" placeholder="请输入" />
    <button v-on:click="sendMessage">
      询问
    </button>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage() {
      let _this = this;
      let message = _this.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/index.less";
</style>
