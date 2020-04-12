<template>
  <div class="productssection">
     <div class="container">
         <div class="container headings text-center">
             <h3>Featured Products</h3>
             <hr>
             <h5 class="text-muted">Bring called seed first of third give itself now ment</h5>
         </div>

         <div class="container products-container mt-4">
             <carousel perPage="3" class="carousel" :navigationEnabled="true" :autoplay="false">
                <slide>
                    <div class="card">
                <img src="https://www.theproteinfactory.pk/wp-content/uploads/2016/08/Whey-80-2.png" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Whey Protein Powder 1 kg</h5>
                    <p class="card-text">$25.00</p>
                    <button class="btn btn-success">Buy now</button>
                </div>
             </div>
                </slide>
                <slide>
                    <div class="card">
                <img src="https://www.theproteinfactory.pk/wp-content/uploads/2016/08/peanut-butter.png" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Peanut Butter Smooth 1kg</h5>
                    <p class="card-text">$35.00</p>
                    <button class="btn btn-success">Buy now</button>
                </div>
             </div>
                </slide>
                 <slide>
                      <div class="card">
                        <img src="https://www.theproteinfactory.pk/wp-content/uploads/2018/06/Protein-Brownies-600x600.png" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">Protein Brownies</h5>
                        <p class="card-text">$35.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                  <slide>
                      <div class="card">
                        <img src="https://www.optimumnutrition.com/sites/g/files/mrktmf206/files/styles/product_lp_thumb/public/GS-ISOLATE.jpg?itok=X1CvfdnU" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">SUPER MASS GAINER IS FORMULATED FOR ONE THING: MASSIVE GAINS</h5>
                        <p class="card-text">$35.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                  <slide>
                      <div class="card">
                        <img src="https://www.optimumnutrition.com/sites/g/files/mrktmf206/files/styles/product_lp_thumb/public/GoldStandardWheyProtein.jpg?itok=g-zzazTW" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">ELITE 100% WHEY</h5>
                        <p class="card-text">$35.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                 <slide>
                      <div class="card">
                        <img src="https://www.optimumnutrition.com/sites/g/files/mrktmf206/files/styles/product_lp_thumb/public/gold-standard-gainer-6443.jpg?itok=PaXaZOwr" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">WHEY PROTEIN ISOLATE POWDER</h5>
                        <p class="card-text">$35.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                 <slide>
                      <div class="card">
                        <img src="https://www.optimumnutrition.com/sites/g/files/mrktmf206/files/styles/product_lp_thumb/public/greek-yogurt-protein-smoothie-6533.jpg?itok=ZkO5Ap_j" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">WHEY PROTEIN SMOOTHIE</h5>
                        <p class="card-text">$19.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                 <slide>
                      <div class="card">
                        <img src="https://www.optimumnutrition.com/sites/g/files/mrktmf206/files/styles/product_lp_thumb/public/ON_Protein-Ridges_Website_SourCream_sized.jpg?itok=ySQSt4WM" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">WHEY PROTEIN RIDGE</h5>
                        <p class="card-text">$19.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                 <slide>
                      <div class="card">
                        <img src="https://www.optimumnutrition.com/sites/g/files/mrktmf206/files/styles/product_lp_thumb/public/protein-water-6322.jpg?itok=8zzKOhlN" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">PROTEIN WATER</h5>
                        <p class="card-text">$39.00</p>
                        <button class="btn btn-success">Buy now</button>
                        </div>
                     </div>
                 </slide>
                </carousel>
            
              
             
         </div>
     </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name:'productssection',
    components:{
          Carousel,
          Slide
    }
}
</script>

<style>
.products-container{
    /* display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:1rem; */
}

</style>