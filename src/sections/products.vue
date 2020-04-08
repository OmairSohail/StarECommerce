<template>
  <div class="productssection">
     <div class="container">
         <div class="container headings text-center">
             <h3>Featured Products</h3>
             <hr>
             <h5 class="text-muted">Bring called seed first of third give itself now ment</h5>
         </div>

         <div class="container products-container mt-4">
             <div class="card">
                <img src="https://www.theproteinfactory.pk/wp-content/uploads/2016/08/Whey-80-2.png" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Whey Protein Powder 1 kg</h5>
                    <p class="card-text">$25.00</p>
                    <button class="btn btn-success">Buy now</button>
                </div>
             </div>
              <div class="card">
                <img src="https://www.theproteinfactory.pk/wp-content/uploads/2016/08/peanut-butter.png" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Peanut Butter Smooth 1kg</h5>
                    <p class="card-text">$35.00</p>
                    <button class="btn btn-success">Buy now</button>
                </div>
             </div>
              <div class="card">
                <img src="https://www.theproteinfactory.pk/wp-content/uploads/2018/06/Protein-Brownies-600x600.png" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Protein Brownies</h5>
                    <p class="card-text">$35.00</p>
                    <button class="btn btn-success">Buy now</button>
                </div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'productssection'
}
</script>

<style>
.products-container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:1rem;
}
</style>