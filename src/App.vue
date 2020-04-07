<template>
  <div id="app">
  
  <div class="">
      <router-view/>
  </div> 
  </div>
</template>

<script>
import firebase from './firebase'
import {mapActions} from 'vuex'

export default {
     methods:{
       ...mapActions(['createUser','deleteUser'])
     },
     created(){
       firebase.auth().onAuthStateChanged((user)=>{
          if(user && this.$store.state.user == ''){
              const userpayload = {
                 id:firebase.auth().currentUser.uid,
                 email:firebase.auth().currentUser.email,
                 name:firebase.auth().currentUser.displayName
              }

              this.createUser(userpayload);
          }else{
              this.deleteUser();
          }
       })
     }  
}
</script>


<style>

</style>
