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
import axios from "axios";
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
      let store = this.$store;
      axios
        .post("/api/about", {
          store: store.state.skills
        })
        .then(function(msg) {
          console.log(msg);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<style src='styles/aboutContent.scss'  lang='scss' scoped>

</style>