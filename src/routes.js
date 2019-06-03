import Vue from 'vue';
import VueRouter from 'vue-router';

import TheMainView from './views/TheMainView.vue';
import BaseAllBooks from './views/pages/BaseAllBooks.vue';
import BaseEditBook from './views/pages/BaseEditBook.vue';
// error page
import Pagenotfound from './views/404.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TheMainView,
      children: [
        {
          path: 'all-books',
          component: BaseAllBooks
        },
        {
          path: 'edit-book',
          name: 'editbook',
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
