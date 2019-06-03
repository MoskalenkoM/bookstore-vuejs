<template lang="pug">
  footer {{ hour < 10 ? '0' + hour : hour }} : {{ min < 10 ? '0' + min : min }} : {{ sec < 10 ? '0' + sec : sec }}
</template>

<script>
export default {
  data() {
    return {
      hour: "",
      min: "",
      sec: "",
      dayNumber: ""
    };
  },
  methods: {
    getTime() {
      setInterval(() => {
        const currentDate = new Date();
        this.hour = currentDate.getHours();
        this.min = currentDate.getMinutes();
        this.sec = currentDate.getSeconds();
        this.dayNumber = currentDate.getDay();
      }, 1000);
    }
  },
  beforeMount() {
    this.getTime();
  }
};
</script>

<style lang="postcss" scoped>
</style>