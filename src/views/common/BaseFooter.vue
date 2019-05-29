<template lang="pug">
  footer {{ currentYear }}
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>