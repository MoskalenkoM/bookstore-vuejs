<template lang="pug">
  nav.nav
    router-link.nav_list(to="all-books") Главная
    router-link.nav_list(to="edit-book") Добавить книгу
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  &_list {
    line-height: var(--line_height_1);
    font-size: 14px;
    font-family: var(--Roboto);
    color: var(--color_blue_light);
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 5px;
  }
}

.router-link-active {
  color: var(--color_green);
}
</style>