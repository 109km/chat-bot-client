<template>
  <div class="message-list">
    <div class="message-list-item" v-for="item in list" v-bind:key="item.id">
      <a class="message-link message-list-link" v-on:click="onClick($event,item)" :data-type="item.type" :href="item.href || 'javascript:;'">
        {{item.text}}
      </a>
    </div>
  </div>
</template>
<script>

import Flow from '../flow/index';

let flow;
export default {
  props: {
    list: Array
  },
  mounted() {
    flow = new Flow(this);
  },
  methods: {
    onClick(e, item) {
      e.preventDefault();
      if (item.openType === "link") {
        location.href = item.href;
      } else if (item.openType === "text") {
        let message =item.text;
        flow.send("text", message, () => {
        axios
          .get(`${CONFIG.SERVER_HOST}/api/message/` + message)
          .then(function(res) {
            _this.$parent.renderResponse(res.data);
          });
      });
      }
    }
  }
};
</script>
<style lang="less">
.message-list-item {
  line-height: 1.5;
}
</style>
