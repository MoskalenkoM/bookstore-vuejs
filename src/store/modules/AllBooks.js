export default {
  namespaced: true,
  state: {
    allBooks: [
      {
        book_author: 'Лев Толстой',
        book_cover:
          'https://5book.ru/uploads/posts/2019-02/1550749662_voina.jpg',
        book_description:
          'Война и мир - самый известный роман Льва Николаевича Толстого.',
        book_title: 'ВОЙНА И МИР 1',
        code_isbn: '978-5-699-11426-9',
        comments:
          'Прочитала книгу в школе от начала до конца и как ни странно - в полном формате, даже заучивали отрывок из нее - небо Аустерлица!До сих пор помню',
        notes_book: 'заметка 1',
        count_pages: 308,
        publication_date: '2008',
        publishing: 'Эксмо',
        rating_max: '5',
        rating: '3'
      },
      {
        book_author: 'Лев Толстой',
        book_cover: '',
        book_description:
          'Война и мир - самый известный роман Льва Николаевича Толстого.',
        book_title: 'ВОЙНА И МИР 2',
        code_isbn: '978-4-699-11434-9',
        comments:
          'Прочитала книгу в школе от начала до конца и как ни странно - в полном формате, даже заучивали отрывок из нее - небо Аустерлица!До сих пор помню',
        notes_book: 'заметка 2',
        count_pages: 322,
        publication_date: '2008',
        publishing: 'Эксмо',
        rating_max: '5',
        rating: '4'
      },
      {
        book_author: 'Лев Толстой',
        book_cover: '',
        book_description:
          'Война и мир - самый известный роман Льва Николаевича Толстого.',
        book_title: 'ВОЙНА И МИР 3',
        code_isbn: '978-3-699-10034-9',
        comments:
          'Прочитала книгу в школе от начала до конца и как ни странно - в полном формате, даже заучивали отрывок из нее - небо Аустерлица!До сих пор помню',
        notes_book: 'заметка 3',
        count_pages: 346,
        publication_date: '2008',
        publishing: 'Эксмо',
        rating_max: '5',
        rating: '5'
      },
      {
        book_author: 'Лев Толстой',
        book_cover: '',
        book_description:
          'Война и мир - самый известный роман Льва Николаевича Толстого.',
        book_title: 'ВОЙНА И МИР 4',
        code_isbn: '943-7-699-10034-9',
        comments:
          'Прочитала книгу в школе от начала до конца и как ни странно - в полном формате, даже заучивали отрывок из нее - небо Аустерлица!До сих пор помню',
        notes_book: 'заметка 4',
        count_pages: 202,
        publication_date: '2008',
        publishing: 'Эксмо',
        rating_max: '5',
        rating: '2'
      }
    ]
  },
  getters: {
    allBooks: state => state.allBooks
  },
  mutations: {
    addBook: (state, book) => {
      state.allBooks.push(book);
    }
  },
  actions: {
    urlAddBook: (store, book) => {
      store.commit('addBook', book);
    }
  }
};
