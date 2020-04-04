import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/app.css'

Vue.config.productionTip = false



Vue.component('navbarcomponent',require('./components/navBar.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
