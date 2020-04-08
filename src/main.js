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
import Swal from 'sweetalert2'

window.$ = window.jQuery = jQuery;

// SWEETALERT
window.Swal = Swal;
window.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})




Vue.config.productionTip = false

Vue.use(VueFirestore,{
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.component('navbarcomponent',require('./components/navBar.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
