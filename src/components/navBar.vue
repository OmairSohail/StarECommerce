<template>
  <div class="navbarcomponent">
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <a class="navbar-brand ml-2" href="#">Star-Electronics</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-5">
      <li class="nav-item">
         <router-link to="/" class="nav-link">Home</router-link> 
     
      </li>
      <li class="nav-item">
         <router-link to="/about" class="nav-link">About</router-link>
      </li>
    
      
    </ul>

     <form class="form-inline ml-auto my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#signmodel" :class="{'d-none':isLoggedIn}">Get Started</button>
      <router-link to="/admin" v-if="isLoggedIn" class="btn btn-success">Go To Dashboard</router-link>
    </form>
    

    <div class="dropdown dropleft">
  <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <i class="fas fa-shopping-cart"></i> <span class="badge badge-light" v-if="productCount !== 0">{{productCount}}</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <h5 class="dropdown-header"> <i class="fas fa-shopping-cart"></i> Your Cart </h5>
      <div class="dropdown-item" v-for="c in Cart" :key="c.id">
        <div class="media">
          <img :src="c.img" class="mr-3 img-rounded" width="100px" height="70px">
          <div class="media-body h6">
            {{c.name}}
            <br>
           <span class="text-muted">{{c.price|currency}}</span>
            <br>
            <span class=""><i class="fas fa-trash-alt text-danger p-2" @click="removeItem(c.id)"></i></span>
          </div>
      </div>
    </div>
    <div class="dropdown-item disabled">
        <div class="media">
          <h5>Total : </h5>
          <div class="media-body h6">
           
          </div>
        </div>
    </div>
  </div>
</div>
  </div>
</nav>

<!-- Modal -->
<div class="modal fade" id="signmodel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="exampleModalCenterTitle">Login Or Join Us</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Signup</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
   <loginform/>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <signupform/>
  </div>
</div>
        <!-- <div class="container">
          <form action="">
            <div class="form-group">
              <label for="exampleFormControlInput1">Email:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Password:</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Your Password">
            </div>
            <div class="form-row">
              <div class="col">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember me ?</label>
                </div>
              </div>
              <div class="col">
                <router-link to="/signup">Dont Have Account ?</router-link>
              </div>
            </div>
          </form>
        </div> -->
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import loginform from '../components/loginform'
import signupform from '../components/signupform'
import fb from '../firebase'
export default {
   name:'navbarcomponent',
   data(){
     return{
       isLoggedIn:false,
       price:null
     }
   },
   computed:{
     Cart(){
      return this.$store.state.cart
     },
     productCount(){
       return this.Cart.length
     },
    
   },
  
   created(){
       fb.auth().onAuthStateChanged((user)=>{
           if(user){
             this.isLoggedIn = true
           }else{
             this.isLoggedIn = false
           }
       })
   },
   methods:{
     removeItem(id){
           this.$store.commit('removeItem',id);   
     }
   },
   components:{
     loginform,signupform
   }
}
</script>

<style>

</style>