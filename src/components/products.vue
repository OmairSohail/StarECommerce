<template>
  <div class="products">
     <div class="container">
         <h2>Products</h2>
         <hr>
         <div class="row">
            <div class="col-lg-6">
              <h3>Add Products</h3>
              <form action="" @submit.prevent="addproduct">
                 <div class="form-group">
                   <label for="product">Product:</label>
                   <input type="text" class="form-control" placeholder="Enter A Product" name="product" v-model="product">
                 </div>
                 <div class="form-group">
                   <label for="price">Price:</label>
                   <input type="number" class="form-control" placeholder="Price" name="price" v-model="price">
                 </div>
                 <div class="form-group">
                   <button class="btn btn-primary" type="submit">Add Product</button>
                 </div>
              </form>
            </div>
            <div class="col-lg-6"></div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'products',
    data(){
      return{
        product:'',
        price:''
      }
    },
    methods:{
      addproduct:function(){
        
      }
    }
}
</script>

<style>

</style>