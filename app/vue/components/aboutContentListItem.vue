<template lang="pug">
li.about-content__item
    .title.about-content__title {{typeSkill}}
    table.about-content__table
        //- тут filteredSkills это отфильтрованные объекты, поэтому тут это ссылки на $store.skills
        about-content-list-item-row(
          ref="listItemRow"
          v-for='skill in filteredSkills'
          :skill = 'skill' 
        )
    
    
</template>

<script>
import aboutContentListItemRow from "./aboutContentListItemRow.vue";

export default {
  props: {
    typeSkill: String,
    skillKey: String
  },
  validators: {},
  computed: {
    filteredSkills() {
      // возьмем массив скилов с объектами
      let skills = this.$store.state.skills;
      // в зависимоти от пришедшего от родителя ключа типа скилов фильтруем все объекты в  массиве skills
      // проверив есть ли они
      if (skills.lenght !== 0) {
        switch (this.skillKey) {
          case "1":
            {
              return skills.filter(item => item.type === 1);
            }
            break;
          case "2":
            {
              return skills.filter(item => item.type === 2);
            }
            break;
          case "3": {
            return skills.filter(item => item.type === 3);
          }
        }
      }
    }
  },
  components: {
    "about-content-list-item-row": aboutContentListItemRow
  },
  mounted() {}
};
</script>


<style src='styles/aboutContentListItem.scss'  lang='scss' scoped>

</style>
