<template lang="pug">
  .main_view
    base-header.header
    main.main
      router-view
    base-footer.footer
</template>

<script>
import BaseHeader from "./common/BaseHeader.vue";
import BaseFooter from "./common/BaseFooter.vue";

export default {
  components: {
    BaseHeader,
    BaseFooter
  }
};
</script>

<style lang="postcss" scoped>
.main_view {
  min-height: var(--height_100);
  height: var(--height_100);
  width: var(--width_100);
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  max-width: var(--max_width);
  width: var(--width_100);
  margin: 0 auto auto;
  border-bottom: 1px solid var(--color_grey_middle);
}

.main {
  display: flex;
  height: 100%;
  max-width: var(--max_width);
  width: var(--width_100);
  margin: 0 auto;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: var(--max_width);
  width: var(--width_100);
  font-family: var(--RobotoBold);
  margin: auto auto 0;
  border-top: 1px solid var(--color_grey_middle);
  color: var(--color_blue);
}
</style>
