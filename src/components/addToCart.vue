<template>
  <div class="addToCart">
    <button class="btn btn-success" @click="addItem()"><i class="fas fa-cart-arrow-down"></i> Add To Cart</button>
  </div>
</template>

<script>
export default {
   name:'addToCart',
   props:{
     product_name:String,
     product_price:String,
     product_id:String,
     product_img:String
   },
   data(){
     return{
       Item:{
        name:this.product_name,
        price:this.product_price,
        id:this.product_id,
        img:this.product_img
       }
     }
   },
   methods:{
     addItem(){
       this.$store.commit('addtocart',this.Item);
     }
   }
}
</script>

<style>

</style>