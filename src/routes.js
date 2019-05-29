import Vue from 'vue';
import VueRouter from 'vue-router';

import TheHome from './views/TheHome.vue';
import BaseAllBooks from './views/pages/BaseAllBooks.vue';
import BaseAddBook from './views/pages/BaseAddBook.vue';
import BaseEditBook from './views/pages/BaseEditBook.vue';
// страница ошибки
import Pagenotfound from './views/pages/404.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TheHome,
      redirect: 'all-books',
      children: [
        {
          path: 'all-books',
          component: BaseAllBooks
        },
        {
          path: 'add-book',
          component: BaseAddBook
        },
        {
          path: 'edit-book',
          component: BaseEditBook
        }
      ]
    },
    {
      path: '*',
      component: Pagenotfound
    }
  ]
});
