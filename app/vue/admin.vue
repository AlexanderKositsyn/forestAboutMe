<template lang="pug">
  #admin.admin
      admin-header
      admin-tabs
      router-view
      
</template>

<script>
import adminHeader from "./components/adminHeader.vue";
import adminTabs from "./components/adminTabs.vue";
import axios from "axios";

export default {
  data() {
    return {};
  },
  components: {
    "admin-header": adminHeader,
    "admin-tabs": adminTabs
  },
  created() {
    let store = this.$store;
    //возьмем все скилы из БД и запишем их в state
    axios
      .get("/api/about")
      .then(function(response) {
        console.log("from /api/about response");
        console.log(response.data.skills);
        // когда придет ответ запишем в store
        store.commit("setSkillsBD", response.data.skills);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style src='styles/admin.scss' lang='scss' scoped>

</style>
