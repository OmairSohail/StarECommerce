<template>
  <div class="signupform">
    <form action="" @submit.prevent="signup">
     <div class="container mt-2">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" placeholder="Username" v-model="username" required>
            </div>
             <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
            </div>
          
            <div class="form-group">
              <label for="confirmpassword">Confirm Password:</label>
              <input type="password" class="form-control" id="confirmpassword" placeholder="Confirm Password" v-model="confirmpassword" required>
            </div>
            <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="termsandconditions" v-model="termscheck">
                  <label class="custom-control-label" for="termsandconditions">I Agree To The Terms And Conditions</label>
            </div>
            <div class="form-group">
              <button class="btn btn-primary mt-2 btn-block" type="submit">SignUp</button>
            </div>
   </div>
    </form>
  </div>
</template>

<script>
import fb from '../firebase'
export default {
     name:'signupform',
     data(){
         return{
             username:'',
             email:'',
             password:'',
             confirmpassword:'',
             termscheck:false,
         }
     },
     methods:{
         signup:function(){
             fb.auth()
             .createUserWithEmailAndPassword(this.email,this.password)
             .then(()=>{
                 this.username = '';
                 this.email = '';
                 this.password = '';
                 this.confirmpassword = '';
                 this.termscheck = false;
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