<template>
  <div class="hero">
    <div class="">
      <div class="row">
          <div class="col-lg-8"></div>
          <div class="col-lg-4 text-right pr-5 pt-5">
              <h1>Vue Shop For Developers</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, tempora at? Velit doloremque totam quidem, maxime dolorem quasi possimus culpa.</p>
              <router-link to="/" class="btn btn-info mr-3">Explore</router-link>
              <router-link to="/" class="btn btn-outline-secondary">Products</router-link>
              
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'hero'
}
</script>

<style>
.hero{
    height:100vh;
    width:100%;
    background-image:url('../assets/svg1.jpg');
    background-size: cover;
}
</style>