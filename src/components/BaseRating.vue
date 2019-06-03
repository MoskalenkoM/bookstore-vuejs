<template lang="pug">
  ._wrap_rating
    .title_rating {{ labelRating }}
    .wrap_star(v-for="item in getCountStars" :key="item")
      .title {{ item  }}
      label.label(
        :for="item"
        :class="getCurrentChecked >= item ? 'checked_stars' : ''"
      )
      input.input(
        :id="item"
        type="radio"
        :name="name"
        @input="setChecked"
        hidden
      )
</template>

<script>
export default {
  props: {
    countStars: {
      type: String,
      required: false,
      default: "1"
    },
    labelRating: {
      type: String,
      required: false,
      default: ""
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentChecked: 0,
      currentHover: 0
    };
  },
  methods: {
    setChecked(e) {
      this.currentChecked = e.target.id;
      this.$emit("input", {
        name: this.name,
        value: this.currentChecked,
        valid: +this.currentChecked > 0
      });
    }
  },
  computed: {
    getCountStars() {
      return +this.countStars;
    },
    getCurrentChecked() {
      return +this.currentChecked;
    }
  }
};
</script>

<style lang="postcss" scoped>
._wrap_rating {
  display: flex;
  flex-wrap: wrap;
}

.title_rating {
  line-height: 1;
  margin: 0 auto 20px 0;
  width: 100%;
  font-size: 16px;
  font-family: var(--RobotoBold);
  color: var(--color_grey_dark);
}

.wrap_star {
  margin: 0 5px 0 0;
  position: relative;
  &:hover > .title {
    bottom: 120%;
  }
}

.title {
  position: absolute;
  left: 0;
  bottom: 20%;
  width: 100%;
  font-family: var(--RobotoBold);
  font-size: 12px;
  line-height: 1;
  text-align: center;
  color: var(--color_rating);
  transition: bottom 0.3s linear;
}

.label {
  display: block;
  height: 25px;
  width: 25px;
  position: relative;
  cursor: pointer;
  background-color: var(--color_grey_light);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("../assets/img/star.png");
  transition: background-color 0.3s linear;
  &:hover {
    background-color: var(--color_rating);
  }
}

.checked_stars {
  background-color: var(--color_rating);
}
</style>
