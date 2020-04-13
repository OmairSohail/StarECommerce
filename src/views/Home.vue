<template>
  <div class="home">
    <navbarcomponent/>
    <hero/>
    <benefits/>
    <productssection/>
    <corona/>
    <footer/>
  </div>
</template>

<script>
import hero from '../components/hero'
import benefits from '../sections/benefits'
import productssection from '../sections/products'
import corona from '../sections/corona'

export default {
  name: 'Home',
  components: {
     hero,benefits,productssection,corona
  }
}
</script>
