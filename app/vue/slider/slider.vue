<template lang="pug">
mixin svgTemp(className, svgId)
    svg(class=`${className} ${className}--${svgId}`)&attributes(attributes)
        use(xlink:href=`./images/sprite.svg#${svgId}`)


.my-works#slider
    .my-works__slider
        .my-works__slider-wrapper
            ul.my-works__slider-list
                li.my-works__slider-item(v-for="item in sliderData")
                    img( :src="getImgUrl(item.imgSrc)").my-works__slider-img
    .my-works__decription
        .my-works__decription-wrapper
            .my-works__site-name.
                {{sliderData[descriptionNumber].siteName}}
            .my-works__site-technogies.
                {{sliderData[descriptionNumber].siteTechnogies}}
            a(href='#').my-works__site-link
                svg.my-works__svg-link
                    use(xlink:href="./images/sprite.svg#link")
                | Посмотреть сайт   
    .my-works__slider-buttons
        a(href='#' @click.prevent='previousButtonClicked').my-works__button-previous
            ul.my-works__previous-list(:style="{ bottom: sliderPrevious }") 
                li.my-works__previous-item(v-for="item in sliderData")
                    img(:src="getImgUrl(item.imgSrc)").my-works__previous-img
            +svgTemp('my-works__arrow-down','portf_arrow_down')
        a(href='#' @click.prevent='nextButtonClicked').my-works__button-next
            ul.my-works__next-list(:style="{ top: sliderNext }") 
                li.my-works__next-item(v-for="item in sliderData")
                    img(:src="getImgUrl(item.imgSrc)").my-works__next-img
            +svgTemp('my-works__arrow-up','portf_arrow_up')
</template>

<script>
// фиг знает нужно ли ипортировать сюда svg
// import "../../icons/sprite/sprite.svg";

// данные для слайдера (пути, заголовки и описание проектов)
import sliderData from "../slider/sliderData.js";
// функция анимации появления текта
import textShowAnimation from "../../js_modules/animation/textShowAnimation";

// функция для перехода нового слайда в основном слайдере
function nextSlideTopSlider(nextItem) {
  function removeClass(item) {
    item.classList.remove("my-works__slider-item--active");
  }
  [...document.querySelectorAll(".my-works__slider-item")].forEach(removeClass);
  document
    .querySelectorAll(".my-works__slider-item")
    [nextItem].classList.add("my-works__slider-item--active");
}

export default {
  name: "slider",
  data() {
    return {
      sliderData,
      currentItem: 0
    };
  },
  methods: {
    previousButtonClicked() {
      this.currentItem == 0
        ? (this.currentItem = this.sliderData.length - 1)
        : --this.currentItem;
      nextSlideTopSlider(this.currentItem);
      //   console.log("currentItem" + this.currentItem);
    },
    nextButtonClicked() {
      this.currentItem == this.sliderData.length - 1
        ? (this.currentItem = 0)
        : ++this.currentItem;
      nextSlideTopSlider(this.currentItem);
    },
    getImgUrl(path) {
      return require("../../img/" + path);
    }
  },
  computed: {
    descriptionNumber() {
      return this.currentItem;
      //   console.log("descriptionNumber" + this.currentItem);
    },
    // основной слайдер
    sliderTop() {
      console.log(document.querySelectorAll(".my-works__slider-item"));
      document
        .querySelectorAll(".my-works__slider-item")
        [currentItem].classList.add(".my-works__slider-item--active");
    },
    // выисляемое св во для слайдера некст, генерирует ему новое значение если изменилось значение currentItem
    sliderNext() {
      return `${-this.currentItem * 100}%`;
    },
    sliderPrevious() {
      return `${(this.sliderData.length - 1 - this.currentItem) * 100}%`;
    }
  },
  mounted: function() {
    // console.log();
    nextSlideTopSlider(this.currentItem);
  },
  updated: function() {
    let siteName = this.$el.querySelector(".my-works__site-name"),
      siteTechnogies = this.$el.querySelector(".my-works__site-technogies");
    textShowAnimation(siteName, 0);
    textShowAnimation(siteTechnogies, 0);
  }
};
</script>

<style lang="scss" >

</style>