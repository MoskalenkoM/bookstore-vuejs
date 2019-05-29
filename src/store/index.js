import Vue from 'vue';
import Vuex from 'vuex';

import AllBooks from './modules/AllBooks';
// navigation
import BaseNav from './navigation/Nav';
// translation
import Locales from './locales/Locales';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AllBooks,
    BaseNav,
    ...Locales
  },
  strict: process.env.NODE_ENV !== 'production'
});
