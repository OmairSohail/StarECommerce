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
                <img src="https://colorlib.com/preview/theme/eiser/img/product/feature-product/f-p-1.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Latest Men's Sneaker</h5>
                    <p class="card-text">$25.00</p>
                </div>
             </div>
              <div class="card">
                <img src="https://colorlib.com/preview/theme/eiser/img/product/feature-product/f-p-2.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Red Women Purse</h5>
                    <p class="card-text">$35.00</p>
                </div>
             </div>
              <div class="card">
                <img src="https://colorlib.com/preview/theme/eiser/img/product/feature-product/f-p-3.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Men's Stylish Watch</h5>
                    <p class="card-text">$45.00</p>
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