<template lang="pug">
  .all_books(@click="EditBook") All books
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
.all_books {
  margin: auto;
}
</style>
