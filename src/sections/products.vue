<template>
  <div class="productssection">
     <div class="container">
         <div class="container headings text-center">
             <h3>Featured Products</h3>
             <hr>
             <h5 class="text-muted">Bring called seed first of third give itself now ment</h5>
         </div>

         <div class="container products-container mt-4">
             <carousel class="carousel" :navigationEnabled="true" :autoplay="false">
                <slide v-for="p in Products" :key="p.id">
                    <div class="card">
                        <img :src="p.img" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{p.name}}</h5>
                            <p class="card-text h3"><strong>{{p.price | currency}}</strong></p>
                            <hr>
                             <add-to-cart
                            :product_name="p.name"
                            :product_price="p.price"
                            :product_id="p.id"
                            :product_img="p.img"
                            >
                            </add-to-cart>
                            <div class="mt-2">
                            <span class="badge badge-primary p-2 m-1" v-for="tag in p.tags" :key="tag">{{tag}}</span>
                            </div>
                           
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
import {fs} from '../firebase'
export default {
    name:'productssection',
    firestore(){
        return{
            Products:fs.collection('Products')
        }
    },
    data(){
        return{
            Products:[]
        }   
    },
    components:{
          Carousel,
          Slide,
          
    }
}
</script>

<style>

</style>