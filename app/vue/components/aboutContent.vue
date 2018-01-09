<template lang="pug">
.about-content
  .container
    .about-content__title Страница «Обо мне»
    about-content-list
    button.about-content__save(v-on:click="savePercent") Сохранить
    .about-content__popup
        .about-content__message Сообщение отправлено
        button.about-content__close Закрыть
    
    
</template>

<script>
import aboutContentList from "./aboutContentList.vue";
export default {
  data() {
    return {};
  },
  components: {
    "about-content-list": aboutContentList
  },
  methods: {
    savePercent() {
      //тут короче нужно сделать push на сервер
      console.log(this.$store.state.skills);
    }
  }
};
</script>


<style src='styles/aboutContent.scss'  lang='scss' scoped>

</style>