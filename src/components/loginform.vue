<template>
  <div class="login">
      <form action="" @submit.prevent="login" @keyup.enter="login">
       <div class="container mt-2">
         <div class="form-group">
              <label for="loginemail">Email:</label>
              <input type="email" class="form-control" id="loginemail" placeholder="Your Email" v-model="email">
            </div>
            <div class="form-group">
              <label for="loginpassword">Password:</label>
              <input type="password" class="form-control" id="loginpassword" placeholder="Your Password" v-model="password">
            </div>
            <div class="form-row">
              <div class="col">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="rememberme" v-model="rememberme">
                  <label class="custom-control-label" for="rememberme">Remember me ?</label>
                </div>
              </div>
              
            </div>
            <div class="form-group">
              <button class="btn btn-primary mt-2 btn-block" type="submit">Login</button>
            </div>
   </div> 
    </form> 
  </div>
</template>

<script>
import firebase from '../firebase'
export default {
    name:'login',
    data(){
        return{
            email:'',
            password:'',
            rememberme:false,
        }
    },
    methods:{
        login:function(){
            firebase.auth()
            .signInWithEmailAndPassword(this.email,this.password)
            .then(()=>{
               $('#signmodel').modal('hide');
               this.$router.replace('admin');
            })
            .catch(err => console.log(err.message))
        }
    }
}
</script>

<style>

</style>