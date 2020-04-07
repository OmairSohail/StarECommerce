import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/app.css'
import jQuery from 'jquery';
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueFirestore from 'vue-firestore'

window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false

Vue.use(VueFirestore)

Vue.component('navbarcomponent',require('./components/navBar.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
