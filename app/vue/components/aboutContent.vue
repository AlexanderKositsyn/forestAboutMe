<template lang="pug">
.about-content
  .container
    .about-content__title Страница «Обо мне»
    about-content-list
    
    
</template>

<script>
import aboutContentList from "./aboutContentList.vue";
export default {
  props: {
    skills: Array
  },
  data() {
    return {};
  },
  components: {
    "about-content-list": aboutContentList
  }
};
</script>


<style src='styles/aboutContent.scss'  lang='scss' scoped>

</style>