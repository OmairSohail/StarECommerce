<template>
  <div class="products">
     <div class="container">
         <div class="row ">
            <div class="col-lg-4">
              <h2>Products</h2>
         <hr>
         <h4 class="text-muted">Get closer to your first sale by adding products, or import your existing product inventory.</h4>            
            
            </div>
            <div class="col-lg-8">
              <img src="../assets/productmanage.svg" alt="">
            </div>
         </div>
         <div class="row">
             <div class="container">
                <hr>
              <h2 class="inline">Product List <button class="btn btn-primary float-right" data-toggle="modal" data-target="#addProductModel">Add Product</button></h2>
              
              <!-- <table class="table table-striped table-dark">
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
              </table> -->
             </div>
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
              <div class="form-row">
                 <div class="col">
                   
                   <input type="text" class="form-control" placeholder="Enter A Product"  v-model="Product.product">
                
                
               </div>
                <div class="col-lg-6">
                  
                   <input type="number" class="form-control" placeholder="Price" v-model="Product.price">
                
                </div>
              </div>      
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="updateproduct">Save changes</button>
            </div>
          </div>
        </div>
      </div>
     <!-- Add Product Model -->
       <div class="modal fade" id="addProductModel" tabindex="-1" role="dialog" aria-labelledby="addProductmodel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductmodel">Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                       <div class="row">
                    <div class="col-12">
                      <input type="text" class="form-control" placeholder="Product Name" v-model="Product.name">
                      <textarea class="form-control mt-3" id="exampleFormControlTextarea1" rows="10" placeholder="Product Description" v-model="Product.description"></textarea>
                    </div>
                    <div class="col-12">
                      <h2 class="text-muted mt-3">Product Details</h2>
                      <input type="text" class="form-control" placeholder="Product Price" v-model="Product.price">
                      <input type="text" class="form-control mt-3" placeholder="Product tags" v-model="Product.tags">
                      <div class="custom-file mt-3">
                        <input type="file" class="custom-file-input" id="customFile">
                        <label class="custom-file-label" for="customFile">Choose file</label>
                      </div>
                    </div>
                  </div>
              </div>
                 
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="addproduct">Add Product</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import firebase,{fs} from '../firebase'
export default {
    name:'products',
    firestore(){
      return{
        Products:fs.collection('Products')
      }
    },
    data(){
      return{      
        productData:[],
        Product:{
          name:'',
          description:'',
          price:'',
          tags:'',
          img:''
        },
        activeItem:null
      }
    },
    created(){
     

    },
    methods:{
      updateproduct:function(){
        
      },
      editProduct(doc){
        $('#editModel').modal("show");
        

      },
      removeProduct(docId){
        if(confirm('are you sure ?')){
        
        }
      },
      addproduct(){
        this.$firestore.Products.add(this.Product);
        $('#addProductModel').modal("hide");
      },
     
    },
    
    
}
</script>

<style>

</style>