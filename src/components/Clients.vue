<template>
  <section class="section bg-light" id="clients">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center">
            <h2>Our <span class="font-weight-bold">Clients</span></h2>
          </div>
          <div class="services-title-border"></div>
        </div>
      </div>
      <div class="row mt-4 pt-4">
        <div class="col-lg-12">
          <carousel
            class="owl-carousel"
            :loop="true"
            :autoplay="true"
            :autoplayHoverPause="true"
            :items="1"
            :nav="false">
            <div class="text-center testi_boxes mx-auto">
              <div class="tam_testi_icon text-custom">
                  <i class="mbri-quote-left"></i>
              </div>
              <div class="mt-2">
                <div>
                    <img src="../assets/img/testi-1.jpg" alt="" class="mx-auto img-thumbnail img-fluid d-block rounded-circle">
                </div>
                <p class="client_review font-italic mt-4 text-center text-muted">" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."</p>
                <p class="client_name text-center mb-0 mt-4">- Ebony verty, <span class="font-weight-bold">Envato</span></p>
              </div>
            </div>
            <div class="text-center testi_boxes mx-auto">
              <div class="tam_testi_icon text-custom">
                <i class="mbri-quote-left"></i>
              </div>
              <div class="mt-2">
                <div>
                    <img src="@/assets/img/testi-2.jpg" alt="" class="mx-auto img-thumbnail img-fluid d-block rounded-circle">
                </div>
                <p class="client_review font-italic mt-4 text-center text-muted">" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."</p>
                <p class="client_name text-center mb-0 mt-4">- Ebony verty, <span class="font-weight-bold">Envato</span></p>
              </div>
            </div>
            <div class="text-center testi_boxes mx-auto">
              <div class="tam_testi_icon text-custom">
                <i class="mbri-quote-left"></i>
              </div>
              <div class="mt-2">
                <div>
                  <img src="@/assets/img/testi-3.jpg" alt="" class="mx-auto img-thumbnail img-fluid d-block rounded-circle">
                </div>
                <p class="client_review font-italic mt-4 text-center text-muted">" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."</p>
                <p class="client_name text-center mb-0 mt-4">- Ebony verty, <span class="font-weight-bold">Envato</span></p>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import carousel from 'vue-owl-carousel2'

export default {
  components:{
    carousel
  }
}
</script>

<style scoped lang="scss">
.bg-light{
  background-color: #ffffff!important;
}
.owl-carousel{
  display: block;
}
.owl-carousel .owl-item img{
  width: unset;
}
.owl-theme .owl-nav{
  display: none!important;
}

</style>