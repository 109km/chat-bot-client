<template>
  <!-- <img src="./assets/logo.png"> -->
  <InputComponent />
</template>

<script>
import InputComponent from './components/input.vue'
export default {
  name: 'app',
  components: {
    InputComponent
  }
}
</script>

<style lang="less">
  @import './assets/css/global.less';
</style>


