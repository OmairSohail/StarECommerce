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
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="p in productData" :key="p.data().id">
                    <td>{{p.data().product}}</td>
                    <td>{{p.data().price}}</td>
                    <td>
                      <button class="btn btn-sm btn-warning" @click="editProduct(p)">edit</button>
                      <button class="btn btn-sm btn-danger" @click="removeProduct(p.id)">delete</button>
                    </td>
                     
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-lg-6">
              <img src="../assets/productmanage.svg" alt="">
            </div>
         </div>
         <div class="row">

         </div>
     </div>


     <!-- Modal -->
      <div class="modal fade" id="editModel" tabindex="-1" role="dialog" aria-labelledby="editProductModel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editProductModel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
                 <div class="form-group">
                   <input type="text" class="form-control" placeholder="Enter A Product"  v-model="Product.product">
                 </div>
                 <div class="form-group">
                   <input type="number" class="form-control" placeholder="Price" v-model="Product.price">
                 </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="updateproduct">Save changes</button>
            </div>
          </div>
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
        },
        activeItem:null
      }
    },
    created(){
      this.loadData()

    },
    methods:{
      updateproduct:function(){
         var docRef = db.collection("Products").doc(this.activeItem);

          return washingtonRef.update({
              capital: true
          })
          .then(function() {
              console.log("Document successfully updated!");
          })
          .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });
      },
      editProduct(doc){
        $('#editModel').modal("show");
        this.Product = doc.data();
        this.activeItem = doc.id;

      },
      removeProduct(docId){
        if(confirm('are you sure ?')){
         firestore.collection("Products").doc(`${docId}`).delete().then(function() {
                alert("Document successfully deleted!");
                
            }).catch(function(error) {
                alert("Error");
                console.log("Error removing document: ", error);
            });
        }
      },
      addproduct:function(){
        firestore.collection('Products')
        .add(this.Product)
        .then((docRef)=>{
           console.log(docRef.id);
           this.Product.name = '';
           this.Product.price = '';
           
        })
        .catch(err => console.log(err.message))
      },
      loadData(){
         firestore.collection("Products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              this.productData.push(doc);
              
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