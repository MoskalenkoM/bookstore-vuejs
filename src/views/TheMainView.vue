<template lang="pug">
  .main_view(:class="isLoading ? 'loading_page' : ''")
    base-preloader.base_preloader(v-if="isLoading")
    base-header.header
    main.main
      router-view
    base-footer.footer
</template>

<script>
import { mapGetters } from "vuex";

import BaseHeader from "./common/BaseHeader.vue";
import BaseFooter from "./common/BaseFooter.vue";
import BasePreloader from "../components/BasePreloader.vue";

export default {
  components: {
    BaseHeader,
    BaseFooter,
    BasePreloader
  },
  computed: {
    ...mapGetters("LoadingState", {
      isLoading: "isLoading"
    })
  },
  beforeMount() {
    if (this.$route.path === "/") {
      this.$router.push("all-books");
    }
  }
};
</script>

<style lang="postcss" scoped>
.main_view {
  min-height: 100%;
  width: var(--width_100);
  display: flex;
  flex-direction: column;
  position: relative;
}

.loading_page {
  height: 100%;
  width: 100vw;
  overflow: hidden;
}

.base_preloader {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color_grey_light);
  opacity: 0.85;
  display: flex;
  justify-content: center;
  padding: 50px;
  font-family: var(--RobotoBold);
  font-size: 30px;
  color: var(--color_blue);
  z-index: 100;
  text-align: center;
  @media screen and (width <= 400px) {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
}

.header {
  display: flex;
  max-width: var(--max_width);
  width: var(--width_100);
  margin: 0 auto;
}

.main {
  display: flex;
  height: 100%;
  max-width: var(--max_width);
  width: var(--width_100);
  margin: 0 auto auto;
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
