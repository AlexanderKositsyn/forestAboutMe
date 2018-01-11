<template lang="pug">
li.about-content__item
    .title.about-content__title {{typeSkill}}
    table.about-content__table
        //- тут filteredSkills это отфильтрованные объекты, поэтому тут это ссылки на $store.skills
        tr.about-content__row(v-for='skill in filteredSkills')
            td.about-content__cell-skill
                span {{skill.name}}
            td.about-content__cell-number
                input.about-content__input(v-model="skill.percent")
            td.about-content__cell-percent
                span %
    
    
</template>

<script>
export default {
  props: {
    typeSkill: String,
    skillKey: String
  },
  computed: {
    filteredSkills() {
      // возьмем массив скилов с объектами
      let skills = this.$store.state.skills;
      // в зависимоти от пришедшего от родителя ключа типа скилов фильтруем все объекты в  массиве skills
      switch (this.skillKey) {
        case "1":
          {
            return skills.filter(item => item.type === "1");
          }
          break;
        case "2":
          {
            return skills.filter(item => item.type === "2");
          }
          break;
        case "3": {
          return skills.filter(item => item.type === "3");
        }
      }
    }
  }
};
</script>


<style src='styles/aboutContentListItem.scss'  lang='scss' scoped>

</style>