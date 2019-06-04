<template lang="pug">
  .all_books
    .wrap_books(v-if="allBooks.length > 0")
      base-book-card.base_book_card(
        v-for="(book, index) in allBooks"
        :key="index"
        :book="book"
      )
    .no_books(v-if="allBooks.length === 0") You haven't books
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
  margin: 0 auto;
}

.wrap_books {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.no_books {
  margin: 50% auto;
  color: var(--color_red);
  font-family: var(--Roboto);
  font-size: 20px;
  @media screen and (width <= 400px) {
    font-size: 16px;
  }
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
