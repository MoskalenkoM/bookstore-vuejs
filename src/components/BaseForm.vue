<template lang="pug">
  form._form
    base-input.field(
      bind="book_title"
      label="Название"
      required=true
    )
    base-input.field(
      bind="book_cover"
      label="Обложка книги"
      required=true
    )
    base-textarea.field(
      bind="book_description"
      label="Описание"
      :maxlength="book_description.maxLength"
      required=true
    )
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseTextarea from "./BaseTextarea.vue";

export default {
  components: {
    BaseInput,
    BaseTextarea
  },
  data() {
    return {
      book_description: {
        maxLength: 10
      }
    };
  }
};
</script>

<style lang="postcss" scoped>
._form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
}

.field {
  margin: 46px auto 0;
  width: 100%;
}
</style>
