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
    meta: [
      { name: 'description', content: 'Defined By Service and Experience' },
      { name: 'author', content: 'Eben Web Krafts' },
      { name: 'keywords', content: 'Winhomes Estates Global Services, winhomes, estates, real estates, land, housing, rent' },
      { name: 'website', content: 'Winhomes Estates Global Services' },
      { name: 'image', content: 'https://winhomesestates.com/favicon.ico' },
      // Schema.org for Google
      { itemprop: 'name', content: 'Winhomes Estates' },
      { itemprop: 'title', content: 'Winhomes Estates Global Services' },
      { itemprop: 'description', content: 'Defined By Service and Experience' },
      { itemprop: 'image', content: 'https://winhomesestates.com/favicon.ico' },
      // Twitter - Product (e-commerce)
      // Open Graph general (Facebook, Pinterest & Google+)
      { property: 'og:title', content: 'Winhomes Estates Global Services' },
      { property: 'og:description', content: 'Defined By Service and Experience' },
      { property: 'og:url', content: 'https://winhomesestates.com' },
      { property: 'og:image', content: 'https://winhomesestates.com/favicon.ico' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_NG' },
      { property: 'og:site_name', content: 'Winhomes Estates' },
      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: 'https://winhomesestates.com' },
      { name: 'twitter:title', content: 'Winhomes Estates Global Services' },
      { name: 'twitter:description', content: 'Defined By Service and Experience' },
      { name: 'twitter:image', content: 'https://winhomesestates.com/favicon.ico' },
      { name: 'twitter:site', content: 'https://winhomesestates.com' },
      { name: 'twitter:creator', content: '@EbenOladutemu' }
    ]
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
