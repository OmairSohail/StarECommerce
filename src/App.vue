<template>
  <div id="app">
  
  <div class="">
      <router-view/>
  </div> 
  </div>
</template>

<script>
import fb from './firebase'
import {mapActions} from 'vuex'

export default {
     methods:{
       ...mapActions(['createUser','deleteUser'])
     },
     created(){
       fb.auth().onAuthStateChanged((user)=>{
          if(user && this.$store.state.user == ''){
              const userpayload = {
                 id:fb.auth().currentUser.uid,
                 email:fb.auth().currentUser.email,
                 name:fb.auth().currentUser.displayName
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
