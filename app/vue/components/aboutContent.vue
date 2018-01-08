<template lang="pug">
.about-content
  .container
    .about-content__title Страница «Обо мне»
    about-content-list
    button.about-content__save Сохранить
    
    
</template>

<script>
import aboutContentList from "./aboutContentList.vue";
export default {
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