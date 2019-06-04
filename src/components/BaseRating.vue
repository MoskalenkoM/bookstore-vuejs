<template lang="pug">
  ._wrap_rating
    .title Rating:
    .wrap_stars
      .star(
        v-for="star in +maxRating"
        :key="star"
        :class="star <= +rating ? 'rating' : ''"
      )
</template>

<script>
export default {
  props: {
    maxRating: {
      type: [String, Number],
      required: true
    },
    rating: {
      type: [Number, String],
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
._wrap_rating {
  display: flex;
  flex-direction: column;
}

.title {
  line-height: 1;
  margin-bottom: 5px;
}

.wrap_stars {
  display: flex;
  align-items: center;
  margin-top: 5px;
  @media screen and (width <= 400px) {
    margin-top: 2px;
  }
}

.star {
  background-color: var(--color_grey_light);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(../assets/img/star.png);
  height: 15px;
  width: 15px;
  margin: 0 5px 0 0;
}

.rating {
  background-color: var(--color_rating);
}
</style>
