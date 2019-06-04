import router from '../../routes';

export default {
  namespaced: true,
  state: {
    allBooks: [
      {
        book_author: 'Лев Толстой',
        book_cover: 'https://5book.ru/uploads/posts/2019-02/1550749662_voina.jpg',
        book_description: 'Война и мир - самый известный роман Льва Николаевича Толстого.',
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
        book_cover:
          'https://kbimages1-a.akamaihd.net/233b7ade-3e89-4dac-a7ae-493af372b051/1200/1200/False/Dnh5bzEzfTy2g8YEePD3lA.jpg',
        book_description: 'Война и мир - самый известный роман Льва Николаевича Толстого.',
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
        book_cover: 'http://xn--90aaubameri.xn--p1ai/data/images/3300010/33000100068.jpg',
        book_description: 'Война и мир - самый известный роман Льва Николаевича Толстого.',
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
        book_cover: 'https://www.bookvoed.ru/files/1836/31/76/75.jpg',
        book_description: 'Война и мир - самый известный роман Льва Николаевича Толстого.',
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
    ],
    matchBook: false,
    countMatchBook: null
  },
  getters: {
    allBooks: state => state.allBooks
  },
  mutations: {
    changeCheckFlag(state, flag) {
      state.matchBook = flag;
    },
    changeCountMatch(state, data) {
      state.countMatchBook = data;
    },
    checkingBookMatch(state, book) {
      state.allBooks.forEach((item, index) => {
        if (book.code_isbn === item.code_isbn && book.publishing === item.publishing) {
          state.matchBook = true;
          state.countMatchBook = index;
        }
      });
    },
    addBook: (state, newBook) => {
      state.allBooks.push(newBook);
    },
    delBook: (state, countBook) => {
      state.allBooks.splice(countBook, 1);
    },
    changeBook(state, dataBook) {
      const pos = dataBook.posBook;
      const { newBook } = dataBook;
      state.allBooks.splice(pos, 1, newBook);
    }
  },
  actions: {
    urlAddBook: (store, newBook) => {
      store.commit('checkingBookMatch', newBook);

      if (store.state.matchBook) {
        alert('This book isbn and a publishing already exists!');
      } else {
        store.commit('addBook', newBook);
        alert('This book was added!');
      }

      store.commit('LoadingState/disablePreloader', '', { root: true });

      if (!store.state.matchBook) {
        router.push('all-books');
      }
      // reset the match flag
      store.commit('changeCheckFlag', false);
    },
    urlDellBook(store, delBook) {
      store.commit('checkingBookMatch', delBook);

      if (!store.state.matchBook) {
        alert("You don't have such a book!");
      } else {
        store.commit('delBook', store.state.countMatchBook);
        // alert message
        alert(`'This book ${delBook.book_title} was deleted!'`);
      }

      store.commit('LoadingState/disablePreloader', '', { root: true });

      if (store.state.matchBook) {
        router.push('all-books');
      }

      // reset the match flag
      store.commit('changeCheckFlag', false);
      store.commit('changeCountMatch', null);
    },
    urlSaveBook(store, books) {
      const { oldBook } = books;
      const { newBook } = books;

      store.commit('checkingBookMatch', oldBook);
      // changing
      store.commit('changeBook', {
        newBook,
        posBook: store.state.countMatchBook
      });
      // alert message
      alert(`'This book ${oldBook.book_title} was changed!'`);

      store.commit('LoadingState/disablePreloader', '', { root: true });
      router.push('all-books');

      // reset the match flag
      store.commit('changeCheckFlag', false);
      store.commit('changeCountMatch', null);
    }
  }
};
