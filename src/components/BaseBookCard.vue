<template lang="pug">
  ._wrap_card(@click="click")
    .cover(:style="{'background-image': `url(${setBgImg})`}")
    .content
      p.title {{ book.book_title }}
      p.descr {{ book.book_description }}
    base-rating.base_rating(:maxRating="book.rating_max" :rating="book.rating")
</template>

<script>
import BaseRating from "./BaseRating.vue";

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  components: {
    BaseRating
  },
  computed: {
    setBgImg() {
      return this.book.book_cover === ""
        ? "https://via.placeholder.com/681x681.png"
        : this.book.book_cover;
    }
  },
  methods: {
    click() {
      this.$router.push({ name: "editbook", params: this.book, props: true });
    }
  }
};
</script>

<style lang="postcss" scoped>
._wrap_card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color_grey_light);
  border-radius: 3px;
}

.cover {
  height: 350px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.content {
  padding: 20px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: var(--Roboto);
  color: var(--color_blue_light);
  font-size: 16px;
}

.title,
.descr {
  margin: 0;
  line-height: var(--line_height_1);
}

.title {
  margin-bottom: 7px;
  font-size: 18px;
  line-height: var(--line_height_1);
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.descr {
  height: 25px;
  width: 100%;
  margin-top: 7px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.base_rating {
  border-top: 1px solid var(--color_grey_light_more);
  background-color: var(--color_grey_light_more);
  font-family: var(--Roboto);
  color: var(--color_blue_light);
  padding: 10px 15px;
}
</style>
