// ALL FIREBASE SERVICES WILL BE CODED HERE 
import firebase from 'firebase'



// FIREBASE INITIALIZATION 

const firebaseConfig = {
    apiKey: "AIzaSyChQ6lM5-Z-0ATHPtnY1yXvFaOem5_A-m8",
    authDomain: "vue-shop-84791.firebaseapp.com",
    databaseURL: "https://vue-shop-84791.firebaseio.com",
    projectId: "vue-shop-84791",
    storageBucket: "vue-shop-84791.appspot.com",
    messagingSenderId: "645733810156",
    appId: "1:645733810156:web:30ef5f15a1506153ba4ac9",
    measurementId: "G-8WEK3QXRJL"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;