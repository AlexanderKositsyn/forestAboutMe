<template lang="pug">
.blog-content
  .container
    .blog-content__title Страница «Блог»
    form.blog-content__form
      .blog-content__title-form Добавить запись
      input.blog-content__input(placeholder='Название')
      input.blog-content__input(placeholder='Дата')
      textarea.blog-content__input.blog-content__input--text(placeholder='Содержание')
      button(type='submit').blog-content__save Добавить
    .blog-content__popup
        .blog-content__message Сообщение отправлено
        button.blog-content__close Закрыть
    
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style src='styles/blogContent.scss'  lang='scss' scoped>

</style>