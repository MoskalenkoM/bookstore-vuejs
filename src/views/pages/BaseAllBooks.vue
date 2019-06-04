<template lang="pug">
  .all_books
    base-book-card.base_book_card(
      v-for="(book, index) in allBooks"
      :key="index"
      :book="book"
    )
</template>

<script>
import { mapGetters } from "vuex";

import BaseBookCard from "../../components/BaseBookCard.vue";

export default {
  components: {
    BaseBookCard
  },
  methods: {},
  computed: {
    ...mapGetters("AllBooks", {
      allBooks: "allBooks"
    })
  }
};
</script>

<style lang="postcss" scoped>
.all_books {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.base_book_card {
  margin: 20px;
  width: 350px;
  cursor: pointer;
  transition: box-shadow 0.3s linear;
  &:hover {
    box-shadow: 1px 1px 10px 0 var(--color_green_middle);
  }
  @media screen and (width <= 400px) {
    margin: 10px;
    width: 300px;
  }
}
</style>
