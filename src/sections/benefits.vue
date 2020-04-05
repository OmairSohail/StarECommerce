<template>
  <div class="benefits">
     <div class="jumbotron bg-white">
         <div class="container grid-container">
             <div class="card justify-content-center align-items-center p-2">
                <span class="icon"> 
                    <i class="fas fa-truck"></i> 
                </span>
                <h5>Free Delivery</h5>
                <p class="text-muted">Shall open divide a one</p>
             </div>
             <div class="card justify-content-center align-items-center p-2">
                 <span class="icon"> 
                    <i class="fas fa-headset"></i> 
                </span>
                <h5>24-Hours Support</h5>
                <p class="text-muted">Shall open divide a one</p>
             </div>
             <div class="card justify-content-center align-items-center p-2">
                 <span class="icon"> 
                    <i class="fab fa-cc-stripe"></i> 
                </span>
                <h5>Secure Payments</h5>
                <p class="text-muted">Shall open divide a one</p>
             </div>
             <div class="card justify-content-center align-items-center p-2">
                 <span class="icon"> 
                    <i class="fas fa-coins"></i> 
                </span>
                <h5>Money Back Guarenty</h5>
                <p class="text-muted">Shall open divide a one</p>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
   name:'benefits'
}
</script>

<style scoped>
.grid-container{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:1rem;
}

.grid-container > .card {
    max-width:400px;
}

.icon{
    font-size:4rem;
}
</style>