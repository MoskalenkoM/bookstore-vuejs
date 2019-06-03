import Vue from 'vue';
import Vuex from 'vuex';

import AllBooks from './modules/AllBooks';
import LoadingState from './modules/LoadingState';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AllBooks,
    LoadingState
  },
  strict: process.env.NODE_ENV !== 'production'
});
