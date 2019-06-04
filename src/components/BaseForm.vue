<template lang="pug">
  form._form
    .wrap_btns
      base-button.edit_book(
        v-if="!editBook"
        :class="getValidForm ? '' : 'disabled'"
        :content="btn_add_book.content"
        @click="addBook()"
      )
      template(v-if="editBook")
        base-button.edit(
          v-if="isEditField"
          :content="btn_edit_book.content"
          @click="setEditBook()"
        )
        base-button.save(
          v-if="!isEditField"
          :class="getValidForm ? '' : 'disabled'"
          :content="btn_save_book.content"
          @click="saveBook()"
        )
        base-button.del(
          :class="getValidForm ? '' : 'disabled'"
          :content="btn_del_book.content"
          @click="delBook()"
        )
    base-input.field(
      v-bind="dataBook.book_title"
      @input="setFieldBook"
      :outsideValue="checkedBook.book_title"
      :readonly="isEditField"
    )
    base-input.field(
      v-bind="dataBook.book_cover"
      @input="setFieldBook"
      :outsideValue="checkedBook.book_cover"
      :readonly="isEditField"
    )
    base-textarea.field(
      v-bind="dataBook.book_description"
      @input="setFieldBook"
      :outsideValue="checkedBook.book_description"
      :readonly="isEditField"
    )
    base-input.field(
      v-bind="dataBook.book_author"
      @input="setFieldBook"
      :outsideValue="checkedBook.book_author"
      :readonly="isEditField"
    )
    base-input.field(
      v-bind="dataBook.publishing"
      @input="setFieldBook"
      :outsideValue="checkedBook.publishing"
      :readonly="isEditField"
    )
    base-input.field(
      v-bind="dataBook.code_isbn"
      @input="setFieldBook"
      :outsideValue="checkedBook.code_isbn"
      :readonly="isEditField"
    )
    base-year-input.field(
      v-bind="dataBook.publication_date"
      :maxYear="currentYear"
      @input="setFieldBook"
      :outsideValue="checkedBook.publication_date"
      :readonly="isEditField"
    )
    base-number-input.field(
      v-bind="dataBook.count_pages"
      @input="setFieldBook"
      :outsideValue="checkedBook.count_pages"
      :readonly="isEditField"
    )
    base-input-rating.field(
      v-bind="dataBook.rating"
      @input="setFieldBook"
      :outsideValue="checkedBook.rating"
      :readonly="isEditField"
    )
    base-textarea.field(
      v-bind="dataBook.comments"
      @input="setFieldBook"
      :outsideValue="checkedBook.comments"
      :readonly="isEditField"
    )
    base-textarea.field(
      v-bind="dataBook.notes_book"
      @input="setFieldBook"
      :outsideValue="checkedBook.notes_book"
      :readonly="isEditField"
    )
</template>

