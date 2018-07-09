<template>
  <img :src="image.src" :title="image.title"/>
</template>
<script>
export default {
  props: {
    image: Object
  }
};
</script>