<template lang="pug">
  button(:type="btnType" @click="click") {{ content }}
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      required: false,
      default: "button"
    },
    content: {
      type: String,
      required: false,
      default: ""
    },
    event: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
