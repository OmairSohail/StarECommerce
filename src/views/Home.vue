<template>
  <div class="home">
    <navbarcomponent/>
    <hero/>
    <div class="jumbotron"></div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import hero from '../components/hero'

export default {
  name: 'Home',
  components: {
     hero
  }
}
</script>
