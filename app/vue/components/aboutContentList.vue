<template lang="pug">
    ul.about-content__list
      about-content-list-item()
    
    
</template>

<script>
import aboutContentListItem from "./aboutContentListItem.vue";
export default {
  data() {
    return {};
  },
  components: {
    "about-content-list-item": aboutContentListItem
  }
};
</script>


<style src='styles/aboutContent.scss'  lang='scss' scoped>

</style>