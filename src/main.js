import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'simplebar';


import './assets/index.scss'

Vue.use(BootstrapVue) 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
