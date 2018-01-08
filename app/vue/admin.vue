<template lang="pug">
  #admin.admin
      admin-header
      admin-tabs
      router-view
      
</template>

<script>
import adminHeader from "./components/adminHeader.vue";
import adminTabs from "./components/adminTabs.vue";

export default {
  data() {
    return {};
  },
  components: {
    "admin-header": adminHeader,
    "admin-tabs": adminTabs
  }
};
</script>

<style src='styles/admin.scss' lang='scss' scoped>

</style>


