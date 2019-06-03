<template lang="pug">
  .error_page
    .message Вы заблудились, но мы Вам поможем =)
    router-link.route(to="all-books") Вернуться на главную
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.error_page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: var(--Roboto);
  margin: auto;
}

.message {
  color: var(--color_red);
}

.route {
  color: var(--color_green_middle);
}
</style>
