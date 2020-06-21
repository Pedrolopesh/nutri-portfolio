import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
// import axios from './util/axios'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuesax from 'vuesax'
import 'simplebar';
import 'material-icons/iconfont/material-icons.css';

Vue.prototype.$http = axios

import './assets/index.scss'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

export { axios }