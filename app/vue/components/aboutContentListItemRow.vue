<template lang="pug">
 tr.about-content__row
    td.about-content__cell-skill
        span {{skillObject.name}}
    td.about-content__cell-number
        input.about-content__input(v-model="skillObject.percents")
        <div class="about-content__error-message">{{ validation.firstError('skillObject.percents') }}</div>
    td.about-content__cell-percent
        span %
    
    
</template>

<script>
var SimpleVueValidation = require("simple-vue-validator");
var Validator = SimpleVueValidation.Validator;
export default {
  props: {
    skill: Object
  },
  validators: {
    "skillObject.percents": function(value) {
      return Validator.value(value)
        .required()
        .digit()
        .between(0, 100);
    }
  },
  methods: {
    validate: function() {
      return this.$validate().then(
        function(success) {
          if (success) {
            return { percents: this.skillObject.percents };
          }
        }.bind(this)
      );
    }
  },
  computed: {
    skillObject() {
      return this.skill;
    }
  },
  mounted() {}
};
</script>


<style src='styles/aboutContentListItemRow.scss'  lang='scss' scoped>

</style>
