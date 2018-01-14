<template lang="pug">
.work-content
  .container
    .work-content__title Страница «Мои работы»
    form.work-content__form(enctype="multipart/form-data" action='/api/works' method='post')
      .work-content__title-form Добавить работу
      input.work-content__input(v-model='workTitle' placeholder='Название проета' name="workTitle" )
      input.work-content__input(v-model='workTechnologies' placeholder='Технологии' name="workTechnologies" )
      label.work-content__file-label
        input(type='file' name="image").work-content__file-input( @change="processFile($event)" placeholder='Загрузить картинку')
        div.work-content__file-picture
          img.work-content__file-img(src="../../img/file_icon.png")
        div.work-content__file-text Загрузить картинку
      button(type='submit' @click="workAdd").work-content__save Добавить
    .work-content__popup
        .work-content__message Сообщение отправлено
        button.work-content__close Закрыть
    
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      workTitle: "",
      workTechnologies: "",
      fileData: ""
    };
  },
  methods: {
    processFile(event) {
      // при изменении input file записываем объект файл в fileData
      this.fileData = event.target.files[0];
      console.log(this.fileData);
    },
    workAdd() {
      // по нажатию на кнопку сохранить отправляем на сервер новые данные
      console.log(
        `${this.fileData}  + ${this.workTitle} + ${this.workTechnologies}`
      );
    }
  }
};
</script>


<style src='styles/workContent.scss'  lang='scss' scoped>

</style>