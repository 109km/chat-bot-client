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
export default {
  props: {
    list: Array
  },
  methods: {
    onClick(e, item) {
      e.preventDefault();
      if (item.openType === "link") {
        location.href = item.href;
      } else if (item.openType === "text") {
        this.$store.dispatch("message/sendMessageToBot", {
          sendType: "user",
          payload: {
            type: "text",
            value: item.text
          }
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
