<template>
  <div id="app">
    <Nav/>
    <!-- <div id="preloader">
      <div id="status">
        <div class="spinner">Loading...</div>
      </div>
    </div> -->
    <router-view/>
    <a href="#" class="back_top"> <i class="mdi mdi-chevron-up"> </i> </a>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components:{
    Nav
  }
}
</script>

<style lang="scss">

</style>
