<template>
  <div class="signupform">
    <form action="" @submit.prevent="signup">
     <div class="container mt-2">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" placeholder="Username" v-model="newUser.username" required>
            </div>
             <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Email" v-model="newUser.email" required>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="newUser.password" required>
            </div>
          
            <div class="form-group">
              <label for="confirmpassword">Phone:</label>
              <input type="number" class="form-control" id="Phone" placeholder="Phone" v-model="newUser.phone" required>
            </div>
            <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="termsandconditions" v-model="newUser.termscheck">
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
import fb,{fs} from '../firebase'
export default {
     name:'signupform',
     data(){
         return{
            newUser:{
                id:null,
                username:'',
                email:'',
                password:'',
                phone:'',
                termscheck:false,
                createdAt:new Date().toDateString(),
                profileImg:null,
                address:null,
                postalCode:null
            }
         }
     },
     methods:{
         signup:function(){
             if(this.newUser.termscheck == false){
               Swal.fire({
                  icon: 'error',
                  title: 'Please Accept Terms And Conditions First !',
                  text: 'Terms And Conditions Not Accepted ',
                  
                })
             }else{
               fb.auth()
              .createUserWithEmailAndPassword(this.newUser.email,this.newUser.password)
              .then((user)=>{
                  this.newUser.id = user.user.uid;
                  fs.collection('Profiles').doc(user.user.uid).set(this.newUser);
                  $('#signmodel').modal('hide');
                  // Toast.fire({
                  //   icon: 'success',
                  //   title: 'User Created Successfully'
                  // })
                  this.$router.replace('admin');
              })
              .catch(err => Swal.fire(err.message))
             }
             
         }
     }
}
</script>

<style>

</style>