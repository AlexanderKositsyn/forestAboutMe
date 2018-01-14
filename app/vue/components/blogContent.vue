<template lang="pug">
.blog-content
  .container
    .blog-content__title Страница «Блог»
    form.blog-content__form
      .blog-content__title-form Добавить запись
      input.blog-content__input(v-model='blogName' placeholder='Название')
      input.blog-content__input(v-model='blogDate' placeholder='Дата')
      textarea.blog-content__input.blog-content__input--text(v-model='blogText' placeholder='Содержание')
      button( @click.prevent='blogAddArticle' type='submit').blog-content__save Добавить
    .blog-content__popup
        .blog-content__message Сообщение отправлено
        button.blog-content__close Закрыть
    
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogName: "",
      blogDate: "",
      blogText: ""
    };
  },
  methods: {
    blogAddArticle() {
      // при нажатии на кнопку отправляем на сервер
      console.log(
        `blogName: ${this.blogName}; blogDate: ${this
          .blogDate}; blogText: ${this.blogText}`
      );
      axios
        .post("/api/blog", {
          title: this.blogName,
          date: this.blogDate,
          body: this.blogText
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<style src='styles/blogContent.scss'  lang='scss' scoped>

</style>