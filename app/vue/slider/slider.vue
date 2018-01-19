<template lang="pug">
mixin svgTemp(className, svgId)
    svg(class=`${className} ${className}--${svgId}`)&attributes(attributes)
        use(xlink:href=`./images/sprite.svg#${svgId}`)


.my-works#slider
    .my-works__slider
        .my-works__slider-wrapper
            ul.my-works__slider-list
                li.my-works__slider-item(v-for="item in sliderData" :class="{ active: item.active }")
                    img( :src="getImgUrl(item.imgSrc)").my-works__slider-img
    .my-works__decription
        .my-works__decription-wrapper
            .my-works__site-name {{slideName}}
            .my-works__site-technogies {{slideTechnogies}}
            a(:href='slideLink').my-works__site-link
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

import axios from "axios";

// функция анимации появления текта
import textShowAnimationVue from "../../js_modules/animation/textShowAnimationVue";

// функция для перехода нового слайда в основном слайдере
function nextSlideTopSlider(nextItem) {
  function removeClass(item) {
    item.classList.remove("active");
  }

  if ([...document.querySelectorAll(".my-works__slider-item")].length !== 0) {
    [...document.querySelectorAll(".my-works__slider-item")].forEach(
      removeClass
    );
    document
      .querySelectorAll(".my-works__slider-item")
      [nextItem].classList.add("active");
  }
}

export default {
  name: "slider",
  data() {
    return {
      currentItem: 0
    };
  },
  methods: {
    previousButtonClicked() {
      this.currentItem == 0
        ? (this.currentItem = this.$store.state.sliderData.length - 1)
        : --this.currentItem;
      nextSlideTopSlider(this.currentItem);
      //   console.log("currentItem" + this.currentItem);
    },
    nextButtonClicked() {
      this.currentItem == this.$store.state.sliderData.length - 1
        ? (this.currentItem = 0)
        : ++this.currentItem;
      nextSlideTopSlider(this.currentItem);
    },
    //тут нужно создать путь до папки

    getImgUrl(path) {
      return "../images/" + path;
    }
  },
  computed: {
    sliderData() {
      return this.$store.state.sliderData;
    },
    slideName() {
      if (this.$store.state.sliderData.length !== 0) {
        return this.$store.state.sliderData[this.descriptionNumber].siteName;
      }
    },
    slideTechnogies() {
      if (this.$store.state.sliderData.length !== 0) {
        return this.$store.state.sliderData[this.descriptionNumber]
          .siteTechnogies;
      }
    },
    slideLink() {
      if (this.$store.state.sliderData.length !== 0) {
        return this.$store.state.sliderData[this.descriptionNumber].siteLink;
      }
    },
    descriptionNumber() {
      return this.currentItem;
      //   console.log("descriptionNumber" + this.currentItem);
    },
    // основной слайдер
    sliderTop() {
      document
        .querySelectorAll(".my-works__slider-item")
        [currentItem].classList.add(".my-works__slider-item--active");
    },
    // выисляемое св во для слайдера некст, генерирует ему новое значение если изменилось значение currentItem
    sliderNext() {
      // выведем следующий item
      // текущий элемент уже последний, то следующий элемент будет первый элемент, т е на 0%
      if (this.currentItem === this.$store.state.sliderData.length - 1) {
        return `0%`;
      } else {
        return `${(-this.currentItem - 1) * 100}%`;
      }
    },
    sliderPrevious() {
      // выведем предыдущий item
      // если тэкущий элемент первый, то ставим самый последний
      if (this.currentItem === 0) {
        return `${(this.$store.state.sliderData.length - 1) * 100}%`;
      } else {
        return `${(this.currentItem - 1) * 100}%`;
      }
    }
  },
  watch: {
    slideName() {
      let siteName;
      siteName = this.$el.querySelector(".my-works__site-name");
      textShowAnimationVue(siteName, 0, this.slideName);
    },
    slideTechnogies() {
      let siteTechnogies;
      siteTechnogies = this.$el.querySelector(".my-works__site-technogies");
      textShowAnimationVue(siteTechnogies, 0, this.slideTechnogies);
    }
  },
  created() {
    console.log("запрос на /api/works");
    let store = this.$store;

    //возьмем все скилы из БД и запишем их в state
    axios
      .get("/api/works")
      .then(function(response) {
        console.log("from /api/works response");
        console.log(response.data.sliderItems);
        // когда придет ответ запишем в store
        store.commit("setSliderData", response.data.sliderItems);
      })
      .then(nextSlideTopSlider(this.currentItem))
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {},

  updated: function() {}
};
</script>

<style lang="scss" >

</style>
