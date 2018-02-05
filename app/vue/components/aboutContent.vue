<template lang="pug">
.about-content
  .container
    .about-content__title Страница «Обо мне»
    about-content-list(ref="list")
    button.about-content__save(v-on:click="savePercent") Сохранить
    .about-content__popup(:class="{ active: isActive }")
        .about-content__message.
          {{msg}}
        button.about-content__close(v-on:click="close") Закрыть
    
    
</template>

<script>
import aboutContentList from "./aboutContentList.vue";
import axios from "axios";
export default {
  data() {
    return {
      isActive: false,
      msg: ""
    };
  },
  components: {
    "about-content-list": aboutContentList
  },
  validators: {},
  methods: {
    // сохранить проценты
    savePercent() {
      // нужно найти внутренний компонент и забрать у него все валидаторы

      // найдем все промисы во всех списках, и во всех строках-скилах
      // и занесем их в массив
      let array = [];
      this.$refs.list.$refs.listItem.forEach(item => {
        item.$refs.listItemRow.forEach(function(form) {
          return array.push(form.validate());
        });
      });

      // когда все будут проврены то проверим, есть ли обишки, если они есть то отправлять не будем
      // еси их  нет, то отправим на сервер новые данные
      Promise.all(array).then(
        function(results) {
          if (
            results.filter(function(result) {
              return !result;
            }).length === 0
          ) {
            let _this = this;
            //тут короче нужно сделать push на сервер
            let store = this.$store;
            axios
              .post("/api/about", {
                store: store.state.skills
              })
              .then(function(message) {
                //Это приходит  с сервера.
                _this.msg = message.data;
                _this.isActive = true;
              })
              .catch(function(error) {
                //Это приходит НЕ с сервера.
                _this.msg = "Не удалось сохранить скилы";
                _this.isActive = true;
              });
          }
        }.bind(this)
      );
    },
    close() {
      this.isActive = false;
    }
  }
};
</script>


<style src='styles/aboutContent.scss'  lang='scss' scoped>

</style>
