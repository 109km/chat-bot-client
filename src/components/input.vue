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
import Dialog from "./dialog.js";
import CONFIG from "../config";

const dialog = new Dialog();

export default {
  name: "InputComponent",
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    let _this = this;
    dialog.add(
      "step1",
      [
        function() {
          _this.$store.dispatch("message/sendMessageToBot", {
            type: "bot",
            value: "step2"
          });
        },
        function() {}
      ],
      "step1"
    );
  },
  methods: {
    sendMessage() {
      let _this = this;
      let message = _this.message;

      if (message === "") {
        return;
      }

      _this.$store.dispatch("message/sendMessageToBot", {
        type: "user",
        value: message
      });

      dialog.find(message);
      dialog.next();

      _this.message = "";

      // Get AI's repsonse.
      axios
        .get(`${CONFIG.SERVER_HOST}/api/message/` + message)
        .then(function(res) {
          _this.$parent.renderResponse(res.data);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/index.less";
</style>
