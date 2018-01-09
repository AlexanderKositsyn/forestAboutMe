<template lang="pug">
.work-content
  .container
    .work-content__title Страница «Мои работы»
    form.work-content__form
      .work-content__title-form Добавить работу
      input.work-content__input(placeholder='Название проета')
      input.work-content__input(placeholder='Технологии')
      label.work-content__file-label
        input(type='file').work-content__file-input(placeholder='Загрузить картинку')
        div.work-content__file-picture
          img.work-content__file-img(src="../../img/file_icon.png")
        div.work-content__file-text Загрузить картинку
      button(type='submit').work-content__save Добавить
    .work-content__popup
        .work-content__message Сообщение отправлено
        button.work-content__close Закрыть
    
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style src='styles/workContent.scss'  lang='scss' scoped>

</style>