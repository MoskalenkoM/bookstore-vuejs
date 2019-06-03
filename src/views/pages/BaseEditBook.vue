<template lang="pug">
  base-form(:isBook="checkedBook")
</template>

<script>
import BaseForm from "../../components/BaseForm.vue";

export default {
  components: {
    BaseForm
  },
  data() {
    return {
      checkedBook: {}
    };
  },
  beforeMount() {
    this.checkedBook = this.$route.params;
  }
};
</script>

<style lang="postcss" scoped>
</style>
