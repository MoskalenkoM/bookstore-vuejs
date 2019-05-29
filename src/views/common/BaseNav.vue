<template lang="pug">
  nav.nav
    ul.nav_list
      router-link(
      v-for="(item, index) in nav"
      :key="index"
      :to="item.url"
      tag="li"
      class="nav_list__item"
      active-class="nav_list__item-active")
        a.nav_link {{ item.title }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("BaseNav", {
      nav: "nav"
    })
  }
};
</script>

<style lang="postcss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  &_list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    line-height: var(--line_height_1);
    font-size: 14px;
    font-family: var(--Roboto);
    color: var(--color_blue);
    &__item {
      margin: auto 10px;
      &-active {
        color: var(--color_green);
      }
    }
  }
}

.nav_link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  height: 100%;
  width: 100%;
  padding: 5px 10px;
  text-decoration: none;
  transition: color 0.2s linear, background-color 0.3s linear;
  &:hover {
    background-color: var(--color_grey_light);
    color: white;
  }
}
</style>