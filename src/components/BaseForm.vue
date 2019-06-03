<template lang="pug">
  form._form
    .wrap_btns
      base-button.add_book(
        :class="getValidForm ? '' : 'disabled'"
        :content="btnAddBook.content"
        @click="addBook()"
      )
    base-input.field(v-bind="dataBook.book_title" @input="setFieldBook")
    base-input.field(v-bind="dataBook.book_cover" @input="setFieldBook")
    base-textarea.field(v-bind="dataBook.book_description" @input="setFieldBook")
    base-input.field(v-bind="dataBook.book_author" @input="setFieldBook")
    base-input.field(v-bind="dataBook.publishing" @input="setFieldBook")
    base-input.field(v-bind="dataBook.code_isbn" @input="setFieldBook")
    base-year-input.field(v-bind="dataBook.publication_date" :maxYear="currentYear" @input="setFieldBook")
    base-number-input.field(v-bind="dataBook.number_pages" @input="setFieldBook")
    base-rating.field(v-bind="dataBook.rating" @input="setFieldBook")
    base-textarea.field(v-bind="dataBook.comments" @input="setFieldBook")
    base-textarea.field(v-bind="dataBook.notes_book" @input="setFieldBook")
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseNumberInput from "./BaseNumberInput.vue";
import BaseTextarea from "./BaseTextarea.vue";
import BaseRating from "./BaseRating.vue";
import BaseYearInput from "./BaseYearInput.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseInput,
    BaseNumberInput,
    BaseTextarea,
    BaseRating,
    BaseYearInput,
    BaseButton
  },
  data() {
    return {
      dataBook: {
        book_title: {
          bind: "book_title",
          label: "Название",
          maxLength: 10
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
        number_pages: {
          bind: "number_pages",
          label: "Количество страниц",
          minNumb: 1,
          maxNumb: 10000
        },
        rating: {
          name: "rating",
          countStars: "5",
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
      btnAddBook: {
        content: "Добавить книгу",
        status: false
      },
      sendData: {}
    };
  },
  methods: {
    addBook() {
      // FIXME:
      console.log(this.sendData);
    },
    setFieldBook(data) {
      if (data.value && data.valid) {
        this.sendData[data.name] = data.value;
      } else {
        this.sendData[data.name] = "";
      }
      const keys = Object.keys(this.sendData);
      this.btnAddBook.status = keys.every(this.validForm);
    },
    validForm(field) {
      return !!this.sendData[field];
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    getValidForm() {
      return this.btnAddBook.status;
    }
  },
  beforeMount() {
    const obKeys = Object.keys(this.dataBook);
    obKeys.forEach(field => {
      this.sendData[field] = "";
    });
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

.wrap_btns {
  display: flex;
  margin: 20px auto;
}

.add_book {
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
