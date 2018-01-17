<template lang="pug">
.blog-content
  .container
    .blog-content__title Страница «Блог»
    form.blog-content__form
      .blog-content__title-form Добавить запись
      <div class="blog-content__error-message">{{ validation.firstError('blogName') }}</div>
      input.blog-content__input(v-model='blogName' placeholder='Название')
      <div class="blog-content__error-message">{{ validation.firstError('blogDate') }}</div>
      input.blog-content__input(v-model='blogDate' placeholder='Дата')
      <div class="blog-content__error-message">{{ validation.firstError('blogText') }}</div>
      textarea.blog-content__input.blog-content__input--text(v-model='blogText' placeholder='Содержание')
      button( @click.prevent='blogAddArticle' type='submit').blog-content__save Добавить
    .blog-content__popup(:class="{ active: isActive }")
        .blog-content__message {{msg}}
        button.blog-content__close(v-on:click="close") Закрыть
    
</template>

<script>
var SimpleVueValidation = require("simple-vue-validator");
var Validator = SimpleVueValidation.Validator;
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      isActive: false,
      blogName: "",
      blogDate: "",
      blogText: ""
    };
  },

  validators: {
    blogName: function(value) {
      return Validator.value(value)
        .required()
        .maxLength(150);
    },
    blogDate: function(value) {
      return Validator.value(value)
        .required()
        .maxLength(20);
    },
    blogText: function(value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    blogAddArticle() {
      console.log("проверка...");
      // если прошла валидация то отправяем на сервер
      this.$validate().then(
        function(success) {
          if (success) {
            console.log("проверка пройдена");
            console.log(this.blogName);
            // при нажатии на кнопку отправляем на сервер
            // console.log(
            //   `blogName: ${this.blogName}; blogDate: ${
            //     this.blogDate
            //   }; blogText: ${this.blogText}`
            // );
            axios
              .post("/api/blog", {
                title: this.blogName,
                date: this.blogDate,
                body: this.blogText
              })
              .then(
                function(response) {
                  this.msg = response.data.msg;
                  console.log(response);
                }.bind(this)
              )
              .catch(function(error) {
                console.log(error);
              });
            //открываем вспливашку в сообщением
            this.isActive = true;
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


<style src='styles/blogContent.scss'  lang='scss' scoped>

</style>
