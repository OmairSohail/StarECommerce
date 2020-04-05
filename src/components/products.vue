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
                   <input type="text" class="form-control" placeholder="Enter A Product" name="product" v-model="Product.product">
                 </div>
                 <div class="form-group">
                   <label for="price">Price:</label>
                   <input type="number" class="form-control" placeholder="Price" name="price" v-model="Product.price">
                 </div>
                 <div class="form-group">
                   <button class="btn btn-primary" type="submit">Add Product</button>
                 </div>
              </form>

              <hr>
              <h2>Product List</h2>
               <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p in productData" :key="p.product">
      <td>{{p.product}}</td>
      <td>{{p.price}}</td> 
    </tr>
  </tbody>
</table>
            </div>
            <div class="col-lg-6"></div>
         </div>
     </div>
  </div>
</template>

<script>
import firebase,{firestore} from '../firebase'
export default {
    name:'products',
    data(){
      return{
        
        productData:[],
        Product:{
          product:'',
          price:'',
        }
      }
    },
    created(){
      this.loadData()

    },
    methods:{
      addproduct:function(){
        firestore.collection('Products')
        .add(this.Product)
        .then((docRef)=>{
           console.log(docRef.id);
           this.Product.name = '';
           this.Product.price = '';
           this.loadData();
        })
        .catch(err => console.log(err.message))
      },
      loadData(){
         firestore.collection("Products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              this.productData.push(doc.data());
              
          });
      });
      },
      resetData(){
        // Object.assign(this.$data,this.$options.data.apply(this))
      }
    }
}
</script>

<style>

</style>