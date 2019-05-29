import Vue from 'vue';
import App from './App.vue';

import store from './store/index';
import router from './routes';

import './assets/css/main.css';

/* eslint no-unused-vars: 'off' */
const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#bookstore');
