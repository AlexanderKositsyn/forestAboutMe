<template lang="pug">
  #admin.admin
      admin-header
      admin-tabs
      admin-content(
        :skills='skills'
      )
      
</template>

<script>
import adminContent from "./components/aboutContent.vue";
import adminHeader from "./components/adminHeader.vue";
import adminTabs from "./components/adminTabs.vue";

export default {
  data() {
    return {
      skills: [
        {
          id: 0,
          name: "HTML",
          percent: "50",
          type: "1"
        },
        {
          id: 1,
          name: "CSS",
          percent: "10",
          type: "1"
        },
        {
          id: 2,
          name: "PHP",
          percent: "20",
          type: "2"
        },
        {
          id: 3,
          name: "NODE",
          percent: "30",
          type: "2"
        },
        {
          id: 4,
          name: "webpack",
          percent: "50",
          type: "3"
        },
        {
          id: 5,
          name: "gulp",
          percent: "90",
          type: "3"
        }
      ]
    };
  },
  components: {
    "admin-content": adminContent,
    "admin-header": adminHeader,
    "admin-tabs": adminTabs
  }
};
</script>

<style src='styles/admin.scss' lang='scss' scoped>

</style>


