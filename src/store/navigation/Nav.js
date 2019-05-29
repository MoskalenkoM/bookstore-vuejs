export default {
  namespaced: true,
  state: {
    nav: [
      {
        url: '/',
        title: 'Главная'
      },
      {
        url: '/add-book',
        title: 'Добавить книгу'
      }
    ]
  },
  getters: {
    nav(state) {
      return state.nav;
    }
  },
  mutations: {}
};
