<template lang="pug">
  p(@click="EditBook") All books
</template>

<script>
export default {
  methods: {
    EditBook() {
      this.$router.push("edit-book");
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
