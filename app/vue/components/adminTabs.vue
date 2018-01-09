<template lang="pug">
.admin-tabs
  //- router-link.admin-tabs__link(to="/blog" v-for='tab in tabs').
  //-   {{tab}}
  router-link.admin-tabs__link(to="/").
    {{tabs[0]}}
  router-link.admin-tabs__link(to="/blog").
    {{tabs[1]}}
  router-link.admin-tabs__link(to="/work").
    {{tabs[2]}}
    
    
</template>

<script>
export default {
  data() {
    return {
      tabs: ["TAB1", "TAB2", "TAB3", "TAB4"]
    };
  }
};
</script>

<style src='styles/adminTabs.scss' lang='scss' scoped>

</style>