<script>
import { setTimeout } from "timers";
import BaseInput from "./BaseInput.vue";
import BaseNumberInput from "./BaseNumberInput.vue";
import BaseTextarea from "./BaseTextarea.vue";
import BaseInputRating from "./BaseInputRating.vue";
import BaseYearInput from "./BaseYearInput.vue";
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    isBook: {
      type: [Object, Boolean],
      required: true
    }
  },
  components: {
    BaseInput,
    BaseNumberInput,
    BaseTextarea,
    BaseInputRating,
    BaseYearInput,
    BaseButton
  },
  data() {
    return {
      dataBook: {
        book_title: {
          bind: "book_title",
          label: "Название",
          maxLength: 100
        },
        book_cover: {
          bind: "book_cover",
          label: "Обложка книги",
          type: "url",
          pattern: '^(ftp|http|https)://[^ "]+$'
        },
        book_description: {
          bind: "book_description",
          label: "Описание",
          maxLength: 100
        },
        book_author: {
          bind: "book_author",
          label: "Автор",
          maxLength: 100
        },
        publishing: {
          bind: "publishing",
          label: "Издательство",
          maxLength: 100
        },
        code_isbn: {
          bind: "code_isbn",
          label: "Код ISBN",
          pattern: "(\\d-?){13}"
        },
        publication_date: {
          bind: "publication_date",
          label: "Год издания",
          minYear: "1000"
        },
        count_pages: {
          bind: "count_pages",
          label: "Количество страниц",
          minNumb: 1,
          maxNumb: 10000
        },
        rating: {
          name: "rating",
          countStars: 5,
          labelRating: "Рейтинг"
        },
        comments: {
          bind: "comments",
          label: "Отзывы тех, кто прочитал",
          maxLength: 200
        },
        notes_book: {
          bind: "notes_book",
          label: "Личные заметки по книге",
          maxLength: 100
        }
      },
      btn_add_book: {
        content: "Добавить книгу",
        status: false
      },
      btn_edit_book: {
        content: "Редактировать книгу"
      },
      btn_save_book: {
        content: "Сохранить изменения"
      },
      btn_del_book: {
        content: "Удалить книгу"
      },
      sendData: {},
      checkedBook: {},
      editBook: false,
      editFields: false
    };
  },
  methods: {
    addBook() {
      this.$store.commit("LoadingState/setContentLoading", "Request API");
      this.$store.commit("LoadingState/setLoading", true);
      this.editFields = true;
      setTimeout(() => {
        this.$store.commit(
          "LoadingState/setContentLoading",
          "API response processing and refreshing data"
        );
        setTimeout(() => {
          this.$store.commit("LoadingState/setLoading", false);
          this.$store.commit("LoadingState/setContentLoading", "");
          this.$router.push("all-books");
        }, 1500);
      }, 1500);
    },
    setFieldBook(data) {
      if (data.value && data.valid) {
        this.sendData[data.name] = data.value;
      } else {
        this.sendData[data.name] = "";
      }
      const keys = Object.keys(this.sendData);
      this.btn_add_book.status = keys.every(this.validForm);
    },
    validForm(field) {
      return !!this.sendData[field];
    },
    setEditBook() {
      this.editFields = false;
    },
    saveBook() {
      this.$store.commit("LoadingState/setContentLoading", "Saving a book");
      this.$store.commit("LoadingState/setLoading", true);
      setTimeout(() => {
        this.$store.commit("LoadingState/setLoading", false);
        this.$store.commit("LoadingState/setContentLoading", "");
        this.$router.push("all-books");
      }, 2000);
    },
    delBook() {
      this.$store.commit("LoadingState/setContentLoading", "Deleting a book");
      this.$store.commit("LoadingState/setLoading", true);
      setTimeout(() => {
        this.$store.commit("LoadingState/setLoading", false);
        this.$store.commit("LoadingState/setContentLoading", "");
        this.$router.push("all-books");
      }, 2000);
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    getValidForm() {
      return this.btn_add_book.status;
    },
    isEditField() {
      return this.editFields;
    }
  },
  beforeMount() {
    const obKeys = Object.keys(this.dataBook);
    obKeys.forEach(field => {
      this.sendData[field] = "";
      this.checkedBook[field] = "";
    });
    this.sendData.maxRating = this.dataBook.rating.countStars;
    // checked book
    const chKeys = Object.keys(this.isBook);
    if (chKeys.length > 0) {
      this.editBook = true;
      this.editFields = true;
      chKeys.forEach(item => {
        this.checkedBook[item] = this.isBook[item];
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
._form {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  @media screen and (width <= 550px) {
    width: 90%;
  }
}

.wrap_btns {
  display: flex;
  margin: 20px auto;
  @media screen and (width <= 400px) {
    flex-direction: column;
  }
}

.edit_book {
  padding: 8px 15px;
  margin: 0 auto;
  background-color: var(--color_green_middle);
  border: 1px solid var(--color_green_middle);
  font-family: var(--Roboto);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s linear, color 0.3s linear;
  &:hover {
    background-color: transparent;
    color: var(--color_green_middle);
  }
  @media screen and (width <= 400px) {
    &:hover {
      background-color: var(--color_green_middle);
      color: white;
    }
  }
}

.edit,
.save,
.del {
  padding: 8px 15px;
  margin: 0 auto;
  border: none;
  font-family: var(--Roboto);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (width <= 400px) {
    &:hover {
      opacity: 1;
    }
  }
}

.edit {
  background-color: var(--color_blue_light);
  margin-right: 10px;
  @media screen and (width <= 400px) {
    margin: 5px auto;
  }
}

.save {
  background-color: var(--color_green_middle);
  margin-right: 10px;
  @media screen and (width <= 400px) {
    margin: 5px auto;
  }
}

.del {
  background-color: var(--color_red);
  margin-left: 10px;
  @media screen and (width <= 400px) {
    margin: 5px auto;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.field {
  margin: 25px auto 0;
  width: 100%;
}
</style>
