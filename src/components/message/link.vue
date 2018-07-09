<template>
  <a class="message-link" v-on:click="onClick" :href="link.href">{{link.text}}</a>
</template>
<script>
export default {
  props: {
    link: Object
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      console.log(e);
    }
  }
};
</script>