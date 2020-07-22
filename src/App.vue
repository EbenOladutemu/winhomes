<template>
  <div id="app">
    <!-- <Nav/> -->
    <!-- <div id="preloader">
      <div id="status">
        <div class="spinner">Loading...</div>
      </div>
    </div> -->
    <transition name="animate" enter-active-class="animated fadeIn" leave-active-class="animate__delay-2s" mode="out-in">
      <router-view/>
    </transition>
    <a href="#" class="back_top"> <i class="mdi mdi-chevron-up"> </i> </a>
  </div>
</template>

<script>
// import Nav from '@/components/Nav.vue'

export default {
  components:{
    // Nav
  }
}
</script>

<style lang="scss">
html{
  scroll-behavior: smooth;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot span{
  background: #c40201!important;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:active span{
  width: 25px!important;
}
.header-desc{
  font-size: 1.5em;
}
</style>
