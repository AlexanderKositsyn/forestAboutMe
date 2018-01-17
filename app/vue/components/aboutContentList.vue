<template lang="pug">
    ul.about-content__list
      about-content-list-item(
        ref="listItem"
        v-for='(typeSkill, skillKey) in typeSkills'
        :skillKey = 'skillKey'
        :typeSkill = 'typeSkill'
        :key='typeSkill'
      )
    
    
</template>

<script>
import aboutContentListItem from "./aboutContentListItem.vue";
export default {
  computed: {
    // возьмем скилы из хранилища
    typeSkills() {
      return this.$store.state.typeSkills;
    }
  },
  data() {
    return {};
  },
  components: {
    "about-content-list-item": aboutContentListItem
  }
};
</script>


<style src='styles/aboutContentList.scss'  lang='scss' scoped>

</style>
