<template lang="pug">
.work-content
  .container
    .work-content__title Страница «Мои работы»
    form.work-content__form#workForm(enctype="multipart/form-data" action='/api/works' method='post' )
      .work-content__title-form Добавить работу
      <div class="work-content__error-message">{{ validation.firstError('workTitle') }}</div>
      input.work-content__input(v-model='workTitle' placeholder='Название проета' name="workTitle" )
      <div class="work-content__error-message">{{ validation.firstError('workTechnologies') }}</div>
      input.work-content__input(v-model='workTechnologies' placeholder='Технологии' name="workTechnologies" )
      label.work-content__file-label
        input(type='file' name="image" accept="image/*").work-content__file-input( @change="processFile($event)" placeholder='Загрузить картинку')
        <div class="work-content__error-message">{{ filemsg }}</div>
        <div class="work-content__error-message">{{ validation.firstError('fileData') }}</div>
        div.work-content__file-picture
          img.work-content__file-img(src="../../img/file_icon.png")
        div.work-content__file-text Загрузить картинку
      button(type='submit' @click.prevent="workAdd").work-content__save Добавить
    .work-content__popup(:class="{ active: isActive }")
        .work-content__message {{msg}}
        button.work-content__close(v-on:click="close") Закрыть
    
</template>

<script>
var SimpleVueValidation = require("simple-vue-validator");
var Validator = SimpleVueValidation.Validator;
import axios from "axios";
export default {
  data() {
    return {
      filemsg: "",
      msg: "",
      isActive: false,
      workTitle: "",
      workTechnologies: "",
      fileData: ""
    };
  },
  validators: {
    workTitle: function(value) {
      return Validator.value(value)
        .required()
        .maxLength(150);
    },
    workTechnologies: function(value) {
      return Validator.value(value)
        .required()
        .maxLength(100);
    },
    fileData: function(value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    processFile(event) {
      // при изменении input file записываем объект файл в fileData
      // перед этим проверив тип загружаемого файлы
      if (
        event.target.files[0].type === "image/jpeg" ||
        event.target.files[0].type === "image/png"
      ) {
        this.fileData = event.target.files[0];
        this.filemsg = "";
      } else {
        this.filemsg = "Загружать можно только файлы картинки";
      }
      console.log(this.fileData);
    },
    workAdd() {
      // если прошла валидация то отправяем на сервер
      this.$validate().then(
        function(success) {
          if (success) {
            console.log("проверка пройдена");
            //открываем вспливашку в сообщением
            this.isActive = true;
            //запускаем событие submit формы
            document.getElementById("workForm").submit();
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


<style src='styles/workContent.scss'  lang='scss' scoped>

</style>
