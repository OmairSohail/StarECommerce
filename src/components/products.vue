<template>
  <div class="products">
     <div class="container">
         <div class="showcase">
              <div class="box">
                <h2>Manage Products</h2>
                <hr>
                <h6 class="text-muted text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id optio quae ab labore beatae?</h6>
              </div>
         </div>
         <div class="row">
             <div class="container">
                <hr>
              <h2 class="inline">Product List <button class="btn btn-primary float-right" @click="openModel()">Add Product</button></h2>
              
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
         <div class="row">
            <div class="col-12">
               <div class="container">              
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price (PKR)</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="p in Products" :key="p.id">
                        <td class="text-uppercase">{{p.name}}</td>
                        <td >{{p.price}}</td>
                        <td>
                          <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-warning" @click="editProduct(p.id)">Edit</button>
                            <button type="button" class="btn btn-danger" @click="deleteProduct(p.id)">Delete</button>
                          </div>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
            </div>
           
         </div>
     </div>


<!-- MODELS  -->

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
              <div class="container">
                       <div class="row">
                    <div class="col-12">
                      <input type="text" class="form-control" placeholder="Product Name" v-model="ProductEdit.name">
                      <textarea class="form-control mt-3" id="exampleFormControlTextarea1" rows="10" placeholder="Product Description" v-model="ProductEdit.description"></textarea>
                    </div>
                    <div class="col-12">
                      <h2 class="text-muted mt-3">Product Details</h2>
                      <input type="text" class="form-control" placeholder="Product Price" v-model="ProductEdit.price">
                      <input type="text" class="form-control mt-3" placeholder="Product tags" v-model="ProductEdit.tags">
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
              <button type="button" class="btn btn-primary" @click="updateproduct">Apply Changes</button>
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
              <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
    

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
        Products:[],
        ProductEdit:[],
        Product:{
          name:'',
          description:'',
          price:'',
          tags:'',
          img:'',
          createdAt: new Date().toDateString()
        },
        activeItem:''
      }
    },
    created(){
     

    },
    methods:{
      updateproduct(){
        this.$firestore.Products.doc(this.ProductEdit.id).update(this.ProductEdit);
         $('#editModel').modal("hide");
          Toast.fire({
              icon: 'success',
              title: 'Product Updated Successfully'
            })

      },
      editProduct(doc){
        $('#editModel').modal("show");
        let pr = this.Products.filter(x => x.id == doc)
        this.ProductEdit = pr[0]; 
        this.activeItem = doc;
      },
      deleteProduct(doc){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
             
            this.$firestore.Products.doc(doc).delete();

           Toast.fire({
              icon: 'success',
              title: 'Product Deleted Successfully'
            })
          }
        })
      },
      addProduct(){
       
        this.$firestore.Products.add(this.Product);
        $('#addProductModel').modal("hide");
        Toast.fire({
              icon: 'success',
              title: 'Product Added Successfully'
            })
            this.Product.name = "";
            this.Product.description = "";
            this.Product.price = "";
            this.Product.tags = "";
            this.Product.img = "";
            
            this.Product.createdAt = "";
            
      },
      openModel(){    
        $('#addProductModel').modal("show");
      }
     
    },
    
    
}
</script>

<style>
.showcase{
  height:100vh;
  background-image:url('../assets/productmanage.svg');
  background-size:cover;
}

.showcase .box{
  width:40%;
}
</style>