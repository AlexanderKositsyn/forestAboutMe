<template lang="pug">
  #admin.admin
      admin-header
      admin-tabs
      admin-content
      
</template>

<script>
import adminContent from "./components/aboutContent.vue";
import adminHeader from "./components/adminHeader.vue";
import adminTabs from "./components/adminTabs.vue";

export default {
  data() {
    return {};
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


