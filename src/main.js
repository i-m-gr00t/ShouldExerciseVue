import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import { routes } from './router'
import { store } from './store'

import 'bootstrap'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueRouter);

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

let router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});