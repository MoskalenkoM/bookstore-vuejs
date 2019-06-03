<template lang="pug">
  ._loading {{ contentLoading }} {{ loading }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tic: "."
    };
  },
  computed: {
    ...mapGetters("LoadingState", {
      contentLoading: "contentLoading"
    }),
    loading() {
      return this.tic;
    }
  },
  methods: {
    ticTic() {
      setInterval(() => {
        if (this.tic.length <= 5) {
          this.tic += ".";
        } else {
          this.tic = ".";
        }
      }, 250);
    }
  },
  beforeMount() {
    this.ticTic();
  }
};
</script>

<style lang="postcss" scoped>
</style>
