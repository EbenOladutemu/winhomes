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
  },
  created(){
    document.title = 'Welcome - Winhomes Estate'
  },
  metaInfo:{

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

.services-title-border {
  height: 3px;
  width: 5%;
  margin: 15px auto;
  transition: all 0.5s;
  background-color: #c40201;
}

.bg-overlay{
  background-color: #54545420!important;
}

.ekko-lightbox a:hover{
  color: #fff!important;
}
.modal-footer{
  display: block!important;
}
.ekko-lightbox .modal-footer {
  text-align: center;
}
</style>
