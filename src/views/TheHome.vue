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
  min-height: 100%;
  width: var(--width_100);
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  max-width: var(--max_width);
  width: var(--width_100);
  margin: 0 auto auto;
}

.main {
  display: flex;
  height: 100%;
  max-width: var(--max_width);
  width: var(--width_100);
  margin: auto;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  max-width: var(--max_width);
  width: var(--width_100);
  font-family: var(--RobotoBold);
  margin: 25px auto 0;
  color: var(--color_green_middle);
}
</style>
