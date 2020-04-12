<template>
  <div class="profile">
     <div class="container">
         <div class="showcase2">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-lg-4 box">
               <h2>Profile</h2>
               <h5 class="text-muted">Change Your Profile Settings</h5>
            </div>
            <div class="col-lg-6 image-container">
               <img src="../assets/profilesvg.svg" alt="">
            </div>
            </div>
            
            
         </div>
         
         <div class="container setting">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
               <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-home" aria-selected="true">Profile</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" id="pills-account-tab" data-toggle="pill" href="#pills-account" role="tab" aria-controls="pills-profile" aria-selected="false">Change Password</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" id="pills-email-tab" data-toggle="pill" href="#pills-email" role="tab" aria-controls="pills-email" aria-selected="false">Change Email</a>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
           
               <div class="row">
                  <div class="col">
                     <label for="username">Username:</label>
                     <input type="text" id="username" class="form-control m-0" placeholder="Username" v-model="Profile.username">
                  </div>
                  <!-- <div class="col">
                     <label for="email">Email:</label>
                     <input type="text" id="email" class="form-control m-0" placeholder="Email" v-model="Profile.email">
                  </div> -->
                  <div class="col">
                     <label for="phone">Phone:</label>
                     <input type="text" id="phone" class="form-control m-0" placeholder="Phone" v-model="Profile.phone">
                  </div>
                  <div class="col-12">
                     <label for="address" class="mt-4">Address:</label>
                     <input type="text" id="address" class="form-control m-0" placeholder="Address" v-model="Profile.address">
                  </div>
                  <div class="col-12" >
                     <label for="postalcode" class="mt-4">PostalCode:</label>
                      <input type="text" id="postalcode" class="form-control m-0" placeholder="Postal Code" v-model="Profile.postalCode">
                  </div>
                   <div class="col-6">
                     <button class="btn btn-primary mt-3 float-left" @click="profileUpdate()">Save Changes</button>
                  </div>
                  <div class="col">
                     <div class="custom-file mt-2">
                     <input type="file" class="custom-file-input" id="customFile" v-on:change="uploadImage($event)">
                     <label class="custom-file-label m-2" for="customFile">Choose Your Profile Image</label>
                     </div>
                  </div>
               </div>
               
            </div>
            <div class="tab-pane fade" id="pills-account" role="tabpanel" aria-labelledby="pills-account-tab">
            
               <div class="row">
                  <h2 class="text-muted ml-3"> Send A Password Reset Email ? </h2>
                  <hr>
                  <div class="col-12">
                      <button class="btn btn-primary" :class="{'d-none':emailSent}" @click="resetPassword()">Send Reset Email</button>
                      <h4 v-if="emailSent" class="text-muted">Reset Email Had Been Sent</h4>
                  </div>
               </div>
   
            </div>

               <div class="tab-pane fade" id="pills-email" role="tabpanel" aria-labelledby="pills-email-tab">
             
               <div class="row">
                  <h3 class="text-muted ml-3">Change Your Email</h3>
                  <hr>
                  <div class="col-12 mt-4">
                   <input type="text" class="form-control m-0" placeholder="Email" v-model="email">
                  </div>
                  <div class="col-12">
                     <button class="btn btn-secondary mt-3" @click="updateEmail()">Save Changes</button>
                  </div>  
              
                </div>
            </div>
            </div>

          
         </div>
         <br>
         <div class="jumbotron mt-5">
         </div>
     </div>
  </div>
</template>

<script>
import fb,{fs} from '../firebase'
import {mapActions} from 'vuex'
export default {
   name:'profile',
   firestore(){
      const user = fb.auth().currentUser.uid; 
      return{
         Profile:fs.collection('Profiles').doc(user)
      }
   },
   data(){
      return{
         Profile:[],
         emailSent:false,
         email:null
        
      }
   },
   methods:{
       ...mapActions(['createUser']),
       profileUpdate(){
           this.$firestore.Profile.update(this.Profile);
            
          

            Toast.fire({
              icon: 'success',
              title: 'Profile Updated Successfully'
            })

           
       },
       uploadImage(e){
          let file = e.target.files[0];
          console.log(file);
          const storageRef = fb.storage().ref('Profile/'+file.name);
          var uploadTask = storageRef.put(file);
          uploadTask.on('state_changed', (snapshot) => {
          
         }, (error) => {
            
         }, () => {
         
         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
             Toast.fire({
              icon: 'success',
              title: 'Image Uploaded Successfully'
            })
             this.Profile.profileImg = downloadURL;
              this.createUser({
              id:this.Profile.id,
              name:this.Profile.username,
              email:this.Profile.email,
              profileImg:this.Profile.profileImg
           });
         });
         });


       },
       resetPassword(){
         const auth = fb.auth();
         
         auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
             this.emailSent = true;

            Toast.fire({
              icon: 'success',
              title: 'Password Reset Email Has Been Sent'
            })

           
         }).catch((error) => {
            Swal.fire({
               icon: 'error',
               text: error,
               })
         });
       },
       updateEmail(){
         if(this.email == null){
             Swal.fire({
               icon: 'error',
               text: 'Email cant be Empty',
             })
         } 
         let user = fb.auth().currentUser;

         user.updateEmail(this.email).then(() => {
               this.Profile.email = this.email;
                this.createUser({
                     id:this.Profile.id,
                     name:this.Profile.username,
                     email:this.Profile.email,
                     profileImg:this.Profile.profileImg
                  });
            // Update successful.
            Toast.fire({
               icon: 'success',
               title: 'Email Has Been Updated'
               })
         }).catch((error) => {
           Swal.fire({
               icon: 'error',
               text: error,
            })
         });
       }
       
       
   }
}
</script>

<style scoped>
.showcase2{
    height:100vh;
    overflow:hidden;
   
}

.image-container img{
   width:30rem;
   height:30rem;
}

.settings{
   height:50vh;
   width:100%;
}
</style>