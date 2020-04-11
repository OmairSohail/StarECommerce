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
import fb,{fs} from './firebase'

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

// FIREBASE STATE CHANGE 
fb.auth().onAuthStateChanged((user)=>{
  if(user && store.state.user == ''){
    let id = fb.auth().currentUser.uid;
    var docRef = fs.collection("Profiles").doc(id);
     
    docRef.get().then((doc) => {
        if (doc.exists) {
            const userPayload = {
               id:doc.data().id,
               name:doc.data().username,
               email:doc.data().email,
               profileImg:doc.data().profileImg 
            }
            store.dispatch('createUser',userPayload)
            console.log("Document data:", doc.data());
        } else {
                console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });     
     
  }else{
     store.dispatch('deleteUser');
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
