<template>
  <div class="orders">
     <div class="container">
         <div class="viewport">
            <div class="box">
              <h3>Manage Your Orders</h3>
              <h4 class="text-muted">You can manage your orders from here</h4>
              <hr>
            </div>
            <div class="image-con">
              <img src="../assets/ordersvg.svg" alt="">
            </div>
         </div>
         
         <div class="orders-table">
      
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>

         </div>

     </div>
  </div>
</template>

<script>
export default {
    name:'orders'
}
</script>

<style>
.viewport{
  height:100vh;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
}

.image-con img{
  width:30rem;
  height:30rem;
  padding-left:1rem;
  
}
</style>